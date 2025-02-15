import React, { useEffect, useState } from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import Image from "next/image"; // ✅ Optimized images
import dynamic from "next/dynamic"; // ✅ Lazy load heavy components

// Lazy load Ads & Modal to improve initial render speed
const Ads = dynamic(() => import("@components/Ads"), { ssr: false });
const Modal = dynamic(() => import("@components/model"), { ssr: false });

function VisitPage({ gameData }) {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []); // ✅ Removed unnecessary dependency [isClient] to prevent extra re-renders.

  return (
    <>
      <div className="mx-auto h-max ls:w-[360px] bg-white">
        {/* Success Message */}
        <div className="flex items-center justify-center pt-10 px-5 pb-10">
          <div className="bg-primary1 w-full rounded-md border border-primary1 p-5">
            <Image
              src="/gameImage/success.png"
              width={80}
              height={80}
              className="mx-auto"
              alt="Success"
              priority // ✅ Loads this image faster
            />
            <div className="text-primary2 text-center font-bold text-lg pt-3">
              Thank You,
            </div>
            <div className="text-primary2 text-center font-bold">
              Enjoy Games Unlimited!
            </div>
          </div>
        </div>

        {/* Google Ads - Lazy Loaded */}
        <Ads
          data-ad-slot="8616430030"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />

        {/* Game Data */}
        <div className="px-5 grid grid-cols-2 gap-2">
          {gameData?.length > 0 ? (
            gameData.map((game) => (
              <div
                key={game.gameName}
                className="bg-primary1 rounded-lg border border-primary1 p-3"
              >
                <Image
                  src={game.img}
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-auto"
                  alt={game.gameName}
                  loading="lazy" // ✅ Loads images efficiently
                  priority={false}
                />
                <div className="text-primary2 text-center font-bold pt-1">
                  {game.gameName}
                </div>
                <a href={game.src}>
                  <button className="bg-primary2 w-full text-white font-bold hover:bg-primary3 border border-gray-200 rounded-lg text-sm px-4 py-2">
                    Play Game
                  </button>
                </a>
              </div>
            ))
          ) : (
            <div>No games available.</div>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-1 pb-5 pt-10">
          <IoLogoFacebook size={35} className="text-primary2" />
          <IoLogoInstagram size={35} className="text-primary2" />
          <IoLogoYoutube size={35} className="text-primary2" />
        </div>
      </div>

      {/* Modal - Only renders client-side */}
      {isClient && (
        <Modal
          outerClassName="border border-white"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="mt-5">
            <Ads display={true} data-ad-slot="7506023729" />
          </div>
        </Modal>
      )}
    </>
  );
}

export default VisitPage;
