import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Base Conversion Practice</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <form>
            <label for="question-amount">Number of Questions</label>
            <input type="number" name="question-amount"></input>
            <h4>Convert From:</h4>
            <input type="checkbox" name="binary-check"></input>
            <label for="binary-check">Binary</label>
            <input type="checkbox" name="decimal-check"></input>
            <label for="binary-check">Decimal</label>
            <input type="checkbox" name="octal-check"></input>
            <label for="binary-check">Octal</label>
            <input type="checkbox" name="hex-check"></input>
            <label for="binary-check">Hex</label>
            <h4>Convert To:</h4>
            <input type="checkbox" name="binary-check"></input>
            <label for="binary-check">Binary</label>
            <input type="checkbox" name="decimal-check"></input>
            <label for="binary-check">Decimal</label>
            <input type="checkbox" name="octal-check"></input>
            <label for="binary-check">Octal</label>
            <input type="checkbox" name="hex-check"></input>
            <label for="binary-check">Hex</label>
            <input type="Submit"></input>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Home;