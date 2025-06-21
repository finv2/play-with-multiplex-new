'use client';

import { useEffect } from "react";

const AdsenseAd = ({
  adClient = "ca-pub-4575195873243785",
  adSlot = "6300978111",
  format = "auto",
  responsive = true,
  test = true
}) => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("Adsense push error:", e);
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
      data-adtest={test ? "on" : null}    />
  );
};

export default AdsenseAd;