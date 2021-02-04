import { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Quiz.module.css';

let numbers = Array(10).fill().map(() => ~~(Math.random() * 100));
let conversions = ["binary", "decimal", "octal", "hex"];
let base = [2, 10, 8, 16];

const Quiz = () => {

  const correct = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>`

  const wrong = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`
  
  let [random1, setRandom1] = useState(1)
  let [random2, setRandom2] = useState(0)
  let [score, setScore] = useState(0);
  let [question, setQuestion] = useState(0);
  let [answer, setAnswer] = useState();
  
  const updateConversion = function() {
    let r1 = ~~(Math.random() * conversions.length);
    let r2 = ~~(Math.random() * base.length);
    while (r1 === r2) {
      r2 = ~~(Math.random() * conversions.length)
    }
    setRandom1(r1);
    setRandom2(r2)
  }

  const handleAnswerButtonClick = function() {
    if (answer == numbers[question].toString(base[random2])) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    document.getElementById("input-answer").value = "";
    advanceQuiz();
  }

  const advanceQuiz = function() {
    if (question + 1 < numbers.length) {
      updateConversion();
      setQuestion(question + 1);
    } else {
      alert("you have reached the end of the quiz!")
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Base Conversion Practice</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.progressbar}></div>
        <h4 className={styles.score}>
          Score: {score}
        </h4>

        <div className={styles.card}>

          <div className={styles.question}>
            <p className={styles.questiontext}>Convert {numbers[question].toString(base[random1])} from <strong>{conversions[random1]}</strong> to <strong>{conversions[random2]}</strong>.</p>
          </div>

          <div className={styles.answer}>
            <input id="input-answer" type="text" onChange={ e => setAnswer(e.target.value) }></input>
          </div>

          <button onClick={ handleAnswerButtonClick } className={styles.button}>Answer</button>

        </div>
      </main>
    </div>
  )
}

export default Quiz;