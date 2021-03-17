import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import styles from '../styles/Main.module.css';

export default function Generate() {
    const router = useRouter();

    const handleSubmit = () => {
      if (validateChoices(quiz)) {
        router.push({
            pathname: '/quiz',
            query: {
              quiz: { quiz }
            },
        }, '/quiz', {shallow: true})
      } else {
          setStart(false);
          alert("You must select at least two numbering systems!");
      }
    }


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
      if (name in ["amount", "range"]) {
        value = e.target.value;
      } else {
        value = e.target.checked;
      }
      setQuiz({
        ...quiz,
        [name]: value
      })
    }

    const validateQuiz = function(quiz) {
      let atLeastTwoChecked = 0;
      for (let checkBox in quiz) {
        if (checkBox === true) atLeastTwoChecked++;
      }
      return atLeastTwoChecked >= 2 ? true : false;
    }

    return (
        <div>
          <form onSubmit={ handleSubmit }>
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
              <label htmlFor="range">Decimal Range:</label><br />
              <input 
                type="number" 
                id={styles.questioninput} 
                name="range" 
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
                name="question-range" 
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
              <button 
                className={styles.submit} 
                type="submit"
              >Generate</button>
            </div>
          </form>
        </div>
    )
}