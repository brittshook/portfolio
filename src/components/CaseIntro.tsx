import { Team } from "./Team";
import { Tools } from "./Tools";

type Props = {
  title: string;
  subtitle: string;
  imgSrc: string;
  altText: string;
  description: string;
  additionalDescription?: string;
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
  additionalDescription,
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
        <img src={imgSrc} alt={altText} title={altText} className="cover" />
      </div>
      <div>
        <p className="large-text">{description}</p>
        {additionalDescription && (
          <p className="large-text secondary">{additionalDescription}</p>
        )}
      </div>

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
