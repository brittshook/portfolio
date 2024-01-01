import { ReactNode } from "react";
import "./Insight.css";

type Props = {
  text: string;
  htmlElement?: ReactNode;
  insightType: string;
};

export const Insight = ({ text, htmlElement, insightType }: Props) => {
  return (
    <div className="insight">
      <p>{text}</p>
      {htmlElement}
      <div className="tag">{insightType}</div>
    </div>
  );
};
