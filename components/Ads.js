'use client';

import cn from "classnames";
import { useEffect, useRef, useState } from "react";

const AdsenseAd = ({
  adClient = "ca-pub-4575195873243785",
  adSlot = "6300978111",
  format = "auto",
  responsive = true,
  test = true,
  styles = {},
  className = "",
  onAdLoaded = () => {},
  onAdFailedToLoad = () => {},
  showAfterLoad = false,
}) => {
  const insRef = useRef(null);
  const pushedRef = useRef(false);
  const [loaded, setLoaded] = useState(showAfterLoad ? false : true);

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

  useEffect(() => {
    let interval;
    let counter = 0;
    function checkLoaded() {
      console.log(`======================================= ${adSlot} ===========================================================`, insRef.current.dataset.adsbygoogleStatus)
      // adsbygoogle-status
      if(insRef.current && insRef.current.dataset.adsbygoogleStatus === 'done') {
        console.log("checking in", insRef.current.dataset.adStatus, counter)
        counter++;
        if(insRef.current.dataset.adStatus === "filled") {
          console.log("ad loaded")
          setLoaded(true);
          onAdLoaded?.();
          clearInterval(interval);
        } else if(counter > 3) {
          console.log("ad failed")
          clearInterval(interval);
          onAdFailedToLoad?.();
          insRef.current.style.height = "0px";
          insRef.current.style.display = "none";
        }
      }
    }
    interval = setInterval(checkLoaded, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <ins
      ref={insRef}
      className={cn("adsbygoogle adbanner-customize", className)}
      style={{ display: "block", width: "100%", border: test ? "1px solid red" : "none", ...(loaded ? { opacity: 1 } : { opacity: 0 }), ...styles }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
      data-adtest={test ? "on" : null}
    />
  );
};

export default AdsenseAd;