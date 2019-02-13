import React, {Component} from 'react'
import App from 'next/app';
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

export default class Home extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Test site</title>
        </Head>
        <div className="site">
          <Component { ...pageProps } />
        </div>
        <style jsx>{`
          .site {
            border: 1px solid red;
          }
        `}</style>
      </>
    );
  }
}
