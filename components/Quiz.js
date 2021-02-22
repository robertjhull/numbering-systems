import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import styles from '../styles/Quiz.module.css';

const KEYS = {
    2: "binary", 
    8: "octal", 
    10: "decimal", 
    16: "hexadecimal"
  }
let width = 0;

export default function Quiz(props) {
    const router = useRouter();

    if (!props.content.questions) {
        props.content.questions = Array(10).fill().map(() => ~~(Math.random() * 100));
        props.content.conversions = Array(4).fill("true");
    }

    const N = props.content.questions.map(e => Number(e));
    const progress = 100 / N.length;
    
    // Constructing array of bases for random selection based off of user choices.
    let bases = [];
    const B = [2, 8, 10, 16];
    for (let i = 0; i < B.length; i++) {
        if (props.content.conversions[i] == "true") bases.push(B[i]);
    }

    // For holding the values of the current question.
    let [question, setQuestion] = useState(0);
    let [from, setFrom] = useState();
    let [to, setTo] = useState();
    let [answer, setAnswer] = useState();

    // For recording the question and answer to display on the results page.
    let [answers, setAnswers] = useState([]);
    let [convertedFrom, setConvertedFrom] = useState([]);
    let [convertedTo, setConvertedTo] = useState([]);

    // Handles "Answer" button click.
    const handleAnswerButtonClick = function() {
        setAnswers([...answers, answer]);
        setConvertedTo([...convertedTo, bases[to]]);
        setConvertedFrom([...convertedFrom, bases[from]]);

        if (answer == N[question].toString(bases[to])) {
            updateProgressBar(true);
        } else {
            updateProgressBar(false)
        }
        document.getElementById("input-answer").value = "";
        setAnswer(null);
        advanceQuiz();
    }

    // Update the progress bar.
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

    // Update random numbers.
    const updateConversion = function() {
        let r1 = ~~(Math.random() * bases.length);
        let r2 = ~~(Math.random() * bases.length);
        while (r1 === r2) {
            r2 = ~~(Math.random() * bases.length);
        }
        setFrom(r1);
        setTo(r2)
    }

    // Increment question number unless at the end of the quiz.
    const advanceQuiz = function() {
        if (question + 1 < N.length) {
            setQuestion(question + 1);
        } else {
            setInnerHTML("question", `<p>Finished! Click "Results" to see your grade or "Go Back" to generate another quiz.</p>`);
            toggleDisplay([["answer", false], ["button-answer", false], ["button-results", true]]);
        }
    }
    
    // Route to /quiz/results page on "Finish" button press.
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

    // Helper functions.
    function setInnerHTML(id, content) {
        document.getElementById(id).innerHTML = content;
    }
    function toggleDisplay(elements) {
        elements.forEach(function(e) {
            let visibility = "none";
            if (e[1]) visibility = "inline-block";
            document.getElementById(e[0]).style.display = visibility;
        })
    }

    // Update the random numbers each time the quiz advances.
    useEffect(() => {
        updateConversion();
    }, [question]);

    return (
        <div>
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
            <div className={styles.buttons}>
                <Button visible={true} id={"button-back"} link={"/"} text={"Go Back"} />
                <Button visible={true} id={"button-answer"} click={ handleAnswerButtonClick } text={"Answer"} />
                <Button visible={false} id={"button-results"} click={ viewResults } text={"Results"} />
            </div>
        </div>
    )
}