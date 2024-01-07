import { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

type Props = {
  toolNames: string[];
  customHeading?: string;
  gapClass?: string;
};

export const Tools = ({ toolNames, customHeading, gapClass }: Props) => {
  useEffect(() => {
    toolNames.forEach((name, index) => {
      const currentImgRef = imgRefs[index];

      if (currentImgRef.current) {
        tippy(currentImgRef.current, {
          content: name,
        });
      }
    });
  }, [toolNames]);

  const toolImgSrcs = toolNames.map(
    (tool) => `/icons/tool/${tool.toLowerCase().replace(/\s/g, "_")}.webp`
  );
  const imgRefs = toolImgSrcs.map(() => useRef(null));
  const gap = gapClass || "gap-2";

  return (
    <section className="inline-block w-1/2">
      <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
        {customHeading ? customHeading : "Tools"}
      </h2>
      <div className={`flex ${gap}`}>
        {toolImgSrcs.map((imgSrc, index) => (
          <img
            className="w-8.5 h-8.5"
            key={index}
            ref={imgRefs ? imgRefs[index] : null}
            src={imgSrc}
            alt={toolNames ? toolNames[index] : ""}
          />
        ))}
      </div>
    </section>
  );
};
