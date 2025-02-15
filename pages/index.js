import Head from "next/head";
// import dynamic from "next/dynamic";
import { Fragment } from "react";
import Home from "@containers/home";
// Dynamically import Home to enable lazy loading
// const Home = dynamic(() => import("../containers/home"), { ssr: false });

export default function Homepage() {
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <Home />
    </Fragment>
  );
}
