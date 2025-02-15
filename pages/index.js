import Head from "next/head";
// import dynamic from "next/dynamic";
import { Fragment } from "react";
import Home from "@containers/home";
import Script from "next/script";
import { gameData } from "data/game";

export default function Homepage({ games }) {
  return (
    <Fragment>
      <Head>
        <title>Fin Games</title>
        <link rel="icon" href="/gameImage/launch-icon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Fin Games - The best place for gaming."
        />
        <meta name="author" content="Fin Games" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossOrigin="anonymous"
        ></Script>
      </Head>

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
