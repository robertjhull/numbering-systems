import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.about}>
          <h4 className={styles.aboutheader}>About This App</h4>
            <p>This is a <a href="https://nextjs.org/" className={styles.aboutlink}>Next.js</a> project bootstrapped with <span className={styles.code}><a href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app">create-next-app</a></span>. The app tests you on converting numbers between <strong>binary</strong>, <strong>decimal</strong>, <strong>octal</strong>, and <strong>hexadecimal</strong> numbering systems.</p>
          <p4 className={styles.aboutheader}>Tools Used</p4>
            <ul className={styles.list}>
                <li>Next.js</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>Node</li>
            </ul>
          <h4 className={styles.aboutheader}>Github Page</h4>
            <p>You can visit the Github page <a href="https://github.com/robertjhull/baseconverter" className={styles.aboutlink}>here</a> or click the link at the top.</p>
        </div>
    )
}