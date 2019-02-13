import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class JssDocument extends Document {
  static async getInitialProps (ctx) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => (
          <App {...props} />
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{
            __html: 'html { font-family: \'Open Sans\', sans-serif }',
          }} />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" />
      </html>
    );
  }
}
