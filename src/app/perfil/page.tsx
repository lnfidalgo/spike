'use client';

import InvoiceBox from '@/components/layout/InvoiceBox';
import {
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogRoot,
	DialogTrigger,
} from '@/components/ui/dialog';
import { supabase } from '@/services/supabase';
import { Button, Card, Link } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface UserData {
	consultas: number;
}

export default function Perfil() {
	const { data: session } = useSession();
	const [userData, setUserData] = useState<UserData | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (session?.user) {
			fetchUserData();
		}
	}, [session]);

	async function fetchUserData() {
		setLoading(true);
		const { data, error } = await supabase
			.from('user_consultas')
			.select('*')
			.eq('email', session?.user.email)
			.maybeSingle();
		if (error) console.error(error);

		setUserData(data);
		setLoading(false);
	}
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
			<Link href={'/dashboard'}>Ir para Dashboard</Link>
			<Button bg={'red'} onClick={() => signOut({ callbackUrl: '/' })}>
				Sair
			</Button>
			<Card.Root className="w-full max-w-md shadow-lg">
				<Card.Body>
					<Card.Title>Perfil</Card.Title>
					<Card.Description>
						{loading ? (
							<p>Carregando...</p>
						) : userData ? (
							<div className="space-y-4">
								<p>
									<strong>Nome:</strong> {session?.user?.name || 'N/A'}
								</p>
								<p>
									<strong>Email:</strong> {session?.user?.email}
								</p>
								<p>
									<strong>Consultas Restantes:</strong> {userData?.consultas}
								</p>
								<DialogRoot>
									<DialogTrigger>
										<Button className="w-full">Comprar mais consultas</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogBody>
											<InvoiceBox />
										</DialogBody>
										<DialogCloseTrigger />
									</DialogContent>
								</DialogRoot>
								<Button onClick={fetchUserData} className="w-full">
									Recarregar Dados
								</Button>
							</div>
						) : (
							<p>Usuário não encontrado.</p>
						)}
					</Card.Description>
				</Card.Body>
			</Card.Root>
		</div>
	);
}
