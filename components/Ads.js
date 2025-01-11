"use client";
import { useEffect } from "react";

const Ads = (props) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  // Determine the appropriate style based on props
  const adStyle = props.multiplex
    ? {
        display: "inline-block",
        width: "360px",
        height: "400px",
      }
    : props.display
    ? {
        display: "inline-block",
        width: "336px",
        height: "280px",
      }
    : {
        display: "block",
      };

  return (
    <a
      href="#"
      onClick={() => console.log("Ad clicked")} // Replace with your logic
      style={{ display: "block" }}
    >
      <ins
        className="adsbygoogle adbanner-customize"
        style={adStyle}
        data-ad-client="ca-pub-4575195873243785"
        {...props}
      />
    </a>
  );
};

export default Ads;
