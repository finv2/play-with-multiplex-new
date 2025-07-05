import Ads from "@components/Ads";
import Modal from "@components/model";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { gameData } from "../../data/game";

function VisitPage() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    // Ensures that the component only renders client-side content after hydration
    setIsClient(true);
  }, [isClient]);
  return (
    <>
      <div className="mx-auto h-max ls:w-[360px] bg-white">
        <div className="flex items-center justify-center pt-10 px-5 pb-10">
          <div className="bg-primary1 w-full rounded-md border-solid border-x-[1px] border-primary1 border-y-[1px] p-5">
            <Image
              src="/gameImage/success.png"
              width={80}
              height={80}
              className="mx-auto"
              alt="Success"
              priority
            />
            <div className="text-primary2 text-center font-bold text-lg pt-3">
              Thank You,
            </div>
            <div className="text-primary2 text-center font-bold">
              Enjoy Games Unlimited!
            </div>
          </div>
        </div>

        {/* Google Ads */}
        <Ads
          adSlot="8616430030"
          test={process.env.NODE_ENV === "development"}
        />
        {/* Game Data */}
        <div className="px-5 grid grid-cols-2 gap-2">
          {gameData && gameData.length > 0 ? (
            gameData.map((items) => (
              <div
                key={items.gameName}
                className="bg-primary1 rounded-lg border-solid border-x-[1px] border-primary1 border-y-[1px] p-3"
              >
                <Image
                  src={items.img}
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-auto"
                  alt={items.gameName}
                  loading="lazy" // ✅ Loads images efficiently
                  priority={false}
                />
                {/* <img
                  src={items.img}
                  className="rounded-lg"
                  alt={items.gameName}
                /> */}
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
            ))
          ) : (
            <div>No games available.</div>
          )}
        </div>
        {/* Google Ads */}

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-1 pb-5 pt-10">
          <IoLogoFacebook size={35} className="text-primary2" />
          <IoLogoInstagram size={35} className="text-primary2" />
          <IoLogoYoutube size={35} className="text-primary2" />
        </div>
      </div>

      {isClient && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          outerClassName="border-[1px] border-white"
        >
          <div className="md:mt-[18px] mt-[20px]">
            <Ads
              display={true}
              adSlot="7506023729"
              className="mx-auto modal-ad"
              test={process.env.NODE_ENV === "development"}
              styles={{
                display: "block",
                height: "296px",
                maxWidth: "800px",
                width: "296px",
              }}
            />
          </div>
        </Modal>
      )}
    </>
  );
}

export default VisitPage;
