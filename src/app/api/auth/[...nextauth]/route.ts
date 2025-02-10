import { supabase } from '@/services/supabase';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

declare module 'next-auth' {
	interface Session {
		user: {
			id: string;
			name?: string | null;
			email?: string | null;
			image?: string | null;
		};
	}
}

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email', placeholder: 'seu@email.com' },
				password: { label: 'Senha', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error('Email e senha são obrigatórios');
				}

				const { data, error } = await supabase.auth.signInWithPassword({
					email: credentials.email,
					password: credentials.password,
				});

				if (error || !data.user) {
					throw new Error('Credenciais inválidas');
				}

				return {
					id: data.user.id,
					email: data.user.email,
					name: data.user.email ? data.user.email.split('@')[0] : '',
				};
			},
		}),
	],
	pages: {
		signIn: '/signin',
	},
	callbacks: {
		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.sub as string;
			}
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.sub = user.id;
			}
			return token;
		},
	},
	secret: process.env.AUTH_SECRET,
	session: {
		strategy: 'jwt',
	},
});

export { handler as GET, handler as POST };
