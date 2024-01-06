import { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

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
    let content = `<p class="font-bold text-base tooltip">${name}</p>`;

    if (role) {
      content += `<p class="italic text-base tooltip">${role}</p>`;
    }

    return content;
  };

  return (
    <section id="team" className="inline-block w-1/2">
      <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
        Team
      </h2>
      <div className="flex gap-2">
        {teamImgSrcs.map((imgSrc, index) => (
          <img
            className="w-10.5 h-10.5 rounded-full border border-solid border-s-border"
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
