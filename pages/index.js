import Head from "next/head";
import { Fragment } from "react";
import Home from "../containers/home";

export default function Homepage() {
  return (
    <Fragment>
      <Head>
        <title>{"Fin Games"}</title>
        <link rel="icon" href="/gameImage/launch-icon.png" />
      </Head>
      <div
        style={{
          backgroundImage: "url('/gameImage/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Home />
      </div>
    </Fragment>
  );
}
