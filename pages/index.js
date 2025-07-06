import Head from "next/head";
import Script from "next/script";
import { Fragment } from "react";
import Home from "../containers/home";
import { gameData } from "data/game";

export default function Homepage({ games }) {
  return (
    <Fragment>
      <Head>
        <title>{"Fin Games"}</title>
        <link rel="icon" href="/gameImage/launch-icon.png" />
        <meta charSet="utf-8" />
        {/* Resource hints for Google AdSense */}
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://www.google.com" />

        <link
          rel="preconnect"
          href="https://pagead2.googlesyndication.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://googleads.g.doubleclick.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.google.com"
          crossOrigin="anonymous"
        />
      </Head>

      <Script
        id="adsense-script"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
        onLoad={() => {
          window.adsbygoogleLoaded = true;
        }}
      />
      <Script
        strategy="beforeInteractive"
        src="https://cse.google.com/cse.js?cx=79d49729a410059d7"
      />

      <Home games={games} />
    </Fragment>
  );
}

export async function getStaticProps() {
  // Fetch game data (or import from a static file)
  const games = gameData; // Use static import or API fetch if needed
  return {
    props: {
      games,
    },
    revalidate: 86400, // Regenerate the page every 1 days
  };
}
