"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { useRouter } from "next/router";
import { notify } from "../../components/Notify";
import { gameData } from "data/game";
import Ads from "@components/Ads";
import Modal from "@components/model";
import Script from "next/script";  // Import Next.js Script for optimized loading

function Home() {
  const Router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isOpen, SetIsOpen] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    notify.error("Not Available For Your Device");
  };

  return (
    <>
      <Head>
        <title>Play Games | Fingameon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Load Google Ads First */}
      <Script
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
        crossOrigin="anonymous"
      />

      {/* Load Google Search Box */}
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

        {/* Ads First */}
        <Ads
          data-ad-slot="8616430030"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />

        {/* Rest of your content remains unchanged */}
      </div>

      {isClient && (
        <Modal
          outerClassName="border-[1px] border-white"
          isOpen={isOpen}
          onClose={() => SetIsOpen(false)}
        >
          <div className="md:mt-[18px] mt-[20px]">
            <Ads display={true} data-ad-slot="7506023729" />
          </div>
        </Modal>
      )}
    </>
  );
}

export default Home;
