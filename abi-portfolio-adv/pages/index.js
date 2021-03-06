import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Abi Farabi ~ Advanced Portfolio </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`text-4xl font-semibold text-gray-700`}>
          My name is <a className='text-6xl font-bold text-blue-500 ml-1' href="https://github.com/abfar481/">Abi Farabi</a>
        </h1>

        <p className={styles.description}>
          I am a beginner-level frontend developer with experiences in databases and live servers.
          <br />
          You can view some of my projects here - connect with me!
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/abfar481/" className={styles.card}>
            <h2 className='font-bold text-gray-600'>Github</h2>
            <p>Find the source codes to my projects in this repository.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
          <h2 className='font-bold text-gray-600'>LinkedIn</h2>
            <p>See my career development journey!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2 className='font-bold text-gray-600'>Codepen.io</h2>
            <p>Discover and deploy my projects live.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2 className='font-bold text-gray-600'>Instagram</h2>
            <p>
              This is my social, reserved for personal contacts only.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
