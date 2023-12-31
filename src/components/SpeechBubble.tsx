import { ReactNode } from "react";
import "./SpeechBubble.css";

interface Props {
  children: ReactNode;
  color: string;
  orientation: "left" | "right";
}

export const SpeechBubble = ({ children, color, orientation }: Props) => {
  return (
    <div
      className={orientation + " speech-bubble"}
      style={{ backgroundColor: color }}
    >
      "{children}"
    </div>
  );
};
