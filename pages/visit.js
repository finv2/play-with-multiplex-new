import VisitPage from "../containers/visit";
import Head from "next/head";
import { Fragment } from "react";

function Visit() {
  return (
    <Fragment>
      <Head>
        <title>{"Fin Games"}</title>
      </Head>
      <div
        style={{
          backgroundImage: "url('/gameImage/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <VisitPage />
      </div>
    </Fragment>
  );
}

export default Visit;
