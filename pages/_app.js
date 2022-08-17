// import 'bootstrap/dist/css/bootstrap.css'
import '../styles/customTheme.scss'
import Head from 'next/head'
import {SSRProvider} from 'react-aria';
// import 'bootstrap'
const bootstrap = typeof window !== `undefined` && import("bootstrap")

function MyApp({ Component, pageProps }) {
  if (!bootstrap) {
    return <></>
  }
  return(
    <>
    <SSRProvider>
    <Head>
      <title>Math Orientation</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    </SSRProvider>
    </>
  )
}

export default MyApp
