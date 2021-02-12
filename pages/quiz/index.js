import { useState } from 'react';
import { withRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Quiz.module.css';

let conversions = ["binary", "octal", "decimal", "hex"];
let n = 0;

const Quiz = props => {
  let numbers = props.router.query.questions.map(e => Number(e));
  const bar_fill = 100 / numbers.length;
  const bases = props.router.query.conversions;
  
  let [random1, setRandom1] = useState(1)
  let [random2, setRandom2] = useState(0)
  let [score, setScore] = useState(0);
  let [question, setQuestion] = useState(0);
  let [answer, setAnswer] = useState();

  const handleAnswerButtonClick = function() {
    let correct = false;
    if (answer == numbers[question].toString(bases[random2])) {
      setScore(score + 1);
      correct = true;
    } else {
      document.getElementById("score").innerHTML = "<span style='color:red;'>Incorrect.</span>"
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

  const updateConversion = function() {
    let r1 = ~~(Math.random() * conversions.length);
    let r2 = ~~(Math.random() * bases.length);
    while (r1 === r2) {
      r2 = ~~(Math.random() * bases.length)
    }
    setRandom1(r1);
    setRandom2(r2)
  }

  const advanceQuiz = function() {
    if (question + 1 < numbers.length) {
      updateConversion();
      setQuestion(question + 1);
    } else {
      console.log(score);
      document.getElementById("score").innerHTML = `${score}/${numbers.length}`;
      document.getElementById("buttons").innerHTML = `<a class=Quiz_button__3umvm style="margin:5px;" href="/">Go Back</a>`;
      document.getElementById("question").innerHTML = `<p>You finished with score of ${(score / numbers.length) * 100}%</p>`;
      document.getElementById("answer").innerHTML = '';
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Conversion Practice</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#4b91a8" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg></a>
        </div>
        <div className={styles.card}>
          <div className={styles.progressbar}>
            <span id="fill" className={styles.progressbarfill}></span>
          </div>
          <p id="score" className={styles.score}></p>
          <div className={styles.question}>
            <p id="question" className={styles.questiontext}>Convert <span className={styles.number}>{numbers[question].toString(bases[random1])}</span> from <strong>{conversions[random1]}</strong> to <strong>{conversions[random2]}</strong>.</p>
          </div>

          <div id="answer" className={styles.answer}>
            <label className={styles.wrong}>1011101</label>
            <input id="input-answer" className={styles.input}type="text" onChange={ e => setAnswer(e.target.value) }></input>
          </div>
          <div id="buttons" className={styles.buttons}>
            <button onClick={ () => handleAnswerButtonClick() } className={styles.button}>Answer</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default withRouter(Quiz);