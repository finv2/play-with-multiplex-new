import VisitPage from "../containers/visit";
import Head from "next/head";
import { Fragment } from "react";

function Visit() {
  return (
    <Fragment>
      <Head>
        <title>{"Fin Games"}</title>
      </Head>

      <VisitPage />

    </Fragment>
  );
}

export default Visit;
