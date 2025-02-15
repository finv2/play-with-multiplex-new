import Head from "next/head";
import { Fragment } from "react";
import Home from "../containers/home";

export default function Homepage() {
  return (
    <Fragment>
      <Head>
        <title>{"Fin Games"}</title>
        <link rel="icon" href="/gameImage/launch-icon.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
     crossorigin="anonymous"></script>
      </Head>

        <Home />

    </Fragment>
  );
}
