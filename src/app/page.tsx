import Link from 'next/link';

export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white">
			<main className="flex flex-col items-center py-16 px-8 sm:px-20 max-w-4xl mx-auto">
				HOME PAGE
				<Link href={'/signin'}>Signin</Link>
				<Link href={'/signup'}>Signup</Link>
			</main>
		</div>
	);
}
