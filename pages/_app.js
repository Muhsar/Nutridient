import React from 'react';
import '../styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import Head from 'next/head';
import 'tailwindcss/tailwind.css'
 const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
 {
      AOS.init()
    }
  }, [])
  const queryClientRef = React.useRef()
   if (!queryClientRef.current) {
     queryClientRef.current = new QueryClient()
   }
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
        <link href='https://fonts.googleapis.com/css?family=Great Vibes' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'/>
        
        </Head>
  <Component {...pageProps} />
  </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
