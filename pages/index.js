import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const nums = Array(10).fill().map(() => ~~(Math.random() * 100));
  return (
    <div className={styles.container}>
      <Head>
        <title>Base Conversion Practice</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Practice converting numbers
        </h1>
      <table>
        <thead>
          <tr>
            <th>Decimal</th>
            <th>Binary</th>
            <th>Hexadecimal</th>
            <th>Octal</th>
          </tr>
        </thead>
      {
        nums.map((num, i) => 
        <tr key={i}>
          <td>{num}</td>
          <td>{num.toString(2)}</td>
          <td>{num.toString(16).toUpperCase()}</td>
          <td>{num.toString(8)}</td>
        </tr>)
      }
      </table>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
