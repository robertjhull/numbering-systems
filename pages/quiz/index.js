import { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Quiz.module.css';

let numbers = Array(20).fill().map(() => ~~(Math.random() * 1000)); // quantity handed in
let conversions = ["binary", "decimal", "octal", "hex"];
let base = [2, 10, 8, 16]; // handed in
let bar_fill = 100 / numbers.length;
let n = 0;

const Quiz = props => {
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
      r2 = ~~(Math.random() * base.length)
    }
    setRandom1(r1);
    setRandom2(r2)
  }

  const handleAnswerButtonClick = function() {
    let correct = false;
    if (answer == numbers[question].toString(base[random2])) {
      correct = true;
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    document.getElementById("input-answer").value = "";
    updateProgressBar(correct)
    advanceQuiz();
  }
  const updateProgressBar = function(a) {
    n += bar_fill;
    let bar = document.getElementById("fill");
    if (a) bar.style.backgroundColor = `green`;
    else bar.style.backgroundColor = `red`;
    bar.style.width = `${n}%`;
    setTimeout(function() {
      bar.style.backgroundColor = `#4b91a850`;
    }, 500)
  }

  const advanceQuiz = function() {
    if (question + 1 < numbers.length) {
      updateConversion();
      setQuestion(question + 1);
    } else {
      document.getElementById("buttons").innerHTML = `<a class=Quiz_button__3umvm style="margin:5px;" href="/quiz">Try Again</a>`;
      document.getElementById("question").innerHTML = `<p>You finished with score of 80% (8/10)</p>`;
      document.getElementById("answer").innerHTML = '';
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Base Conversion Practice</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#4b91a8" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg></a>
        </div>
        <div className={styles.card}>
          <div className={styles.progressbar}>
            <span id="fill" className={styles.progressbarfill}></span>
          </div>
          <p className={styles.score}>Score: {score}</p>
          <div className={styles.question}>
            <p id="question" className={styles.questiontext}>Convert <span className={styles.number}>{numbers[question].toString(base[random1])}</span> from <strong>{conversions[random1]}</strong> to <strong>{conversions[random2]}</strong>.</p>
          </div>

          <div id="answer" className={styles.answer}>
            <input id="input-answer" className={styles.input}type="text" onChange={ e => setAnswer(e.target.value) }></input>
          </div>
          <div id="buttons" className={styles.buttons}>
            <button onClick={ handleAnswerButtonClick } className={styles.button}>Answer</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Quiz;