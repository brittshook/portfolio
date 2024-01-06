import { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

type Props = {
  toolImgSrcs: string[];
  toolNames: string[];
};

export const Tools = ({ toolImgSrcs, toolNames }: Props) => {
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

  const imgRefs = toolNames?.map(() => useRef(null));

  return (
    <section id="tools" className="inline-block w-1/2">
      <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
        Tools
      </h2>
      <div className="flex gap-2">
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
