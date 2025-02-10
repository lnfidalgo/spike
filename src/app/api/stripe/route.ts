import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: '2025-01-27.acacia',
});

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const invoicePlans: Record<string, { priceId: string; consultas: number }> = {
	planbasic: { priceId: 'price_1QpD9iAD3w9rWoCr4x3qyzGA', consultas: 1 },
};

export async function POST(req: Request) {
	try {
		const { email, invoice, quantity } = await req.json();

		if (!email || !invoice || !quantity) {
			return NextResponse.json(
				{ message: 'Parâmetros ausentes ou inválidos.' },
				{ status: 400 },
			);
		}

		const selectedPlan = invoicePlans[invoice];
		if (!selectedPlan) {
			return NextResponse.json({ message: 'Plano inválido.' }, { status: 400 });
		}

		const customers = await stripe.customers.list({ email, limit: 1 });
		let customer = customers.data[0];

		if (!customer) {
			customer = await stripe.customers.create({ email });
		}

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			mode: 'subscription',
			customer: customer.id,
			line_items: [
				{
					price: selectedPlan.priceId,
					quantity: quantity,
				},
			],
			success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
		});

		if (!session.url) {
			throw new Error('Não foi possível gerar a URL de checkout.');
		}
		const { data: existingData } = await supabase
			.from('user_consultas')
			.select('consultas')
			.eq('email', email)
			.maybeSingle();

		const consultasAtuais = existingData?.consultas ?? 0;
		const novasConsultas = consultasAtuais + selectedPlan.consultas * quantity;

		const { error } = await supabase
			.from('user_consultas')
			.upsert({ email, consultas: novasConsultas }, { onConflict: 'email' });

		if (error) throw error;

		return NextResponse.json({ url: session.url }, { status: 200 });
	} catch (error: any) {
		console.error('Erro na criação da sessão de checkout:', error);
		return NextResponse.json(
			{ message: error.message || 'Erro interno no servidor.' },
			{ status: 500 },
		);
	}
}
