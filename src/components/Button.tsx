import { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "./Button.css";
import { useNavigate } from "react-router-dom";

type Props = {
  type: "submit" | "reset" | "button";
  imgSrc?: string;
  altText?: string;
  children?: string;
  showText?: boolean;
  showTooltip?: boolean;
  goToInternalPage?: string;
  goToExternalPage?: string;
  onClick?: () => void;
  id?: string;
};

export const Button = ({
  type,
  imgSrc,
  altText,
  children,
  showText,
  showTooltip,
  goToInternalPage,
  goToExternalPage,
  onClick,
  id,
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
    <button
      id={id}
      ref={buttonRef}
      type={type}
      onClick={onClick || handleClick}
    >
      {showText && children}
      {imgSrc != null && <img src={imgSrc} alt={altText || ""} />}
    </button>
  );
};
