"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { notify } from "../../components/Notify";
import { gameData } from "data/game";
import Modal from "@components/model";
import Script from "next/script";

function Home() {
  const Router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [adsLoaded, setAdsLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ Load Google AdSense Script
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => {
      setAdsLoaded(true);
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    };
    document.head.appendChild(script);
  }, []);

  // ✅ Force Reload of Ads
  useEffect(() => {
    if (adsLoaded) {
      setTimeout(() => {
        try {
          if (window.adsbygoogle) {
            window.adsbygoogle.push({});
          }
        } catch (e) {
          console.error("Ad reload error:", e);
        }
      }, 1000);
    }
  }, [adsLoaded]);

  return (
    <>
      <Head>
        <title>Play Games | Fingameon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Script
        strategy="lazyOnload"
        src="https://cse.google.com/cse.js?cx=79d49729a410059d7"
      />

      <div className="mx-auto h-max ls:w-[360px] bg-white">
        <a href="https://fingameon.com/">
          <div className="h-[50px] flex items-center justify-center bg-primary1">
            <img src="/gameImage/Logo.png" className="h-[30px] w-36" />
          </div>
        </a>

        {/* ✅ Regular Ad */}
        <div className="my-5 flex justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-4575195873243785"
            data-ad-slot="8616430030"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>

        {/* ✅ Multiplex Ad */}
        <div className="my-5 flex justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-4575195873243785"
            data-ad-slot="5998667879"
            data-ad-format="autorelaxed"
          ></ins>
        </div>

        {/* ✅ Force Ads to Load */}
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </script>

        {/* Modal Ad */}
        {isClient && (
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="md:mt-[18px] mt-[20px]">
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-4575195873243785"
                data-ad-slot="7506023729"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                {`(adsbygoogle = window.adsbygoogle || []).push({});`}
              </script>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}

export default Home;
