import Image from 'next/image';

const libs = [
	'React ^19',
	'Next.js ^15',
	'TypeScript',
	'TailwindCSS',
	'ESLint',
	'Prettier',
	'Chakra UI - V3',
	'Husky',
	'Vitest',
	'Axios',
];

export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white">
			<header className="flex justify-center py-10 bg-[#1a1a1a] shadow-md">
				<Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/>
			</header>

			<main className="flex flex-col items-center py-16 px-8 sm:px-20 max-w-4xl mx-auto">
				<h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-gray-100">
					Bem-vindo ao Boilerplate FarenX
				</h1>

				<p className="text-lg sm:text-xl text-center max-w-2xl mb-12 leading-relaxed text-gray-300">
					Este é um projeto inicial que serve como base para o desenvolvimento
					de aplicações utilizando Next.js. Um boilerplate contém configurações,
					ferramentas e bibliotecas pré-configuradas para agilizar o processo de
					desenvolvimento, garantindo um padrão consistente e uma base sólida
					para sua aplicação.
				</p>

				<div className="w-full bg-[#1a1a1a] shadow-md rounded-lg p-6 border border-gray-700">
					<h2 className="text-2xl font-semibold mb-4 text-center text-gray-100">
						Bibliotecas incluídas neste projeto
					</h2>
					<ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
						{libs.map((lib) => (
							<li
								key={lib}
								className="hover:text-white hover:font-semibold transition"
							>
								{lib}
							</li>
						))}
					</ul>
				</div>
			</main>
		</div>
	);
}
