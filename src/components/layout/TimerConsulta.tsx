'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface TimerConsultaProps {
	userEmail: string;
	onEnd: () => void;
}

export default function TimerConsulta({
	userEmail,
	onEnd,
}: TimerConsultaProps) {
	const [timeLeft, setTimeLeft] = useState(20);
	const supabase = createClientComponentClient();

	useEffect(() => {
		if (timeLeft <= 0) {
			handleEndConsulta();
			return;
		}

		const timer = setInterval(() => {
			setTimeLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [timeLeft]);

	async function handleEndConsulta() {
		const { data, error } = await supabase
			.from('user_consultas')
			.select('consultas')
			.eq('email', userEmail)
			.single();

		if (error || !data) {
			console.error('Erro ao obter consultas:', error?.message);
			return;
		}

		const newCount = Math.max(0, data.consultas - 1);

		await supabase
			.from('user_consultas')
			.update({ consultas: newCount })
			.eq('email', userEmail);

		onEnd();
	}

	function formatTime(seconds: number) {
		const h = Math.floor(seconds / 3600);
		const m = Math.floor((seconds % 3600) / 60);
		const s = seconds % 60;
		return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
	}

	return (
		<div className="bg-gray-900 text-white p-4 rounded-lg text-center">
			<h2 className="text-xl font-bold">Tempo Restante</h2>
			<p className="text-3xl font-mono">{formatTime(timeLeft)}</p>
		</div>
	);
}
