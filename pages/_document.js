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
              <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]function(){(c[a].q=c[a].q[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "rdrgupgmsh");
            `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
