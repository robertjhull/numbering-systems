import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 
import styles from '../styles/Home.module.css';

export default function Generate() {
    const router = useRouter();

    let [start, setStart] = useState(false);

    const validateChoices = function(choices) {
        return choices.filter(b => b == true).length < 2 ? false: true;
    }

    useEffect(() => {
        if (start) {
            const questions = Array(Number(questionAmount)).fill().map(() => ~~(Math.random() * slider));
            const conversions = [binary, octal, decimal, hex];
            if (validateChoices(conversions)) {
                router.push({
                    pathname: '/quiz',
                    query: {
                    conversions: conversions,
                    questions: questions
                    },
                }, '/quiz', {shallow: true})
            } else {
                setStart(false);
                alert("You must select at least two bases!");
            }
        }
    }, [start])

    let [slider, setSlider] = useState(100);
    let [questionAmount, setQuestionAmount] = useState(10);
    let [binary, setBinary] = useState(true);
    let [octal, setOctal] = useState(true);
    let [decimal, setDecimal] = useState(true);
    let [hex, setHex] = useState(true);

    return (
        <div>
            {/* Set number of questions */}
            <div className={styles.formgroup}>
              <label htmlFor="question-amount">Number of Questions:</label><br />
              <input type="number" id={styles.questioninput} name="question-amount" defaultValue="10" min="5" max="100" onChange={e => setQuestionAmount(e.target.value)}></input>
            </div>
            {/* Set range */}
            <div className={styles.formgroup}>
              <label htmlFor="question-range">Decimal Range:</label><br />
              <input type="number" id={styles.questioninput} name="question-range" defaultValue={slider} min="15" max="1000" readOnly></input>
              <input type="range" min="15" max="1000" defaultValue="100" name="question-range" id="range" className={styles.range} onChange={e => setSlider(e.target.value)}></input>
            </div>
            {/* Select which conversions to test */}
            <div className={styles.formgroup}>
              <label>Convert Between:</label><br />
              <div>
                <input className={styles.checkbox} defaultChecked type="checkbox" name="binary-check" onClick={() => setBinary(!binary) }></input>
                <label htmlFor="binary-check">Binary</label>
              </div>
              <div>
                <input className={styles.checkbox} defaultChecked type="checkbox" name="decimal-check" onClick={() => setDecimal(!decimal) }></input>
                <label htmlFor="decimal-check">Decimal</label>
              </div>
              <div>
                <input className={styles.checkbox} defaultChecked type="checkbox" name="octal-check" onClick={() => setOctal(!octal) }></input>
                <label htmlFor="octal-check">Octal</label>
              </div>
              <div>
                <input className={styles.checkbox} defaultChecked type="checkbox" name="hex-check" onClick={() => setHex(!hex) }></input>
                <label htmlFor="hex-check">Hexadecimal</label>
              </div>
            </div>
            {/* Set number of questions */}
            <div className={styles.formgroup}>
              <button className={styles.submit} onClick={ () => setStart(true) }>Generate</button>
            </div>
        </div>
    )
}