import Footer from '../layout/Footer';
import '../styles/globals.css';
import GlobalStyle from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
const theme = {
	primary: '#1890ff',
	secondary: '',
	light: 'white',
	bg: '#1890ff',
	dark: 'rgba(0, 0, 0, 0.8)',
	lightDark: 'rgba(0,0,0,0.6)',
	grey: '#ccc',
};

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
