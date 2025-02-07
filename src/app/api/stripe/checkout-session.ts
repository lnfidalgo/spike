import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: '2025-01-27.acacia',
});

const invoicePlans: Record<string, { priceId: string }> = {
	planbasic: { priceId: 'price_1QpD9iAD3w9rWoCr4x3qyzGA' },
};

type Data = { url: string } | { message: string };

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Método não permitido' });
	}

	try {
		const { email, invoice, quantity } = req.body;

		if (!email || !invoice) {
			return res.status(400).json({ message: 'Parâmetros ausentes' });
		}

		const selectedPlan = invoicePlans[invoice];
		if (!selectedPlan) {
			return res.status(400).json({ message: 'Plano inválido' });
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

		return res.status(200).json({ url: session.url as string });
	} catch (error: any) {
		console.error('Erro na criação da invoice:', error);
		return res.status(500).json({
			message: error.message || 'Erro interno no servidor ao criar a invoice.',
		});
	}
}
