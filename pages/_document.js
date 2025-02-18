import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/gameImage/launch-icon.png" />
        <link rel="stylesheet" type="text/css" />
        {/* Preload neuicons CSS with media="print" for lazy loading */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/neuicons/css/neu.min.css"
          media="print"
          onLoad="this.media='all'"
        />
        {/* Fallback in case JavaScript is disabled */}
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/neuicons/css/neu.min.css"
          />
        </noscript>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
