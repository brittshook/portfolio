import { useLocation } from "react-router-dom";
import { projectData } from "../pages/work/ProjectData";
import { Button } from "./Button";

type Props = {
  customLabel?: string;
};

export const ViewDemo = ({ customLabel }: Props) => {
  const location = useLocation();
  const data = projectData.find(
    (project) =>
      project.caseStudyPath && project.caseStudyPath === location.pathname
  );

  return (
    <div className="border-[#c2baba] border-solid border text-t-secondary-light text-[17px] flex justify-between items-center rounded-lg p-4">
      <span>{customLabel ? customLabel : "Visit website"}</span>
      <Button
        type="button"
        imgSrc="/icons/arrow_topright.svg"
        altText="demo"
        showTooltip={false}
        goToExternalPage={data!.demoLink}
        className={{ other: "max-sm:w-full max-w-[46px] max-h-[44px]" }}
      ></Button>
    </div>
  );
};
