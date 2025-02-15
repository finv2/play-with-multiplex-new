import { gameData } from "data/game"; // This will now be fetched at build time
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { notify } from "../../components/Notify";
import Image from "next/image";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("@components/model"), { ssr: false });
const Ads = dynamic(() => import("@components/Ads"), { ssr: false });

function Home({ games }) {
  // Receive pre-fetched game data
  const Router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [adsLoaded, setAdsLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!window.adsbygoogle) {
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.defer = true;
      script.onload = () => setAdsLoaded(true);
      document.head.appendChild(script);
    } else {
      setAdsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (adsLoaded) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Ad reload error:", e);
      }
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
        {/* Logo */}
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

        {/* Google Ads */}
        {adsLoaded && (
          <Ads
            data-ad-slot="8616430030"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        )}

        {/* Add to Home Screen */}
        <div className="flex items-center justify-center pt-10 px-5 pb-5">
          <div className="bg-primary1 w-full rounded-md border p-3">
            <div className="text-primary2 text-center font-bold pb-2">
              Welcome to Add on home screen
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => notify.error("Not Available For Your Device")}
                className="bg-primary2 shadow-custom text-white font-bold rounded-lg text-sm px-5 py-2.5"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Google Custom Search */}
        {isClient && <div className="gcse-search"></div>}

        {/* Game Categories */}
        <div className="flex items-center justify-center pt-10 px-5 pb-10">
          <div className="bg-primary1 rounded-md border p-5">
            <div className="text-primary2 text-center font-bold pb-5">
              Pick which of these game categories you enjoy more!
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => Router.push("/visit")}
                type="button"
                className="bg-primary2 shadow-custom text-white font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                🏹 Classic
              </button>
              <button
                onClick={() => Router.push("/visit")}
                type="button"
                className="bg-primary2 shadow-custom text-white font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                ⚽️ Sports
              </button>
            </div>
          </div>
        </div>

        {/* Game List */}
        <div className="px-5 grid grid-cols-2 gap-2 pb-5">
          {games &&
            games.map((game) => (
              <div
                key={game.gameName}
                className="bg-primary1 rounded-lg border p-3"
              >
                <Image
                  src={game.img}
                  alt={game.gameName}
                  width={300} // Adjust based on design needs
                  height={300} // Keep the square aspect ratio
                  className="rounded-lg w-full h-auto"
                  priority={false}
                />
                <div className="text-primary2 text-center font-bold pt-1">
                  {game.gameName}
                </div>
                <a href={game.src}>
                  <button
                    type="button"
                    className="bg-primary2 w-full text-white font-bold rounded-lg text-sm px-4 py-2"
                  >
                    Play Game
                  </button>
                </a>
              </div>
            ))}
        </div>

        {/* More Games & Privacy Policy */}
        <div className="pt-10 px-5 pb-5">
          <a href="https://fingameon.com/">
            <button
              type="button"
              className="w-full text-center bg-primary2 text-white font-bold rounded-lg text-sm px-4 py-2"
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

        {/* Ad Modal */}
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
              ></ins>
              <script
                dangerouslySetInnerHTML={{
                  __html: `(adsbygoogle = window.adsbygoogle || []).push({})`,
                }}
              />
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}

// ✅ Enable Static Generation (ISR) with revalidate
export async function getStaticProps() {
  // Fetch game data (or import from a static file)
  const games = gameData; // Use static import or API fetch if needed

  return {
    props: {
      games,
    },
    revalidate: 60, // Regenerate the page every 60 seconds
  };
}

export default Home;
