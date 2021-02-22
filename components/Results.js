import { useEffect, useState } from "react";
import { render } from "react-dom";
import Button from '../components/Button';
import styles from '../styles/Results.module.css';

export default function Results(props) {
    const conversion_keys = {
        2: "BIN", 
        8: "OCT", 
        10: "DEC", 
        16: "HEX"
    }
    if (props.questions) {
        const questions = props.questions.map(e => Number(e));
        const convertFrom = props.convertFrom.map(e => Number(e));
        const convertTo = props.convertTo.map(e => Number(e));
        setLoaded(true);
    }
    let [score, setScore] = useState(0);
    let [loaded, setLoaded] = useState(false);

    const grade = function() {
        let result = 0;
        for (let row of document.getElementsByClassName('answer-key-row')) {
            let userAnswer =  row.childNodes[3];
            let correctAnswer = row.childNodes[2].childNodes[2].innerHTML;
            if (userAnswer.innerHTML == correctAnswer) {
                row.childNodes[3].style.color = "#00d000";
                result++;
            } else {
                row.childNodes[3].style.color = "#d00000";
            }
            if (userAnswer.innerHTML == "") {
                userAnswer.innerHTML = "N/A";
            }
        }
        setScore(result)
    }

    useEffect(() => {
        grade();
    }, [])

    return (
        <>
            {loaded && render(<p className={styles.heading}>Final Score: {(score / questions.length) * 100}% <span className={styles.sub}>({score}/{questions.length})</span></p>)}
            <table>
                <tbody>
                    {loaded && props.answers.map((answer, key) => 
                        <tr key={key} className={'answer-key-row'}>
                            <td className={styles.questionCol}>
                                <span className={styles.sub}>
                                <strong>
                                    {conversion_keys[convertFrom[key]]}
                                </strong>
                                </span><br />
                                {questions[key].toString(convertFrom[key])}
                            </td>
                            <td className={styles.convertArrowCol}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4b91a880" class="bi bi-arrow-right-circle" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg>
                            </td>
                            <td className={styles.correctAnswerCol}>
                                <span className={styles.sub}>
                                <strong>
                                    {conversion_keys[convertTo[key]]}
                                </strong>
                                </span><br />
                                <span id="correct-answer">
                                    {questions[key].toString(convertTo[key])}
                                </span>
                            </td>
                            <td className={styles.userAnswerCol}>{answer}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                <Button visible={true} id={"button-back"} link={"/"} text={"Go Back"} />
            </div>
        </>
    )
}