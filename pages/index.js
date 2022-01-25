import Head from 'next/head'
import Main from '../src/components/Main'
import LayoutLeft from '../src/components/LayoutLeft'
import LayoutRight from '../src/components/LayoutRight'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wordle helper</title>
        <meta name="description" content="Wordle helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <LayoutLeft />
        <LayoutRight />
      </Main>
    </div>
  )
}
