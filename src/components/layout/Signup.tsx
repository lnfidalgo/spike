'use client';

import { Toaster, toaster } from '@/components/ui/toaster';
import { supabase } from '@/services/supabase';
import {
	Box,
	Button,
	Code,
	Field,
	Heading,
	Input,
	Link,
	Slider,
	Text,
	useSlider,
	VStack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Radio, RadioGroup } from '../ui/radio';

const schema = z.object({
	username: z.string().min(3, 'O usuário deve ter pelo menos 3 caracteres'),
	email: z.string().email('Digite um email válido'),
	password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

export default function Signup() {
	const [step, setStep] = useState('signup');
	const [userData, setUserData] = useState<{ email: string } | null>(null);
	const [selectedInvoice, setSelectedInvoice] = useState('planbasic');

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: zodResolver(schema) });

	const slider = useSlider({
		defaultValue: [1],
		thumbAlignment: 'center',
	});

	const onSubmit = async (data: any) => {
		try {
			const { error } = await supabase.auth.signUp({
				email: data.email,
				password: data.password,
				options: {
					data: { username: data.username },
				},
			});

			if (error) throw error;

			toaster.create({
				title: 'Conta criada com sucesso!',
				description: 'Verifique seu email para confirmar a conta.',
				type: 'success',
				duration: 3000,
			});
			setUserData(data.email);
			setStep('invoice');
		} catch (e: any) {
			toaster.create({
				title: 'Erro ao criar conta',
				description: e.message || 'Ocorreu um erro inesperado.',
				type: 'error',
				duration: 3000,
			});
		}
	};

	async function handleCheckout() {
		if (!selectedInvoice) {
			toaster.create({
				title: 'Selecione um plano',
				description: 'Para prosseguir, selecione um mplano',
				type: '',
				duration: 3000,
			});
			return;
		}

		try {
			const response = await fetch('/api/stripe/checkout-session', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: userData,
					invoice: selectedInvoice,
					quantity: Number(slider.value),
				}),
			});
			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || 'Erro ao criar a sessão de checkout.');
			}

			window.location.href = data.url;
		} catch (err) {
			console.error('Ocorreu algum erro:', err);
			toaster.create({
				title: 'Deu ERRO',
				description: 'Ve aqui',
				type: 'error',
				duration: 3000,
			});
		}
	}

	return (
		<Box minH="full" display="flex" alignItems="center" justifyContent="center">
			<Toaster />
			{step === 'signup' && (
				<Box
					p={8}
					boxShadow="lg"
					borderRadius="md"
					bgColor={'gray.900'}
					w={{ base: '90%', md: '400px' }}
				>
					<Heading mb={4} size="lg" textAlign="center">
						Crie sua conta
					</Heading>
					<Text mb={6} textAlign="center" color="gray.600">
						Preencha os campos abaixo para se cadastrar.
					</Text>
					<form onSubmit={handleSubmit(onSubmit)}>
						<VStack>
							<Field.Root invalid>
								<Field.Label>
									<Field.RequiredIndicator />
									Usuário
								</Field.Label>
								<Input placeholder="Seu usuário" {...register('username')} />
								<Field.ErrorText>
									{typeof errors.username?.message === 'string' &&
										errors.username.message}
								</Field.ErrorText>
							</Field.Root>

							<Field.Root>
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

							<Field.Root>
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
								bg={'green.300'}
								width="full"
								type="submit"
								loading={isSubmitting}
							>
								Cadastrar
							</Button>
						</VStack>
					</form>
					<Text textAlign="center" fontSize="sm" color="gray.600" mt={4}>
						Já possui uma conta?{' '}
						<Link
							href="/signin"
							color="blue.500"
							fontWeight="semibold"
							_hover={{ textDecoration: 'underline' }}
						>
							Acessar conta
						</Link>
					</Text>
				</Box>
			)}

			{step === 'invoice' && (
				<Box
					p={8}
					boxShadow="lg"
					borderRadius="md"
					bgColor={'gray.900'}
					w={{ base: '90%', md: '400px' }}
				>
					<Heading mb={4} size="lg" textAlign="center">
						Selecione seu Invoice
					</Heading>
					<Text mb={6} textAlign="center" color="gray.600">
						Escolha um plano para concluir o seu cadastro.
					</Text>
					<VStack>
						<RadioGroup
							onValueChange={(e) => setSelectedInvoice(e.value)}
							defaultValue={'planbasic'}
							w="full"
						>
							<VStack align="start">
								<Radio value="planbasic">Plano Básico - R$20/mês</Radio>
								<Code>Consultas desejadas: {slider.value}</Code>
								<Slider.RootProvider value={slider} width="full">
									<Slider.Label>
										Selecione a quantidade de consultas:
									</Slider.Label>
									<Slider.Control>
										<Slider.Track bgColor={'red.200'}>
											<Slider.Range bgColor={'green.300'} />
										</Slider.Track>
										<Slider.Thumb index={0}>
											<Slider.HiddenInput />
										</Slider.Thumb>
									</Slider.Control>
								</Slider.RootProvider>
							</VStack>
						</RadioGroup>
						<Button bg={'green.300'} width="full" onClick={handleCheckout}>
							Confirmar e Pagar
						</Button>
					</VStack>
				</Box>
			)}
		</Box>
	);
}
