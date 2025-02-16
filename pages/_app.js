// import { GA4Initializer } from "@components/gtag";
import "../styles/globals.css";
import { Fragment, useEffect } from "react";
// import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";

const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false }
);
const GA4Initializer = dynamic(
  () => import("@components/gtag").then((mod) => mod.GA4Initializer),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Lazy load React Toastify CSS
    import("react-toastify/dist/ReactToastify.css").catch((error) => {
      console.error("Error loading Toastify CSS:", error);
    });
  }, []);
  return (
    <Fragment>
      <GA4Initializer />
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </Fragment>
  );
}
