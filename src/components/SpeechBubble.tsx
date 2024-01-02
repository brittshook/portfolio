import { ReactNode } from "react";
import "./SpeechBubble.css";

type Props = {
  children: ReactNode;
  color: string;
  orientation: "left" | "right";
};

export const SpeechBubble = ({ children, color, orientation }: Props) => {
  return (
    <div
      className={`speech-bubble ${orientation}`}
      style={{ backgroundColor: color }}
    >
      "{children}"
    </div>
  );
};
