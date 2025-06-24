'use client';

import { useEffect, useRef } from "react";

const AdsenseAd = ({
  adClient = "ca-pub-4575195873243785",
  adSlot = "6300978111",
  format = "auto",
  responsive = true,
  test = true
}) => {
  const pushedRef = useRef(false);

  useEffect(() => {
    if (pushedRef.current) return;
  
    const attemptPush = () => {
      if (window.adsbygoogle && window.adsbygoogle.push) {
        try {
          window.adsbygoogle.push({});
          pushedRef.current = true;
        } catch (e) {
          console.error("Adsense push error:", e);
        }
      } else {
        setTimeout(attemptPush, 200);
      }
    };
  
    if (typeof window !== "undefined" && window.adsbygoogleLoaded) {
      attemptPush();
    } else {
      const interval = setInterval(() => {
        if (window.adsbygoogleLoaded) {
          clearInterval(interval);
          attemptPush();
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{ display: "block", width: "100%", border: test ? "1px solid red" : "none" }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
      data-adtest={test ? "on" : null}
    />
  );
};

export default AdsenseAd;