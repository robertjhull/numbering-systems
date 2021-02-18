import { withRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import AnswerKey from '../../../components/AnswerKey';
import BackButton from '../../../components/BackButton';
import Theme from '../../../components/Theme';
import styles from '../../../styles/Results.module.css';

function Results(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Base Conversion Practice</title>
            </Head>
            <BackButton />
            <Theme />
            <main className={styles.main}>
                <div className={`${styles.card} ${'theme'}`}>
                    <AnswerKey 
                        questions={props.router.query.questions}
                        convertFrom={props.router.query.convertedFrom}
                        convertTo={props.router.query.convertedTo}
                        answers={props.router.query.answers}
                    />
                </div>
            </main>
        </div>
    )
}

export default withRouter(Results);