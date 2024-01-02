import { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "./Team.css";

type Props = {
  teamImgSrcs: string[];
  teamNames: string[];
  teamRoles?: string[];
};

export const Team = ({ teamImgSrcs, teamNames, teamRoles }: Props) => {
  useEffect(() => {
    teamNames.forEach((name, index) => {
      const currentImgRef = imgRefs[index];

      if (currentImgRef.current) {
        tippy(currentImgRef.current, {
          content: generateTooltipContent(
            name,
            teamRoles ? teamRoles[index] : null
          ),
          allowHTML: true,
        });
      }
    });
  }, [teamNames, teamRoles]);

  const imgRefs = teamNames?.map(() => useRef(null));

  const generateTooltipContent = (name: string, role: string | null) => {
    let content = `<p class="bold tooltip">${name}</p>`;

    if (role) {
      content += `<p class="italic tooltip">${role}</p>`;
    }

    return content;
  };

  return (
    <section id="team">
      <h2 className="eyebrow">Team</h2>
      <div id="members">
        {teamImgSrcs.map((imgSrc, index) => (
          <img
            key={index}
            ref={imgRefs ? imgRefs[index] : null}
            src={imgSrc}
            alt={teamNames ? teamNames[index] : ""}
          />
        ))}
      </div>
    </section>
  );
};
