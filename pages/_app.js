// import 'bootstrap/dist/css/bootstrap.css'
import '../styles/customTheme.scss'
import Head from 'next/head'
import {SSRProvider} from 'react-aria';
import React, {useEffect, useState} from 'react'
// import 'bootstrap'
const bootstrap = typeof window !== `undefined` && import("bootstrap")

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!bootstrap || !showChild) {
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
