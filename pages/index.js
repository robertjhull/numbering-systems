import Head from 'next/head';
import Main from '../components/Main';
import Header from '../components/Header';
import Generate from '../components/Generate';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Base Conversion Practice</title>
      </Head>
      <Header />
      <Main>
        <Generate />
      </Main>
    </div>
  )
}