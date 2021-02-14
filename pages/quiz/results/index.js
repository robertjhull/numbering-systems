import { withRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import AnswerKey from '../../../components/AnswerKey';
import BackButton from '../../../components/BackButton';
import Theme from '../../../components/Theme';
import styles from '../../../styles/Results.module.css';

function Results(props) {
    return (
        <>
            <Head>
                <title>Base Conversion Practice</title>
            </Head>
            <BackButton />
            <Theme />
            <div className={styles.card}>
                <AnswerKey />
            </div>
        </>
    )
}

export default withRouter(Results);