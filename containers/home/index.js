"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { useRouter } from "next/router";
import { notify } from "../../components/Notify";
import { gameData } from "data/game";
import Ads from "@components/Ads";
import Modal from "@components/model";

function Home() {
  const Router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isOpen, SetIsOpen] = useState(true);
  useEffect(() => {
    // Ensures that the component only renders client-side content after hydration
    setIsClient(true);
  }, [isClient]);
  const handleClick = () => {
    notify.error("Not Available For Your Device");
  };

  return (
    <>
      <Head>
        <script
          async
          src="https://cse.google.com/cse.js?cx=79d49729a410059d7"
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className="mx-auto h-max ls:w-[360px] bg-white">
        <a href="https://fingameon.com/">
          <div className="h-[50px] flex items-center justify-center bg-primary1">
            <img src="/gameImage/Logo.png" className="h-[30px] w-36" />
          </div>
        </a>
        <Ads
          data-ad-slot="8616430030"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <div className="flex items-center justify-center pt-10 px-5 pb-5">
          <div className="bg-primary1 w-full rounded-md border-solid border-x-[1px] border-primary1 border-y-[1px] p-3">
            <div className="text-primary2 text-center font-bold pb-2">
              Welcome to Add on home screen
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={handleClick}
                className="bg-primary2 shadow-custom text-white font-bold hover:bg-primary3 border border-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Google Custom Search Box */}
        {isClient && <div className="gcse-search"></div>}

        <div className="flex items-center justify-center pt-10 px-5 pb-10">
          <div className="bg-primary1 rounded-md border-solid border-x-[1px] border-primary1 border-y-[1px] p-5">
            <div className="text-primary2 text-center font-bold pb-5">
              Pick which of these game categories you enjoy more!
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => Router.push("/visit")}
                type="button"
                className="bg-primary2 shadow-custom text-white font-bold border-none hover:bg-primary3 border border-gray-200 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
              >
                🏹 Classic
              </button>

              <button
                onClick={() => Router.push("/visit")}
                type="button"
                className="bg-primary2 text-white shadow-custom font-bold border-none hover:bg-primary3 border border-gray-200 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
              >
                ⚽ Sports
              </button>
            </div>
          </div>
        </div>
        {/* <Ads multiplex={true} data-ad-slot="5998667879" /> */}
        <Ads data-ad-slot="3943175518" display={true} />
        <div>
          <div className="px-5 grid grid-cols-2 gap-2 pb-5">
            {gameData.map((items) => (
              <div
                key={items.gameName}
                className="bg-primary1 rounded-lg border-solid border-x-[1px] border-primary1 border-y-[1px] p-3"
              >
                <img src={items.img} className="rounded-lg" />
                <div className="text-primary2 text-center font-bold pt-1">
                  {items.gameName}
                </div>
                <a href={items.src}>
                  <button
                    type="button"
                    className="bg-primary2 w-full text-white font-bold hover:bg-primary3 border border-gray-200 rounded-lg text-sm px-4 py-2 text-center items-center"
                  >
                    Play Game
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-10 px-5 pb-5">
          <a href="https://fingameon.com/">
            <button
              type="button"
              className="w-full text-center bg-primary2 text-white font-bold hover:bg-primary3 border border-gray-200 rounded-lg text-sm px-4 py-2"
            >
              More Games
            </button>
          </a>
          <a href="https://fingameon.com/privacy-policy">
            <div className="flex items-center justify-center text-primary2 hover:underline">
              Privacy Policy
            </div>
          </a>
        </div>
        <div className="flex items-center justify-center gap-1 pb-5">
          <IoLogoFacebook size={35} className="text-primary2" />
          <IoLogoInstagram size={35} className="text-primary2" />
          <IoLogoYoutube size={35} className="text-primary2" />
        </div>
      </div>
      {isClient && (
        <Modal
          outerClassName="border-[1px] border-white"
          isOpen={isOpen}
          onClose={() => SetIsOpen(false)}
        >
          <Ads display={true} data-ad-slot="7506023729" />
        </Modal>
      )}
    </>
  );
}

export default Home;
