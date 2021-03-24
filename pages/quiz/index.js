import { withRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import Quiz from '../../components/Quiz';
import Footer from '../../components/Footer';

const QuizPage = (props) => {
  return (
    <>
      <Head>
        <title>Numbering System Practice</title>
      </Head>
      <Quiz content={props.router.query}/>
    </>
  )
}

export default withRouter(QuizPage);