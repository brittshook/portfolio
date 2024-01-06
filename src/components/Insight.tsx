import { ReactNode } from "react";

type Props = {
  text: string;
  htmlElement?: ReactNode;
  insightType: string;
  className?: string;
};

export const Insight = ({
  text,
  htmlElement,
  insightType,
  className,
}: Props) => {
  return (
    <div
      className={`w-full h-full p-8 bg-s-secondary relative ${
        className ? className : ""
      }`}
    >
      <p className="text-base max-sm:text-lg">{text}</p>
      {htmlElement}
      <div className="font-mono text-[0.8125rem] py-1.25 px-2.25 bg-t-secondary-light text-s-secondary rounded-lg uppercase absolute right-6 bottom-6">
        {insightType}
      </div>
    </div>
  );
};
