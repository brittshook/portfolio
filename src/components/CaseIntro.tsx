import { useLocation } from "react-router-dom";
import { Team } from "./Team";
import { Tools } from "./Tools";
import { Button } from "./Button";
import { projectData } from "../pages/work/ProjectData";
import { Callout } from "./Callout";

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
    <section id="overview" className="flex flex-col gap-8">
      <header className="flex justify-between items-start">
        <div className="flex flex-col-reverse gap-0.5">
          <h1 className="text-xl font-bold mb-2.5 max-sm:text-2-xl">
            {data!.title}
          </h1>
          <p className="text-base max-sm:text-lg text-t-secondary-light">
            {customSubtitle || data!.subtitle}
          </p>
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
      <Callout isCover={true}>
        <img
          src={data!.imgSrc}
          alt={data!.altText}
          title={data!.altText}
          className="w-136 h-88.5 object-contain"
        />
      </Callout>
      <div>
        <p className="text-lg max-sm:text-xl">{data!.description}</p>
        {data!.additionalDescription && (
          <p className="text-lg max-sm:text-xl text-t-secondary-light">
            {data!.additionalDescription}
          </p>
        )}
      </div>

      {(data!.teamNames || data!.toolNames) && (
        <section className="flex">
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
          {data!.toolNames && <Tools toolNames={data!.toolNames} />}
        </section>
      )}
    </section>
  );
};
