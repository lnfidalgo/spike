'use client';

import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function CancelPage() {
	const router = useRouter();

	return (
		<Box minH="100vh" bg="black.900">
			<Button
				h="4rem"
				w="full"
				variant="outline"
				borderColor="red.600"
				color="red.600"
				onClick={() => router.push('/signup')}
				_hover={{ bg: 'red.500', color: 'red.600' }}
			>
				Voltar para sign up
			</Button>
		</Box>
	);
}
