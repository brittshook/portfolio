type Props = {
  src: string;
  altText: string;
  showBorder?: boolean;
};

export const EnlargeImage = ({ src, altText, showBorder }: Props) => {
  return (
    <img
      src={src}
      alt={altText}
      className={`cursor-pointer w-full text-t-primary text-xs lowercase max-sm:text-base${
        showBorder ? " rounded-sm border border-solid border-s-border" : ""
      }`}
      onClick={() => window.open(src, "_blank")}
    />
  );
};
