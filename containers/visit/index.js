import React from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { gameData } from "../../data/game";
import Script from "next/script"; // Use next/script for script tags
import Ads from "@components/Ads";


function VisitPage() {
  return (
    <>
      <div className="mx-auto h-max ls:w-[360px] bg-white">
        <div className="flex items-center justify-center pt-10 px-5 pb-10">
          <div className="bg-primary1 w-full rounded-md border-solid border-x-[1px] border-primary1 border-y-[1px] p-5">
            <img
              src="/gameImage/success.png"
              width={80}
              className="flex items-center mx-auto justify-center"
              alt="Success"
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
            data-ad-slot="8616430030"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        {/* Game Data */}
        <div className="px-5 grid grid-cols-2 gap-2">
          {gameData && gameData.length > 0 ? (
            gameData.map((items) => (
              <div
                key={items.gameName}
                className="bg-primary1 rounded-lg border-solid border-x-[1px] border-primary1 border-y-[1px] p-3"
              >
                <img
                  src={items.img}
                  className="rounded-lg"
                  alt={items.gameName}
                />
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
    </>
  );
}

export default VisitPage;
