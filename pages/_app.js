import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/meanmenu.min.css";
import "../styles/flaticon.css";
import 'react-18-image-lightbox/style.css';
import "react-sweet-progress/lib/style.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../styles/style.css";
// Global Responsive Styles
import "../styles/responsive.css";

import Layout from "../components/_App/Layout";
import { Provider } from 'react-redux';
import store from '../redux/store'; // Import the Redux store

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
};

export default MyApp;
