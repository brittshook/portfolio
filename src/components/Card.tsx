import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import "./Card.css";

type Props = {
  showCaseStudyButton?: boolean;
  caseStudyPath?: string;
  showDemoButton?: boolean;
  demoLink?: string;
  showGithubButton?: boolean;
  githubRepoLink?: string;
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  categories?: string[];
  showOnHomepage?: boolean;
}

export const Card = ({
  showCaseStudyButton,
  caseStudyPath,
  showDemoButton,
  demoLink,
  showGithubButton,
  githubRepoLink,
  title,
  description,
  imageSrc,
  altText,
}: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    {
      caseStudyPath && navigate(caseStudyPath);
    }
    {
      demoLink && window.open(demoLink, "_blank");
    }
  };

  return (
    <div className="card">
      <div className="callout">
        <img
          src={imageSrc}
          alt={altText}
          onClick={handleClick}
          className="has-click-event cover"
        ></img>
      </div>
      <div id="info">
        <div id="details">
          <p className="title">
            {caseStudyPath && <Link to={caseStudyPath}>{title}</Link>}
            {demoLink && (
              <a href={demoLink} target="_blank">
                {title}
              </a>
            )}
          </p>
          <p className="description">{description}</p>
        </div>
        <div className="btn-container">
          {showGithubButton && (
            <Button
              type="button"
              imgSrc="/icons/github.svg"
              altText="github"
              showTooltip={true}
              goToExternalPage={githubRepoLink}
            >
              Github
            </Button>
          )}
          {showCaseStudyButton && (
            <Button
              type="button"
              imgSrc="/icons/arrow_right.svg"
              altText="case study"
              showTooltip={true}
              goToInternalPage={caseStudyPath}
            >
              Case Study
            </Button>
          )}
          {showDemoButton && (
            <Button
              type="button"
              imgSrc="/icons/arrow_topright.svg"
              altText="demo"
              showTooltip={true}
              goToExternalPage={demoLink}
            >
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
