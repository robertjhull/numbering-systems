import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 
import Head from 'next/head';
import styles from '../styles/Home.module.css';

function Home() {
  const router = useRouter();

  let [questionAmount, setQuestionAmount] = useState(10);
  let [conversionFrom, setConversionFrom] = useState([]);
  let [conversionTo, setConversionTo] = useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Base Conversion Practice</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <form>
            <div className={styles.formgroup}>
              <label htmlFor="question-amount">Number of Questions:</label><br />
              <input type="number" id={styles.questioninput} name="question-amount" defaultValue="10" onChange={e => setQuestionAmount(e.target.value)}></input>
            </div>
              <div className={styles.formgroup}>
                <label>Convert Between:</label><br />
                <div>
                  <input defaultChecked type="checkbox" name="binary-check"></input>
                  <label htmlFor="binary-check">Binary</label>
                </div>
                <div>
                  <input defaultChecked type="checkbox" name="decimal-check"></input>
                  <label htmlFor="binary-check">Decimal</label>
                </div>
                <div>
                  <input defaultChecked type="checkbox" name="octal-check"></input>
                  <label htmlFor="binary-check">Octal</label>
                </div>
                <div>
                  <input defaultChecked type="checkbox" name="hex-check"></input>
                  <label htmlFor="binary-check">Hex</label>
                </div>
              </div>
            <div className={styles.formgroup}>
              <button className={styles.submit} onClick={ () => router.push("/quiz") }>Generate</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Home;