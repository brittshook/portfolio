import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

type Props = {
  type: "main" | "sub";
  items?: [string, string][];
};

export const NavBar = ({ type, items }: Props) => {
  const navItems = items || [
    ["Home", "/"],
    ["About", "/about"],
    ["Work", "/work"],
    ["Resume", "/resume"],
    ["Contact", "/contact"],
  ];
  const [active, setActive] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    if (type === "main") {
      navItems.forEach(([_, path]) => {
        if (location.pathname === path) {
          setActive(path);
        }
      });
    } else if (type === "sub") {
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

          maxCrossedId && setActive("#" + maxCrossedId);
        },
        {
          root: null,
          rootMargin: "-50% 0px -25% 0px",
          threshold: 0,
        }
      );

      navItems.forEach(([_, path]) => {
        const target = document.querySelector(path);
        if (target) {
          observer.observe(target);
        }
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [type, navItems, location.pathname]);

  return (
    <nav>
      {type === "sub" && (
        <Button
          type="button"
          imgSrc="/icons/arrow_left.svg"
          altText="go back home"
          goToInternalPage="/"
        />
      )}
      <ul>
        {navItems.map(([item, path]) => (
          <li
            className={`nav-link ${active === path && "active"}`}
            key={item}
          >
            {path.startsWith("/") ? (
              <Link to={path}>{item}</Link>
            ) : (
              <a href={path}>{item}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
