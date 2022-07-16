// import 'bootstrap/dist/css/bootstrap.css'
import '../styles/customTheme.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>Math Orientation</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
