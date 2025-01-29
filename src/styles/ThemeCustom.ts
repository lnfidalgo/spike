import {
	createSystem,
	defaultConfig,
	defineConfig,
	mergeConfigs,
} from '@chakra-ui/react';

const config = defineConfig({
	globalCss: {
		'html, body': {
			margin: 0,
			padding: 0,
		},
	},
	theme: {
		breakpoints: {
			sm: '320px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		tokens: {
			colors: {
				black: {
					DEFAULT: { value: '#333E46' },
					900: { value: '#07090B' },
					800: { value: '#11171D' },
					700: { value: '#1A2126' },
					600: { value: '#333E46' },
					500: { value: '#3A4850' },
					400: { value: '#727F86' },
					300: { value: '#9EA8AD' },
					200: { value: '#B7BFC2' },
					100: { value: '#D8DBDC' },
				},
				red: {
					DEFAULT: { value: '#FF1F29' },
					900: { value: '#AF0008' },
					800: { value: '#C3001C' },
					700: { value: '#D3002C' },
					600: { value: '#FF1F29' },
					500: { value: '#FF545C' },
					400: { value: '#FF9297' },
					300: { value: '#FFBFC2' },
					200: { value: '#FFDCDE' },
					100: { value: '#FFEFF0' },
				},
				surface: {
					DEFAULT: { value: '#9DB2CA' },
					900: { value: '#698AAE' },
					800: { value: '#7996B7' },
					700: { value: '#8AA3C0' },
					600: { value: '#9DB2CA' },
					500: { value: '#B1C2D5' },
					400: { value: '#C5D2E0' },
					300: { value: '#DBE3EC' },
					200: { value: '#EBF0F5' },
					100: { value: '#F3F6F9' },
				},
				green: {
					DEFAULT: { value: '#007358' },
					900: { value: '#00392B' },
					800: { value: '#004D3A' },
					700: { value: '#006049' },
					600: { value: '#007358' },
					500: { value: '#008566' },
					400: { value: '#33AB8C' },
					300: { value: '#66CAAE' },
					200: { value: '#99E2CD' },
					100: { value: '#E0F0ED' },
				},
				neutral: {
					DEFAULT: { value: '#868E96' },
					900: { value: '#212529' },
					800: { value: '#343A40' },
					700: { value: '#495057' },
					600: { value: '#868E96' },
					500: { value: '#ADB5BD' },
					400: { value: '#CED4DA' },
					300: { value: '#DEE2E6' },
					200: { value: '#F1F3F5' },
					100: { value: '#FFFFFF' },
				},
			},
		},
	},
	strictTokens: true,
});

const styleMerge = mergeConfigs(defaultConfig, config);

export const system = createSystem(styleMerge);
