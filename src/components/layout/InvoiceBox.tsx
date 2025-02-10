import {
	Box,
	Button,
	Code,
	Heading,
	Slider,
	Text,
	useSlider,
	VStack,
} from '@chakra-ui/react';
import { Radio, RadioGroup } from '../ui/radio';
import { useState } from 'react';
import { toaster } from '../ui/toaster';

export default function InvoiceBox() {
	const [selectedInvoice, setSelectedInvoice] = useState('planbasic');
	const slider = useSlider({
		defaultValue: [1],
		thumbAlignment: 'center',
	});
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
			const response = await fetch('/api/stripe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: 'lucasfidalgo07@gmail.com',
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
					<VStack align="start" color={'gray.600'}>
						<Radio value="planbasic">Plano Básico - R$20/mês</Radio>
						<Code>Consultas desejadas: {slider.value}</Code>
						<Slider.RootProvider value={slider} width="full">
							<Slider.Label>Selecione a quantidade de consultas:</Slider.Label>
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
	);
}
