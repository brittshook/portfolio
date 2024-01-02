import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

type Props = {
  isCaseStudy?: boolean;
  items?: [string, string][];
  subNav?: [string, ReactNode][];
};

export const NavBar = ({ isCaseStudy, items, subNav }: Props) => {
  const navItems = items || [
    ["Home", "/"],
    ["About", "/about"],
    ["Work", "/work"],
    ["Resume", "/resume"],
    ["Contact", "/contact"],
  ];
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => {
    if (!isCaseStudy) {
      navItems.forEach(([, path]) => {
        if (location.pathname === path) {
          setActiveItem(path);
        }
      });
    } else {
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

          maxCrossedId && setActiveItem("#" + maxCrossedId);
        },
        {
          root: null,
          rootMargin: "-50% 0px -25% 0px",
          threshold: 0,
        }
      );

      navItems.forEach(([, path]) => {
        const target = document.querySelector(path);
        if (target) {
          observer.observe(target);
        }
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [isCaseStudy, navItems, location.pathname]);

  return (
    <nav>
      {isCaseStudy && (
        <Button
          type="button"
          imgSrc="/icons/arrow_left.svg"
          altText="go back home"
          goToInternalPage="/"
          showTooltip
        >
          Go Home
        </Button>
      )}
      <ul>
        {navItems.map(([item, path]) => (
          <li
            className={`${activeItem === path ? "active " : ""}nav-link`}
            key={item}
          >
            {path.startsWith("/") ? (
              <Link to={path}>{item}</Link>
            ) : (
              <a href={path}>{item}</a>
            )}
            {activeItem === path &&
              subNav &&
              subNav
                .filter(([subNavItem]) => subNavItem === item)
                .map(([, subNavNode]) => subNavNode)}
          </li>
        ))}
      </ul>
    </nav>
  );
};
