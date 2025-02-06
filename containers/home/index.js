"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { useRouter } from "next/router";
import { notify } from "../../components/Notify";
import { gameData } from "data/game";
import Ads from "@components/Ads";
import Modal from "@components/model";
import Script from "next/script";

function Home() {
  const Router = useRouter();
  const [adsLoaded, setAdsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if ads script is loaded
    const checkAds = setInterval(() => {
      if (window.adsbygoogle && window.adsbygoogle.loaded) {
        setAdsLoaded(true);
        clearInterval(checkAds);
      }
    }, 500);

    return () => clearInterval(checkAds);
  }, []);

  const handleClick = () => notify.error("Not Available For Your Device");

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
        onLoad={() => setAdsLoaded(true)}
      />

      {/* Load Google Search Box */}
      <Script
        strategy="lazyOnload"
        src="https://cse.google.com/cse.js?cx=79d49729a410059d7"
      />

      {/* Show Loading Until Ads Load */}
      {!adsLoaded ? (
        <div className="h-screen flex justify-center items-center text-primary2 font-bold">
          Loading Ads...
        </div>
      ) : (
        <div className="mx-auto max-w-[360px] bg-white">
          {/* Logo Section */}
          <a href="https://fingameon.com/">
            <div className="h-[50px] flex items-center justify-center bg-primary1">
              <Image src="/gameImage/Logo.png" alt="Logo" width={144} height={30} priority />
            </div>
          </a>

          {/* Ads */}
          <Ads data-ad-slot="8616430030" data-ad-format="auto" data-full-width-responsive="true" />

          {/* Add to Home Screen */}
          <div className="flex justify-center p-5">
            <div className="bg-primary1 w-full rounded-md border border-primary1 p-3">
              <div className="text-primary2 text-center font-bold pb-2">
                Welcome to Add on home screen
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleClick}
                  className="bg-primary2 text-white font-bold hover:bg-primary3 border-none rounded-lg text-sm px-5 py-2.5 shadow-lg"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Google Custom Search Box */}
          <div className="gcse-search"></div>

          {/* Game Categories */}
          <div className="flex justify-center p-5">
            <div className="bg-primary1 rounded-md border border-primary1 p-5">
              <div className="text-primary2 text-center font-bold pb-5">
                Pick which of these game categories you enjoy more!
              </div>
              <div className="flex justify-center gap-3">
                {["🏹 Classic", "⚽️ Sports"].map((category) => (
                  <button
                    key={category}
                    onClick={() => Router.push("/visit")}
                    className="bg-primary2 text-white font-bold hover:bg-primary3 border-none rounded-lg text-sm px-5 py-2.5 shadow-lg"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Multiplex Ads */}
          <Ads multiplex={true} data-ad-slot="5998667879" />

          {/* Games Grid */}
          <div className="p-5 grid grid-cols-2 gap-2">
            {gameData.map((game) => (
              <div key={game.gameName} className="bg-primary1 rounded-lg border border-primary1 p-3">
                <Image src={game.img} alt={game.gameName} width={160} height={90} className="rounded-lg" />
                <div className="text-primary2 text-center font-bold pt-1">{game.gameName}</div>
                <a href={game.src}>
                  <button className="bg-primary2 w-full text-white font-bold hover:bg-primary3 border-none rounded-lg text-sm px-4 py-2 mt-2">
                    Play Game
                  </button>
                </a>
              </div>
            ))}
          </div>

          {/* More Games & Privacy Policy */}
          <div className="p-5">
            <a href="https://fingameon.com/">
              <button className="w-full bg-primary2 text-white font-bold hover:bg-primary3 border-none rounded-lg text-sm px-4 py-2">
                More Games
              </button>
            </a>
            <a href="https://fingameon.com/privacy-policy">
              <div className="text-primary2 hover:underline text-center mt-2">Privacy Policy</div>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-2 pb-5">
            {[IoLogoFacebook, IoLogoInstagram, IoLogoYoutube].map((Icon, index) => (
              <Icon key={index} size={35} className="text-primary2" />
            ))}
          </div>
        </div>
      )}

      {/* Modal Ads */}
      {isOpen && (
        <Modal outerClassName="border-[1px] border-white" isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Ads display={true} data-ad-slot="7506023729" />
        </Modal>
      )}
    </>
  );
}

export default Home;
