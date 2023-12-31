interface Props {
  src: string;
  altText: string;
}

export const EnlargeImage = ({ src, altText }: Props) => {
  return (
    <img
      src={src}
      alt={altText}
      className="has-click-event"
      onClick={() => window.open(src, "_blank")}
    />
  );
};
