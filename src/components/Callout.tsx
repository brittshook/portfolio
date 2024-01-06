import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isCover?: boolean;
  className?: {
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    borderRadius?: string;
    padding?: string;
    backgroundColor?: string;
    other?: string;
  };
};

export const Callout = ({ children, isCover, className }: Props) => {
  const display = className?.display || "flex";
  const justifyContent = className?.justifyContent || "justify-center";
  const alignItems = className?.alignItems || "items-center";
  const borderRadius = className?.borderRadius || "rounded-3";
  const padding = className?.padding || "p-7";
  const backgroundColor = className?.backgroundColor || "bg-s-secondary";
  const other = (className?.other || "") + (isCover ? " max-w-full cover" : "");

  return (
    <div
      className={`callout ${display} ${justifyContent} ${alignItems} ${borderRadius} ${padding} ${other} ${backgroundColor}`}
    >
      {children}
    </div>
  );
};
