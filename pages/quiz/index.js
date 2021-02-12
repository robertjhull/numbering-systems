import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import BackButton from '../../components/BackButton';
import styles from '../../styles/Quiz.module.css';

const KEYS = {
  2: "binary", 
  8: "octal", 
  10: "decimal", 
  16: "hexadecimal"
}
let width = 0;

const Quiz = props => {
  const N = props.router.query.questions.map(e => Number(e));
  const progress = 100 / N.length;
  const B = [2, 8, 10, 16];
  let bases = [];

  for (let i = 0; i < B.length; i++) {
    if (props.router.query.conversions[i] == "true") bases.push(B[i]);
  }
  
  useEffect(() => {
    updateConversion();
  }, []);

  let [from, setFrom] = useState();
  let [to, setTo] = useState();
  let [score, setScore] = useState(0);
  let [question, setQuestion] = useState(0);
  let [answer, setAnswer] = useState();

  const handleAnswerButtonClick = function() {
    if (answer == N[question].toString(bases[to])) {
      setInnerHTML("wrong-answer", " ");
      updateProgressBar(true);
      setScore(score + 1);
    } else {
      setInnerHTML("wrong-answer", N[question].toString(bases[to]))
      updateProgressBar(false)
    }
    document.getElementById("input-answer").value = "";
    advanceQuiz();
  }

  const updateProgressBar = function(bool) {
    width += progress;
    let bar = document.getElementById("fill");
    if (bool) {
      bar.style.backgroundColor = `green`;
    } else {
      bar.style.backgroundColor = `red`;
    }
    bar.style.width = `${width}%`;
    setTimeout(function() {
      bar.style.backgroundColor = `#4b91a850`;
    }, 500)
  }

  const updateConversion = function() {
    let r1 = ~~(Math.random() * bases.length);
    let r2;
    do {
      r2 = ~~(Math.random() * bases.length);
    } while (r1 === r2)
    setFrom(r1);
    setTo(r2)
  }

  const advanceQuiz = function() {
    if (question + 1 < N.length) {
      updateConversion();
      setQuestion(question + 1);
    } else {
      setInnerHTML("score", `${score}/${N.length}`);
      setInnerHTML("question", `<p>You finished with score of ${(score / N.length) * 100}%</p>`);
      setInnerHTML("answer", '');
      setInnerHTML("buttons", `<a class=Quiz_button__3umvm style="margin:5px;" href="/">Go Back</a>`)
    }
  }

  function setInnerHTML(id, content) {
    document.getElementById(id).innerHTML = content;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Conversion Practice</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <BackButton />
        </div>
        <div className={styles.card}>
          {/* Progress Bar */}
          <div className={styles.progressbar}>
            <span id="fill" className={styles.progressbarfill}></span>
          </div>
          {/* Score */}
          <p id="score" className={styles.score}></p>
          {/* Question */}
          <div className={styles.question}>
            <p id="question" className={styles.questiontext}>Convert <span className={styles.number}>{N[question].toString(bases[from])}</span> from <strong>{KEYS[bases[from]]}</strong> to <strong>{KEYS[bases[to]]}</strong>.</p>
          </div>
          {/* Answer */}
          <div id="answer" className={styles.answer}>
            <label id="wrong-answer" className={styles.wrong}></label>
            <input id="input-answer" className={styles.input}type="text" onChange={ e => setAnswer(e.target.value) }></input>
          </div>
          {/* Submit Answer -> Next Question */}
          <div id="buttons" className={styles.buttons}>
            <button onClick={ () => handleAnswerButtonClick() } className={styles.button}>Answer</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default withRouter(Quiz);