import { useEffect, useState } from 'react';
import { useRouter, withRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import BackButton from '../../components/BackButton';
import Theme from '../../components/Theme';
import styles from '../../styles/Quiz.module.css';

const KEYS = {
  2: "binary", 
  8: "octal", 
  10: "decimal", 
  16: "hexadecimal"
}
let width = 0;

const Quiz = props => {
  const router = useRouter();

  if (!props.router.query.questions) {
    props.router.query.questions = Array(10).fill().map(() => ~~(Math.random() * 100));
    props.router.query.conversions = Array(4).fill("true");
  }

  const N = props.router.query.questions.map(e => Number(e));
  const progress = 100 / N.length;
  const B = [2, 8, 10, 16];
  let bases = [];

  for (let i = 0; i < B.length; i++) {
    if (props.router.query.conversions[i] == "true") bases.push(B[i]);
  }

  let [from, setFrom] = useState();
  let [to, setTo] = useState();
  let [question, setQuestion] = useState(0);
  let [answer, setAnswer] = useState();

  let [answers, setAnswers] = useState([]);
  let [convertedFrom, setConvertedFrom] = useState([]);
  let [convertedTo, setConvertedTo] = useState([]);

  useEffect(() => {
    updateConversion();
  }, [question]);

  const handleAnswerButtonClick = function() {
    let r = [...answers];
    let cF = [...convertedFrom];
    let cT = [...convertedTo];
    r.push(answer);
    cF.push(bases[from]);
    cT.push(bases[to]);
    setAnswers(r);
    setConvertedTo(cT);
    setConvertedFrom(cF);

    if (answer == N[question].toString(bases[to])) {
      updateProgressBar(true);
    } else {
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
      bar.style.backgroundColor = `#4b91a870`;
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
      setQuestion(question + 1);
    } else {
      setInnerHTML("question", `<p>Finished! Click "Results" to see your grade or "Go Back" to generate another quiz.</p>`);
      document.getElementById("answer").style.display = "none";
      document.getElementsByClassName("button-answer")[0].style.display = "none";
      for (let button of document.getElementsByClassName("button-finish")) {
        button.style.display = "inline-block";
      }
    }
  }

  const viewResults = function() {
    router.push({
      pathname: '/quiz/results',
      query: {
        questions: N,
        convertedTo: convertedTo,
        convertedFrom: convertedFrom,
        answers: answers
      },
    }, '/quiz/results', {shallow: true})
  }

  function setInnerHTML(id, content) {
    document.getElementById(id).innerHTML = content;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Conversion Practice</title>
      </Head>
      <BackButton />
      <Theme />
      <main className={styles.main}>
        <div className={`${styles.card} ${'theme'}`}>
          {/* Progress Bar */}
          <div className={styles.progressbar}>
            <span id="fill" className={styles.progressbarfill}></span>
          </div>
          {/* Question */}
          <div className={styles.question}>
            <p id="question" className={styles.questiontext}>Convert <span className={styles.number}>{N[question].toString(bases[from])}</span> from <strong>{KEYS[bases[from]]}</strong> to <strong>{KEYS[bases[to]]}</strong>.</p>
          </div>
          {/* Answer */}
          <div id="answer" className={styles.answer}>
            <input id="input-answer" className={styles.input}type="text" onChange={ e => setAnswer(e.target.value) } autoComplete="off"></input>
          </div>
          {/* Submit Answer -> Next Question */}
          <div id="buttons" className={styles.buttons}>
            <button onClick={ () => router.push('/') } className={`${styles.button} ${"button-finish"}`} style={{display:'none'}}>Go Back</button>
            <button onClick={ () => handleAnswerButtonClick() } className={`${styles.button} ${"button-answer"}`}>Answer</button>
            <button onClick={ () => viewResults() } className={`${styles.button} ${"button-finish"}`} style={{display:'none'}}>Results</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default withRouter(Quiz);