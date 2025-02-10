'use client';

import ChatPage from '@/components/layout/ChatPage';
import ConsultationTimer from '@/components/layout/TimerConsulta';
import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function Dashboard() {
	const [isChatActive, setIsChatActive] = useState(false);
	const email = 'lucasfidalgo07@gmail.com';

	async function startConsulta() {
		try {
			const res = await fetch('/api/start_consulta', {
				method: 'POST',
				body: JSON.stringify({ email }),
			});

			const data = await res.json();
			if (res.ok) {
				setIsChatActive(true);
				setTimeout(() => setIsChatActive(false), 1 * 5 * 1000);
			} else {
				alert(data.message);
			}
		} catch (error) {
			console.error('Erro ao iniciar consulta:', error);
		}
	}
	return (
		<Flex
			direction={'column'}
			h={'100vh'}
			justifyContent={'center'}
			alignItems={'center'}
			bg={'blackAlpha.900'}
		>
			<Link href={'/perfil'} color="white">
				Ir para Perfil
			</Link>
			<Flex color={'white'} alignItems={'center'} gap={12}>
				<Text>Dashboard</Text>
				{isChatActive ? (
					<Text>Consulta em andamento</Text>
				) : (
					<Button onClick={startConsulta} bg={'green.300'}>
						Iniciar consulta
					</Button>
				)}
				{isChatActive && (
					<ConsultationTimer
						userEmail={email}
						onEnd={() => setIsChatActive(false)}
					/>
				)}
			</Flex>
			<ChatPage />
		</Flex>
	);
}
