import Head from 'next/head';
import Generate from '../components/Generate';

export default function Home() {
  return (
    <>
      <Head>
        <title>Base Conversion Practice</title>
      </Head>
      <Generate />
    </>
  )
}