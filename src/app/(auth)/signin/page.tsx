'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
	Box,
	Button,
	Input,
	Text,
	VStack,
	Link,
	Field,
} from '@chakra-ui/react';
import { toaster, Toaster } from '@/components/ui/toaster';

export default function SignInPage() {
	const router = useRouter();
	const supabase = createClientComponentClient();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<{ email: string; password: string }>();

	const [loading, setLoading] = useState(false);

	async function onSubmit(data: { email: string; password: string }) {
		setLoading(true);

		const { error } = await supabase.auth.signInWithPassword({
			email: data.email,
			password: data.password,
		});

		if (error) {
			toaster.create({
				title: 'Deu ERRO',
				description: error.message,
				type: 'error',
				duration: 3000,
			});
			setLoading(false);
			return;
		}

		toaster.create({
			title: 'Login bem sucedido!',
			description: 'Use a plataforma',
			type: 'success',
			duration: 3000,
		});
		router.push('/dashboard');
	}

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			minH="100vh"
			bg={'black'}
		>
			<Toaster />
			<Box
				w="full"
				maxW="md"
				p={6}
				bgColor={'gray.900'}
				rounded="lg"
				boxShadow="md"
				color={'white'}
			>
				<Text fontSize="xl" fontWeight="semibold" textAlign="center" mb={4}>
					Entrar
				</Text>

				<VStack as="form" onSubmit={handleSubmit(onSubmit)}>
					<Field.Root invalid>
						<Field.Label>Email</Field.Label>
						<Input
							type="email"
							placeholder="seu@email.com"
							{...register('email')}
						/>
						<Field.ErrorText>
							{typeof errors.email?.message === 'string' &&
								errors.email.message}
						</Field.ErrorText>
					</Field.Root>

					<Field.Root invalid>
						<Field.Label>Senha</Field.Label>
						<Input
							type="password"
							placeholder="••••••"
							{...register('password')}
						/>
						<Field.ErrorText>
							{typeof errors.password?.message === 'string' &&
								errors.password.message}
						</Field.ErrorText>
					</Field.Root>

					<Button
						type="submit"
						loading={loading || isSubmitting}
						bg={'green.300'}
						w="full"
					>
						Entrar
					</Button>
				</VStack>

				<Text textAlign="center" fontSize="sm" color="gray.600" mt={4}>
					Ainda não tem uma conta?{' '}
					<Link
						href="/signup"
						color="blue.500"
						fontWeight="semibold"
						_hover={{ textDecoration: 'underline' }}
					>
						Criar conta
					</Link>
				</Text>
			</Box>
		</Box>
	);
}
