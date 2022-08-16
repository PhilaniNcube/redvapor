import '../styles/globals.css'
import { Fragment, useEffect } from 'react';
import Page from '../components/Page';
import analytics from '../utils/analytics';



function MyApp({ Component, pageProps }) {

useEffect(() => {
  analytics.page()
}, [])

  return (
    <Fragment>
      <Page>
        <Component {...pageProps} />
      </Page>
  </Fragment>
  )
}





export default MyApp
