import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const { messages } = await req.json();

		const aiResponse = {
			role: 'assistant',
			content: 'Sou apenas um teste, não sei responder a isso',
		};

		return NextResponse.json({ messages: [...messages, aiResponse] });
	} catch (error) {
		return NextResponse.json(
			{ error: `Erro no servidor ${error}` },
			{ status: 500 },
		);
	}
}
