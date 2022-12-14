import Head from 'next/head'
import Header from '../src/components/Header/Header'
import Home from '../src/components/Home/Home'
import styles from '../styles/Home.module.css'

export default function () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Text Task</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
    </div>
  )
}
