import { withRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import Quiz from '../../components/Quiz';

const QuizPage = (props) => {
  return (
    <>
      <Head>
        <title>Conversion Practice</title>
      </Head>
      <Quiz content={props.router.query}/>
    </>
  )
}

export default withRouter(QuizPage);