import styles from '../styles/Main.module.css';
import React from 'react';

export default function Main( {children} ) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={`${styles.card} ${'theme'}`}>
                    {children}
                </div>
            </main>
        </div>
    )
}