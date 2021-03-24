import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import styles from '../styles/Quiz.module.css';
import '../utils/toRomanNumeral';

export default function Quiz(props) {
    const router = useRouter();

    const evaluateBool = function(str) {
        return str === "true" ? true : false; // for switching systems array back to bool
    }

    const amount = Number(router.query.amount) || 15;
    const range = Number(router.query.range) || 105;
    const systems = router.query.between.map(e => evaluateBool(e)) || [true, true, true, true, false]
    const bases = [[2, "BINARY"], [8, "OCTAL"], [10, "DECIMAL"],
                    [16, "HEXADECIMAL"], [0, "ROMAN NUMERAL"]];

    const initialNumbers = Array(amount).fill().map(() => ~~(Math.random() * range))

    let [questions, setQuestions] = useState([]);

    useEffect(() => {
        for (let num of initialNumbers) {
            let from, to; // pick random conversion
            do {
                from = ~~(Math.random() * 5);
                to = ~~(Math.random() * 5);
            } while (from === to || !systems[to] || !systems[from])
            let question, answer; // generate questions and answers
            if (from === 4) question = num.toRomanNumeral();
            else question = num.toString(bases[from][0]);
            if (to === 4) answer = num.toRomanNumeral();
            else answer = num.toString(bases[to][0]);
    
            setQuestions(questions => [
                ...questions,
                { 
                    question: question, 
                    from: bases[from][1], 
                    to: bases[to][1], 
                    answer: answer 
                }
            ]);
        }
    }, [])

    const gradeAnswers = function() {
        let rows = document.getElementsByClassName('answer-key-row');
        let correct = 0;
        for (let i = 0; i < rows.length; i++) {
            let userAnswer = rows[i].lastChild.lastChild;
            let correctAnswer = questions[i].answer;
            if (userAnswer.value == correctAnswer) {
                userAnswer.style.color = "#028b0d";
                correct++;
            } else {
                userAnswer.value = correctAnswer;
                userAnswer.style.color = "#8b0202";
            }
        }
        const score = String((correct / amount) * 100) + "%";
        document.getElementById('grade').innerHTML = score;
    }

    return (
        <div>
            {/* Questions */}
            <h3 id={'grade'}></h3>
            <table id={styles.questionTable}>
                <tbody>
                    { questions.map((num, index) => (
                        <tr className={'answer-key-row'} key={index}>
                            <td>
                                {index + 1}.
                            </td>
                            <td className={styles.questionCol}>
                                <span className={styles.sub}>
                                    CONVERT{' '}
                                    { num.from }
                                </span>{' '}
                                { num.question }{' '}
                                <span className={styles.sub}>
                                    TO{' '}
                                    { num.to }
                                </span>
                            </td>
                            <td id="answer" className={styles.answerCol}>
                                <input 
                                    className={styles.input}
                                    type="text" 
                                    autoComplete="off"
                                ></input>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* submit answers to grade, or go back */}
            <div className={styles.buttons}>
                <Button 
                    visible={true} 
                    id={"button-back"} 
                    link={"/"} 
                    text={"Go Back"} 
                />
                <Button 
                    visible={true} 
                    click={ gradeAnswers }
                    id={"button-results"} 
                    text={"Check Answers"} 
                />
            </div>
        </div>
    )
}