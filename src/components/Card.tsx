import { Button } from "./Button";
import "./Card.css";

interface Props {
  showCaseStudyButton?: boolean;
  showDemoButton?: boolean;
  showGitHubButton?: boolean;
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  onSelectItem: (item: string) => void;
}

export const Card = ({
  showCaseStudyButton,
  showDemoButton,
  showGitHubButton,
  title,
  description,
  imageSrc,
  altText,
  onSelectItem,
}: Props) => {
  return (
    <div onClick={() => onSelectItem}>
      <div className="callout">
        <img src={imageSrc} alt={altText}></img>
      </div>
      <div id="info">
        <div id="details">
          <p className="title">
            <a href="">{title}</a>
          </p>
          <p className="description">{description}</p>
        </div>
        <div className="btn-container">
          {showGitHubButton && (
            <Button
              type="button"
              imgSrc="icons/github.svg"
              altText="github"
              onClick={() => {}}
              showTooltip={true}
            >
              Github
            </Button>
          )}
          {showCaseStudyButton && (
            <Button
              type="button"
              imgSrc="icons/arrow_right.svg"
              altText="case study"
              onClick={() => {}}
              showTooltip={true}
            >
              Case Study
            </Button>
          )}
          {showDemoButton && (
            <Button
              type="button"
              imgSrc="icons/arrow_topright.svg"
              altText="demo"
              onClick={() => {}}
              showTooltip={true}
            >
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
