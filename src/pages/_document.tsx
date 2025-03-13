import React from "react";
import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

interface MyDocumentProps extends DocumentProps {}

export default function MyDocument(_props: MyDocumentProps) {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SST Open Next Sentry Issue</title>
      </Head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
