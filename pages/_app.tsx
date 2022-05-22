import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react';
import Page from '../components/Page';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Page>
        <Component {...pageProps} />
      </Page>
  </Fragment>
  )
}
   
     
      
      

export default MyApp
