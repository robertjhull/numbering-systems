import Head from 'next/head';
import Main from '../../components/Main';
import Header from '../../components/Header';
import About from '../../components/About';
import styles from '../../styles/About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Base Conversion Practice</title>
      </Head>
      <Header />
      <Main>
        <About />
      </Main>
    </div>
  )
}