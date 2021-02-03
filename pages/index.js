import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

let nums = Array(1).fill().map(() => ~~(Math.random() * 100));

const Home = () => {

  const correct = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>`

  const wrong = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`

  let [binAnswer, setBinAnswer] = useState();
  let [hexAnswer, setHexAnswer] = useState();
  let [octAnswer, setOctAnswer] = useState();

  const checkAnswers = (e) => {
    e.preventDefault();
    if (binAnswer == nums[0].toString(2)) {
      document.getElementById("bin-ans").innerHTML = correct;
    } else {
      document.getElementById("bin-ans").innerHTML = wrong;
    }

    if (hexAnswer == nums[0].toString(16)) {
      document.getElementById("hex-ans").innerHTML = correct;
    } else {
      document.getElementById("hex-ans").innerHTML = wrong;
    }

    if (octAnswer == nums[0].toString(8)) {
      document.getElementById("oct-ans").innerHTML = correct;
    } else {
      document.getElementById("oct-ans").innerHTML = wrong;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Base Conversion Practice</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Practice converting numbers
        </h1>
      <form onSubmit={ checkAnswers }>
        <table>
          <thead>
            <tr>
              <th>Decimal</th>
              <th>Binary</th>
              <th></th>
              <th>Hexadecimal</th>
              <th></th>
              <th>Octal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
        {
          nums.map((num, i) => 
          <tr key={i}>
            <td>{num}</td>
            <td><input type="text" name={"bin" + i} onChange={ e => setBinAnswer(e.target.value) }></input></td>
            <td className={styles.answer} id="bin-ans"></td>
            <td><input type="text" name={"hex" + i} onChange={ e => setHexAnswer(e.target.value) }></input></td>
            <td className={styles.answer} id="hex-ans"></td>
            <td><input type="text" name={"oct" + i} onChange={ e => setOctAnswer(e.target.value) }></input></td>
            <td className={styles.answer} id="oct-ans"></td>
          </tr>)
        }
        </tbody>
        </table>
        <input type="submit" value="Check"></input>
      </form>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home;