import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {

  let [questionAmount, setQuestionAmount] = useState(10);
  let [conversionFrom, setConversionFrom] = useState([]);
  let [conversionTo, setConversionTo] = useState([]);

  const onSubmitFormHandler = function(e) {
    console.log(questionAmount, conversionFrom, conversionTo)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Base Conversion Practice</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <form onSubmit={ onSubmitFormHandler } action="/quiz">
            <div className={styles.formgroup}>
              <label htmlFor="question-amount">Number of Questions</label><br />
              <input type="number" id={styles.questioninput} name="question-amount" defaultValue="10" onChange={e => setQuestionAmount(e.target.value)}></input>
            </div>
            <div className={styles.cardcol}>
              <div className={styles.formgroup}>
                <p className={styles.label}>Convert From:</p>
                <div>
                  <input checked type="checkbox" name="binary-check"></input>
                  <label htmlFor="binary-check">Binary</label>
                </div>
                <div>
                  <input checked type="checkbox" name="decimal-check"></input>
                  <label htmlFor="binary-check">Decimal</label>
                </div>
                <div>
                  <input checked type="checkbox" name="octal-check"></input>
                  <label htmlFor="binary-check">Octal</label>
                </div>
                <div>
                  <input checked type="checkbox" name="hex-check"></input>
                  <label htmlFor="binary-check">Hex</label>
                </div>
              </div>
              <div className={styles.formgroup}>
                <p className={styles.label}>Convert To:</p>
                <div>
                  <input checked type="checkbox" name="binary-check"></input>
                  <label htmlFor="binary-check">Binary</label>
                </div>
                <div>
                  <input checked type="checkbox" name="decimal-check"></input>
                  <label htmlFor="binary-check">Decimal</label>
                </div>
                <div>
                  <input checked type="checkbox" name="octal-check"></input>
                  <label htmlFor="binary-check">Octal</label>
                </div>
                <div>
                  <input checked type="checkbox" name="hex-check"></input>
                  <label htmlFor="binary-check">Hex</label>
                </div>
              </div>
            </div>
            <div className={styles.formgroup}>
              <input className={styles.submit} type="submit" value="Generate Quiz"></input>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Home;