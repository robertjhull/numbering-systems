import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="https://github.com/robertjhull/baseconverter">Github</a></li>
                    <li><a href="/">Quiz</a></li>
                </ul>
            </div>
        </div>
    )
}