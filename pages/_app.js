import '../styles/globals.css';
import Header from '../components/Header';
import Main from '../components/Main';

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Main>
      <Component {...pageProps} />
    </Main>
  </>
}

export default MyApp
