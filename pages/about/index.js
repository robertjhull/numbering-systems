import Head from 'next/head';
import Main from '../../components/Main';
import Header from '../../components/Header';
import styles from '../../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Base Conversion Practice</title>
      </Head>
      <Header />
      <Main>
        <p>Explanation of this app goes here</p>
      </Main>
    </div>
  )
}