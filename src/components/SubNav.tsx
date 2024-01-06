import { useEffect, useState } from "react";

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
    <ul
      className="md:max-lg:hidden mt-1.5 pt-1.5 pr-2.5 border-r border-solid list-none text-xs"
      style={{ borderRightColor: color }}
    >
      {items.map(([item, path], index) => (
        <li className="pb-1.5" key={item}>
          <a
            className={`capitalize ${
              activeSubItem === path
                ? "text-t-primary font-medium hover:text-t-primary"
                : "text-t-secondary-light  hover:text-t-secondary-dark"
            } hover:no-underline`}
            href={path}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
