import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';

// eslint-disable-next-line @typescript-eslint/no-require-imports
vi.mock('next/router', () => require('next-router-mock'));

vi.mock('next-intl', async () => {
	const actual = await vi.importActual('next-intl');

	return {
		...actual,
		createTranslator: vi.fn().mockImplementation(({ messages }) => {
			return (key) => {
				const keys = key.split('.');
				let translation = messages;
				for (const k of keys) {
					translation = translation[k];
					if (!translation) {
						return key;
					}
				}
				return translation;
			};
		}),
		useTranslations: vi.fn().mockReturnValue((key) => key),
		t: vi.fn(),
	};
});

vi.mock('@chakra-ui/react', async () => {
	const mod = await vi.importActual('@chakra-ui/react');
	return {
		...mod,
		useBreakpointValue: vi.fn().mockImplementation(() => 'md'),
	};
});

vi.mock('next/navigation', () => {
	const actual = vi.importActual('next/navigation');
	return {
		...actual,
		useRouter: vi.fn(() => ({
			push: vi.fn(),
		})),
		useSearchParams: vi.fn(() => ({
			get: vi.fn(),
		})),
		usePathname: vi.fn().mockImplementation(() => 'MockURL'),
		redirect: vi.fn(),
	};
});

vi.mock('next/headers', async () => {
	return {
		cookies: () => {
			return {
				get: () => {
					return {
						value: 'cookie',
					};
				},
				set: () => {
					return {
						value: 'cookie',
					};
				},
			};
		},
	};
});

global.matchMedia =
	global.matchMedia ||
	function () {
		return {
			matches: false,
			addListener: function () {},
			removeListener: function () {},
		};
	};
