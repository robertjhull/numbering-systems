import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 
import Button from '../components/Button';
import styles from '../styles/Main.module.css';

export default function SetQuizParams() {
    const router = useRouter();

    let [redirect, setRedirect] = useState(false)

    useEffect(() => {
      if (redirect) {
        router.push({
            pathname: '/quiz',
            query: {
              amount: quiz.amount,
              range: quiz.range,
              between: [quiz.binary, quiz.octal, quiz.decimal, quiz.hex, quiz.roman]
            },
        }, '/quiz', {shallow: true})
      }
    }, [redirect])

    let [quiz, setQuiz] = useState({
      range: 100,
      amount: 10,
      binary: true,
      octal: true,
      decimal: true,
      hex: true,
      roman: false
    })

    const handleQuizChange = (e) => {
      let value, name = e.target.name;
      if (name === "amount" || name === "range") {
        value = e.target.value;
      } else {
        value = e.target.checked;
      }
      setQuiz(quiz => ({
        ...quiz,
        [name]: value
      }))
      console.log(quiz)
    }

    const validateQuiz = function(quiz) {
      let checkedAmount = 0;
      for (let key in quiz) {
        if (quiz[key] === true) checkedAmount++;
      }
      return checkedAmount >= 2 ? true : false;
    }

    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (validateQuiz(quiz)) {
        setRedirect(true);
      } else {
        alert("You must select at least two numbering systems!");
      }
    }

    return (
        <div>
          <form>
            {/* Set number of questions */}
            <div className={styles.formgroup}>
              <label htmlFor="amount">Number of Questions:</label><br />
              <input 
                type="number" 
                id={styles.questioninput} 
                name="amount" 
                defaultValue="10" 
                min="5" 
                max="100" 
                onChange={handleQuizChange}
              ></input>
            </div>

            {/* Set range */}
            <div className={styles.formgroup}>
              <label htmlFor="range-slider">Decimal Range:</label><br />
              <input 
                type="number" 
                id={styles.questioninput} 
                name="range-slider" 
                defaultValue={quiz.range} 
                min="15" 
                max="1000" 
                readOnly
              ></input>
              <input 
                type="range" 
                min="15" 
                max="1000" 
                defaultValue="100" 
                name="range" 
                id="range" 
                className={styles.range} 
                onChange={handleQuizChange}
              ></input>
            </div>

            {/* Select which conversions to test */}
            <div className={styles.formgroup}>
              <label>Convert Between:</label><br />
              <div>
                <input 
                  className={styles.checkbox} 
                  defaultChecked 
                  type="checkbox" 
                  name="binary" 
                  onClick={handleQuizChange}
                ></input>
                <label htmlFor="binary">Binary</label>
              </div>
              <div>
                <input 
                  className={styles.checkbox} 
                  defaultChecked 
                  type="checkbox" 
                  name="decimal" 
                  onClick={handleQuizChange}
                ></input>
                <label htmlFor="decimal">Decimal</label>
              </div>
              <div>
                <input 
                  className={styles.checkbox} 
                  defaultChecked 
                  type="checkbox" 
                  name="octal" 
                  onClick={handleQuizChange}
                ></input>
                <label htmlFor="octal">Octal</label>
              </div>
              <div>
                <input 
                  className={styles.checkbox} 
                  defaultChecked 
                  type="checkbox" 
                  name="hex" 
                  onClick={handleQuizChange}
                ></input>
                <label htmlFor="hex">Hexadecimal</label>
              </div>
              <div>
                <input 
                  className={styles.checkbox} 
                  type="checkbox" 
                  name="roman" 
                  onClick={handleQuizChange}
                ></input>
                <label htmlFor="roman">Roman Numeral</label>
              </div>
            </div>

            {/* Set number of questions */}
            <div className={styles.formgroup}>
              <Button 
                visible={true}
                click={ handleFormSubmit }
                text={"Start Quiz"}
              />
            </div>
          </form>
        </div>
    )
}