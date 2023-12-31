import { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

interface Props {
  toolImgSrcs: string[];
  toolNames: string[];
}

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
    <section className="tools">
      {toolImgSrcs.map((imgSrc, index) => (
        <img
          key={index}
          ref={imgRefs ? imgRefs[index] : null}
          src={imgSrc}
          alt={toolNames ? toolNames[index] : ""}
        />
      ))}
    </section>
  );
};
