import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export const Footer = () => {
  const anchorRef = useRef(null);

  useEffect(() => {
    if (anchorRef.current && !isMobile) {
      tippy(anchorRef.current, {
        content: "Play RKS on Spotify",
        arrow: true,
        placement: "top",
      });
    }
  });
  return (
    <footer className="box-content flex items-center justify-between max-370:flex-col gap-2 max-w-4.5xl md:max-lg:max-w-2.5xl sm:max-md:mx-8 max-sm:mx-5 mx-auto text-t-secondary-light pt-4 pb-8 border-t border-solid border-s-border">
      <div>
        Created with love,{" "}
        <a
          href="https://open.spotify.com/artist/4hz8tIajF2INpgM0qzPJz2?si=1RD5CAjRQ-6_5cU5u6LBwQ"
          target="_blank"
          ref={anchorRef}
        >
          RKS
        </a>
        , and React
      </div>
      <div className="flex gap-4">
        <img
          className="h-6 cursor-pointer fill-t-secondary-light hover:fill-t-secondary-dark"
          src="/icons/github.svg"
          alt="Github"
          onClick={() =>
            window.open("https://github.com/brittshook", "_target")
          }
        />
        <img
          className="h-6 cursor-pointer text-t-secondary-light  hover:text-t-secondary-dark"
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          onClick={() =>
            window.open("https://linkedin.com/in/bshook", "_target")
          }
        />
      </div>
    </footer>
  );
};
