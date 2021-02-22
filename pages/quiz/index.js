import { withRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Quiz from '../../components/Quiz';
import styles from '../../styles/Quiz.module.css';

const QuizPage = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Conversion Practice</title>
      </Head>
      <Header />
      <Main>
        <Quiz content={props.router.query}/>
      </Main>
    </div>
  )
}

export default withRouter(QuizPage);