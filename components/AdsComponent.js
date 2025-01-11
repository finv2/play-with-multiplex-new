"use client";
import React, { useEffect } from "react";

const AdsComponent = () => {
  useEffect(() => {
    console.log( window, window.adsbygoogle)
    if (typeof window !== "undefined" && window.adsbygoogle) {
      // console.log("Initializing AdSense for slot:", adSlot);
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense initialization error:", e);
      }
    } else {
      console.warn("AdSense script not loaded.");
    }
  }, []);
  return (
    <div>
      <span> -Sponsered-</span>
      <ins
        className="adsbygoogle"
        style={{
          display:"inline-block",
          width:"360px",
          height:"400px"
        }}
        data-ad-client="ca-pub-4575195873243785"
        data-ad-slot="5998667879"
      ></ins>
    </div>
  );
};

export default AdsComponent;
