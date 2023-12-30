import { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "./Button.css";
import { useNavigate } from "react-router-dom";

interface Props {
  type: "submit" | "reset" | "button";
  imgSrc?: string;
  altText?: string;
  children?: string;
  showText?: boolean;
  showTooltip?: boolean;
  goToInternalPage?: string;
  goToExternalPage?: string;
}

export const Button = ({
  type,
  imgSrc,
  altText,
  children,
  showText,
  showTooltip,
  goToInternalPage,
  goToExternalPage
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

  const navigate = useNavigate();
  const handleClick = () => {
    {
      goToInternalPage && navigate(goToInternalPage);
    }
    {
      goToExternalPage && window.open(goToExternalPage, "_blank");
    }
  };

  return (
    <button ref={buttonRef} type={type} onClick={handleClick}>
      {showText && children}
      {imgSrc != null && <img src={imgSrc} alt={altText || ""} />}
    </button>
  );
};
