'use client';

import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
	const router = useRouter();
	return (
		<Box minH="100vh" bg="black.900">
			<Button
				bg="green.600"
				_hover={{ bg: 'green.700' }}
				h="4rem"
				w="full"
				onClick={() => router.push('/')}
			>
				Ir para login
			</Button>
		</Box>
	);
}
