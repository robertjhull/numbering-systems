import { withRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import Header from '../../../components/Header';
import Main from '../../../components/Main';
import Results from '../../../components/Results';
import styles from '../../../styles/Results.module.css';

function ResultsPage(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Base Conversion Practice</title>
            </Head>
            <Header />
            <Main>
                <Results 
                    questions={props.router.query.questions}
                    convertFrom={props.router.query.convertedFrom}
                    convertTo={props.router.query.convertedTo}
                    answers={props.router.query.answers}
                />
            </Main>
        </div>
    )
}

export default withRouter(ResultsPage);