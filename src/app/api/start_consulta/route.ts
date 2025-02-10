import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(req: Request) {
	try {
		const { email } = await req.json();

		if (!email) {
			return NextResponse.json(
				{ message: 'Email é obrigatório.' },
				{ status: 400 },
			);
		}

		const { data, error } = await supabase
			.from('user_consultas')
			.select('consultas')
			.eq('email', email)
			.single();

		if (error || !data || data.consultas <= 0) {
			return NextResponse.json(
				{ message: 'Nenhuma consulta disponível.' },
				{ status: 403 },
			);
		}

		setTimeout(
			async () => {
				await supabase
					.from('user_consultas')
					.update({ consultas: data.consultas - 1 })
					.eq('email', email);
			},
			15 * 1 * 1000,
		);

		return NextResponse.json(
			{ message: 'Consulta iniciada. Duração: 1 hora.' },
			{ status: 200 },
		);
	} catch (error: any) {
		console.error('Erro ao iniciar a consulta:', error);
		return NextResponse.json(
			{ message: 'Erro ao iniciar a consulta.' },
			{ status: 500 },
		);
	}
}
