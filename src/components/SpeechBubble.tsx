import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  orientation: "left" | "right";
  className?: string;
};

export const SpeechBubble = ({ children, orientation, className }: Props) => {
  return (
    <div
      className={`text-base max-sm:text-lg w-full max-w-lg p-5 rounded-xl ${
        orientation === "right"
          ? "ml-auto rounded-br-none"
          : "mr-auto rounded-bl-none"
      } ${className ? className : ""}`}
    >
      "{children}"
    </div>
  );
};
