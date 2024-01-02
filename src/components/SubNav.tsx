import { useEffect, useState } from "react";
import "./SubNav.css";

type Props = {
  items: [string, string][];
  color: string;
};

export const SubNav = ({ items, color }: Props) => {
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const vh = window.innerHeight;
        const viewportMiddle = vh / 2;

        let maxCrossedId = "";
        let maxCrossedTop = -1;
        let maxCrossedBottom = -1;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            const sectionTop = entry.boundingClientRect.top;
            const sectionBottom = entry.boundingClientRect.bottom;

            if (sectionTop < viewportMiddle && sectionTop > maxCrossedTop) {
              console.log(entry.target.id, "crossed mid");
              maxCrossedTop = sectionTop;
              maxCrossedId = entry.target.id;
            }

            if (
              sectionBottom > viewportMiddle &&
              sectionBottom > maxCrossedBottom
            ) {
              maxCrossedBottom = sectionBottom;
              maxCrossedId = entry.target.id;
            }
          }
        });

        maxCrossedId && setActiveSubItem("#" + maxCrossedId);
      },
      {
        root: null,
        rootMargin: "-50% 0px -25% 0px",
        threshold: 0,
      }
    );

    items.forEach(([, path]) => {
      const target = document.querySelector(path);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  return (
    <ul className="sub-nav" style={{ borderRightColor: color }}>
      {items.map(([item, path]) => (
        <li
          className={`${activeSubItem === path ? "active " : ""}nav-link`}
          key={item}
        >
          <a href={path}>{item}</a>
        </li>
      ))}
    </ul>
  );
};
