import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isCover?: boolean;
  showInProgress?: boolean;
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

export const Callout = ({
  children,
  isCover,
  showInProgress,
  className,
}: Props) => {
  const display = className?.display || "flex";
  const justifyContent = className?.justifyContent || "justify-center";
  const alignItems = className?.alignItems || "items-center";
  const borderRadius = className?.borderRadius || "rounded-3";
  const padding = className?.padding || "p-7";
  const backgroundColor = className?.backgroundColor || "bg-s-secondary";
  const other = (className?.other || "") + (isCover ? " max-w-full cover" : "");

  return (
    <div
      className={`callout relative overflow-hidden ${display} ${justifyContent} ${alignItems} ${borderRadius} ${padding} ${other} ${backgroundColor}`}
    >
      {children}
      {showInProgress && (
        <img
          className="absolute bottom-16 -right-20 -rotate-24 h-12 max-570:h-9 330:max-570:bottom-8 max-570:-right-10 max-570:min-w-[400px] 330:max-570:-rotate-20 max-330:-rotate-12 max-330:bottom-1/3"
          src="/images/in_progress.webp"
          alt="in progress"
        />
      )}
    </div>
  );
};
