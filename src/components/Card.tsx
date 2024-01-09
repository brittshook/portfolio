import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Project } from "../pages/work/ProjectData";
import { Callout } from "./Callout";

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
      <Callout
        isCover
        showInProgress={data.inProgress || false}
        className={{
          other: "mb-4 h-107.5 max-sm:h-82.5 cursor-pointer",
        }}
      >
        <img
          className="h-full object-contain"
          src={data.imgSrc}
          alt={data.altText}
          onClick={handleClick}
        ></img>
      </Callout>
      <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-3">
        <div className="w-2/3 max-sm:w-full">
          <p className="text-base max-sm:text-lg mb-1.5">
            {data.showCaseStudyButton && data.caseStudyPath && (
              <Link
                className="text-t-primary hover:text-t-primary"
                to={data.caseStudyPath}
              >
                {data.title}
              </Link>
            )}
            {data.showDemoButton && data.demoLink && (
              <a
                className="text-t-primary hover:text-t-primary"
                href={data.demoLink}
                target="_blank"
              >
                {data.title}
              </a>
            )}
          </p>
          <p className="text-base max-sm:text-lg text-t-secondary-light">
            {data.subtitle}
          </p>
        </div>
        <div className="flex w-fit gap-3 max-sm:w-full">
          {data.showGithubButton && (
            <Button
              type="button"
              imgSrc="/icons/github.svg"
              altText="github"
              showTooltip={true}
              goToExternalPage={data.githubRepoLink}
              className={{ other: "max-sm:w-full" }}
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
              className={{ other: "max-sm:w-full" }}
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
              className={{ other: "max-sm:w-full" }}
            >
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
