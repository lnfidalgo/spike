import Signup from '@/components/layout/Signup';

export default function SignUpPage() {
	return (
		<div className="min-h-screen bg-black text-white">
			<main className="flex flex-col items-center py-16 px-8 sm:px-20 max-w-4xl mx-auto">
				<Signup />
			</main>
		</div>
	);
}
