import Ads from "@components/Ads";
import Modal from "@components/model";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { notify } from "../../components/Notify";

function Home({ games }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [adsLoaded, setAdsLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  useEffect(() => {
    if (isOpen && adsLoaded) {
      setTimeout(() => {
        try {
          window.adsbygoogle && window.adsbygoogle.push({});
        } catch (error) {
          console.error("Ad reload error:", error);
        }
      }, 1000);
    }
  }, [isOpen, adsLoaded]);

  if (!adsLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading ads...</p>
      </div>
    );
  }

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
            <Image
              src="/gameImage/Logo.png"
              alt="Logo"
              width={144}
              height={30}
              className="h-[30px] w-36"
              priority
            />
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
                onClick={() => notify.error("Not Available For Your Device")}
                className="bg-primary2 shadow-custom text-white font-bold hover:bg-primary3 border border-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {isClient && <div className="gcse-search" />}

        <div className="flex items-center justify-center pt-10 px-5 pb-10">
          <div className="bg-primary1 rounded-md border-solid border-x-[1px] border-primary1 border-y-[1px] p-5">
            <div className="text-primary2 text-center font-bold pb-5">
              Pick which of these game categories you enjoy more!
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => router.push("/visit")}
                type="button"
                className="bg-primary2 shadow-custom text-white font-bold border-none hover:bg-primary3 border border-gray-200 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
              >
                🏹 Classic
              </button>
              <button
                onClick={() => router.push("/visit")}
                type="button"
                className="bg-primary2 text-white shadow-custom font-bold border-none hover:bg-primary3 border border-gray-200 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
              >
                ⚽️ Sports
              </button>
            </div>
          </div>
        </div>

        <Ads multiplex={true} data-ad-slot="5998667879" />

        <div>
          <div className="px-5 grid grid-cols-2 gap-2 pb-5">
            {games ? (
              games.map((game) => (
                <div
                  key={game.gameName}
                  className="bg-primary1 rounded-lg border-solid border-x-[1px] border-primary1 border-y-[1px] p-3"
                >
                  <Image
                    src={game.img}
                    alt={game.gameName}
                    width={300} // Adjust based on design needs
                    height={300} // Keep the square aspect ratio
                    className="rounded-lg w-full h-auto"
                    priority={false}
                    loading="lazy"
                  />
                  {/* <img src={game.img} className="rounded-lg" /> */}
                  <div className="text-primary2 text-center font-bold pt-1">
                    {game.gameName}
                  </div>
                  <a href={game.src}>
                    <button
                      type="button"
                      className="bg-primary2 w-full text-white font-bold hover:bg-primary3 border border-gray-200 rounded-lg text-sm px-4 py-2 text-center items-center"
                    >
                      Play Game
                    </button>
                  </a>
                </div>
              ))
            ) : (
              <></>
            )}
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
      </div>

      {isClient && (
        <Modal
          outerClassName="border-[1px] border-white"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="md:mt-[18px] mt-[20px]">
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-4575195873243785"
              data-ad-slot="7506023729"
              data-ad-format="auto"
            />
            <script>
              {`(adsbygoogle = window.adsbygoogle || []).push({});`}
            </script>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Home;
