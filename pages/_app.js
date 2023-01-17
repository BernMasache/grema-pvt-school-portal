import Layout from '../components/layouts/default.layout'
import MainLayout from '../components/layouts/mainLayout'
import '../styles/globals.css'
import React, { Fragment } from 'react';                  //icons

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}
