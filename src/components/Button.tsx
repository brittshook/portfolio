import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

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
  className?: {
    padding?: string;
    background?: string;
    borderRadius?: string;
    borderWidth?: string;
    height?: string;
    other?: string;
  };
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
  className,
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

  const height = className?.height || "h-11";
  const padding =
    className?.padding || (imgSrc?.includes("menu") ? "p-2" : "p-3");
  const background = className?.background || "bg-s-primary";
  const borderRadius = className?.borderRadius || "rounded-7";
  const borderWidth = className?.borderWidth || "border";
  const other = className?.other || "";
  const imgSize = imgSrc?.includes("menu") ? "w-7 h-10" : "w-5 h-5";

  return (
    <button
      id={id}
      ref={buttonRef}
      type={type}
      onClick={onClick || handleClick}
      className={`flex items-center justify-center ${height} ${padding} ${background} hover:bg-[#f5f5f5] ${borderRadius} ${borderWidth} border-[#c2baba] border-solid text-base font-sans max-sm:text-lg text-t-secondary-light capitalize ${other} cursor-pointer`}
    >
      {showText && children}
      {imgSrc != null && (
        <img className={imgSize} src={imgSrc} alt={altText || ""} />
      )}
    </button>
  );
};
