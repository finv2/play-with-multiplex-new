import "../styles/globals.css";
import { Fragment } from "react";
import dynamic from "next/dynamic";

const GA4Initializer = dynamic(
  () => import("@components/gtag").then((mod) => mod.GA4Initializer),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <GA4Initializer />
      <Component {...pageProps} />
    </Fragment>
  );
}
