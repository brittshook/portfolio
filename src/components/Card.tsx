import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import "./Card.css";
import { Project } from "../pages/work/ProjectData";

type Props = {
  data: Project;
};

export const Card = ({ data }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    {
      data.showCaseStudyButton &&
        data.caseStudyPath &&
        navigate(data.caseStudyPath);
    }
    {
      data.showDemoButton &&
        data.demoLink &&
        window.open(data.demoLink, "_blank");
    }
  };

  return (
    <div className="card">
      <div className="callout">
        <img
          src={data.imgSrc}
          alt={data.altText}
          onClick={handleClick}
          className="has-click-event cover"
        ></img>
      </div>
      <div id="info">
        <div id="details">
          <p className="title">
            {data.showCaseStudyButton && data.caseStudyPath && (
              <Link to={data.caseStudyPath}>{data.title}</Link>
            )}
            {data.showDemoButton && data.demoLink && (
              <a href={data.demoLink} target="_blank">
                {data.title}
              </a>
            )}
          </p>
          <p className="subtitle">{data.subtitle}</p>
        </div>
        <div className="btn-container">
          {data.showGithubButton && (
            <Button
              type="button"
              imgSrc="/icons/github.svg"
              altText="github"
              showTooltip={true}
              goToExternalPage={data.githubRepoLink}
            >
              Github
            </Button>
          )}
          {data.showCaseStudyButton && (
            <Button
              type="button"
              imgSrc="/icons/arrow_right.svg"
              altText="case study"
              showTooltip={true}
              goToInternalPage={data.caseStudyPath}
            >
              Case Study
            </Button>
          )}
          {data.showDemoButton && (
            <Button
              type="button"
              imgSrc="/icons/arrow_topright.svg"
              altText="demo"
              showTooltip={true}
              goToExternalPage={data!.demoLink}
            >
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
