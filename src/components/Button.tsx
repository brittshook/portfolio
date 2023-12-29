import { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "./Button.css";

interface Props {
  type: "submit" | "reset" | "button";
  imgSrc?: string;
  altText?: string;
  children?: string;
  showText?: boolean;
  showTooltip?: boolean;
  onClick: () => void;
}

export const Button = ({
  type,
  imgSrc,
  altText,
  children,
  showText,
  showTooltip,
  onClick,
}: Props) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current && showTooltip) {
      tippy(buttonRef.current, {
        content: children,
        arrow: false,
        placement: "top",
      });
    }
  }, [children, showTooltip]);

  return (
    <button ref={buttonRef} type={type} onClick={() => onClick()}>
      {showText && children}
      {imgSrc != null && <img src={imgSrc} alt={altText || ""} />}
    </button>
  );
};
