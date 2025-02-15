import { gameData } from "data/game";
import VisitPage from "../containers/visit";
import Head from "next/head";
import { Fragment } from "react";

function Visit({ games }) {
  return (
    <Fragment>
      <Head>
        <title>{"Fin Games"}</title>
      </Head>

      <VisitPage gameData={games} />
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
    revalidate: 86400, // Regenerate the page every 60 seconds
  };
}

export default Visit;
