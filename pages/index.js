import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  let [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const questions = Array(Number(questionAmount)).fill().map(() => ~~(Math.random() * 1000));
      router.push({
        pathname: '/quiz',
        query: { 
          conversions: [2,8,10,16],
          questions: questions
        },
      }, '/quiz', {shallow: true})
    }
  }, [start])

  let [slider, setSlider] = useState(100);
  let [questionAmount, setQuestionAmount] = useState(10);
  let [conversions, setConversions] = useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Base Conversion Practice</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <div>
            <div className={styles.formgroup}>
              <label htmlFor="question-amount">Number of Questions:</label><br />
              <input type="number" id={styles.questioninput} name="question-amount" defaultValue="10" min="5" max="100" onChange={e => setQuestionAmount(e.target.value)}></input>
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="question-range">Range:</label><br />
              <input type="number" id={styles.questioninput} name="question-range" defaultValue={slider} min="15" max="1000" readOnly></input>
              <input type="range" min="15" max="1000" defaultValue="100" name="question-range" id="range" className={styles.range} onChange={e => setSlider(e.target.value)}></input>
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
              <button className={styles.submit} onClick={ () => setStart(true) }>Generate</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}