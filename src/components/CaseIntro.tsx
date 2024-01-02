import { Team } from "./Team";
import { Tools } from "./Tools";
import "./CaseIntro.css";
import { Button } from "./Button";
import { projectData } from "../pages/work/ProjectData";
import { useLocation } from "react-router-dom";

type Props = {
  customSubtitle?: string;
};

export const CaseIntro = ({ customSubtitle }: Props) => {
  const location = useLocation();
  const data = projectData.find(
    (project) =>
      project.caseStudyPath && project.caseStudyPath === location.pathname
  );
  return (
    <section id="overview">
      <header>
        <div className="headings">
          <h1>{data!.title}</h1>
          <p>{customSubtitle || data!.subtitle}</p>
        </div>
        {(data!.demoLink || false) && (
          <Button
            type="button"
            imgSrc="/icons/arrow_topright.svg"
            showTooltip={true}
            goToExternalPage={data!.demoLink}
          >
            Visit Website
          </Button>
        )}
      </header>
      <div className="callout">
        <img
          src={data!.imgSrc}
          alt={data!.altText}
          title={data!.altText}
          className="cover"
        />
      </div>
      <div>
        <p className="large-text">{data!.description}</p>
        {data!.additionalDescription && (
          <p className="large-text secondary">{data!.additionalDescription}</p>
        )}
      </div>

      {(data!.teamNames || data!.toolNames) && (
        <section id="details">
          {data!.teamNames && data!.teamRoles && (
            <Team
              teamImgSrcs={data!.teamNames.map(
                (memberName) =>
                  `/icons/profile_pic/${memberName.toLowerCase()}.webp`
              )}
              teamNames={data!.teamNames}
              teamRoles={data!.teamRoles}
            />
          )}
          {data!.toolNames && (
            <Tools
              toolImgSrcs={data!.toolNames.map(
                (tool) =>
                  `/icons/tool/${tool.toLowerCase().replace(/\s/g, "_")}.webp`
              )}
              toolNames={data!.toolNames}
            />
          )}
        </section>
      )}
    </section>
  );
};
