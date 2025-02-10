'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, Input, Button, VStack, Text, Spinner } from '@chakra-ui/react';
import axios from 'axios';

interface Message {
	role: 'user' | 'assistant';
	content: string;
}

export default function ChatPage() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(false);
	const chatEndRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	const sendMessage = async () => {
		if (!input.trim()) return;

		const newMessage: Message = { role: 'user', content: input };
		setMessages((prev) => [...prev, newMessage]);
		setInput('');
		setLoading(true);

		try {
			const { data } = await axios.post('/api/chat', {
				messages: [...messages, newMessage],
			});

			setMessages(data.messages);
		} catch (error) {
			console.error('Erro ao enviar mensagem:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box
			p={4}
			maxW={['200px', '300px', '700px', '600px', '1200px']}
			mx="auto"
			bg={'white'}
			color={'black'}
		>
			<VStack align="stretch" h="500px" overflowY="auto">
				{messages.map((msg, index) => (
					<Box
						key={index}
						bg={msg.role === 'user' ? 'blue.100' : 'gray.200'}
						alignSelf={msg.role === 'user' ? 'flex-end' : 'flex-start'}
						p={3}
						borderRadius="md"
						maxW="80%"
					>
						<Text>{msg.content}</Text>
					</Box>
				))}

				{loading && <Spinner size="sm" />}
				<div ref={chatEndRef} />
			</VStack>

			<Box display="flex" mt={4}>
				<Input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Digite sua mensagem..."
				/>
				<Button ml={2} onClick={sendMessage} disabled={loading}>
					Enviar
				</Button>
			</Box>
		</Box>
	);
}
