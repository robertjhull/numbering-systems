import '../styles/globals.css';
import Main from '../components/Main';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return <>
    <Main>
      <Component {...pageProps} />
    </Main>
    <Footer />
  </>
}

export default MyApp
