import { useEffect, useRef } from "react";
import { Team } from "./Team";
import { Tools } from "./Tools";

interface Props {
  title: string;
  subtitle: string;
  imgSrc: string;
  altText: string;
  description: string;
  showTools?: boolean;
  toolImgSrcs?: string[];
  toolNames?: string[];
  showTeam?: boolean;
  teamNames?: string[];
  teamRoles?: string[];
  teamImgSrcs?: string[];
}

export const CaseIntro = ({
  title,
  subtitle,
  imgSrc,
  altText,
  description,
  showTools,
  toolImgSrcs,
  toolNames,
  showTeam,
  teamNames,
  teamRoles,
  teamImgSrcs,
}: Props) => {
  return (
    <section id="overview">
      <div className="case-headers">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="callout">
        <img src={imgSrc} alt={altText} title={altText} />
      </div>
      <p className="large-text">{description}</p>
      {(showTeam || showTools) && (
        <section className="details">
          {showTeam && teamImgSrcs && teamNames && (
            <Team
              teamImgSrcs={teamImgSrcs}
              teamNames={teamNames}
              teamRoles={teamRoles}
            />
          )}
          {showTools && toolImgSrcs && toolNames && (
            <Tools toolImgSrcs={toolImgSrcs} toolNames={toolNames} />
          )}
        </section>
      )}
    </section>
  );
};
