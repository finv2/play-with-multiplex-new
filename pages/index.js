import Head from "next/head";
import { Fragment } from "react";
import Home from "../containers/home";
import { gameData } from "data/game";

export default function Homepage({ games }) {
  return (
    <Fragment>
      <Head>
        <title>{"Fin Games"}</title>
        <link rel="icon" href="/gameImage/launch-icon.png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossorigin="anonymous"
        ></script>
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
