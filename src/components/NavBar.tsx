import { ReactNode, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./Button";
import { Menu } from "./Menu";

type Props = {
  isCaseStudy?: boolean;
  items?: [string, string][];
  subNav?: [string, ReactNode][];
};

export const NavBar = ({ isCaseStudy, items, subNav }: Props) => {
  const [showMobile, setShowMobile] = useState(window.innerWidth < 750);
  const navItems = (!showMobile && items) || [
    ["Home", "/"],
    ["About", "/about"],
    ["Work", "/work"],
    ["Resume", "/pdf/Resume_Britt_Shook.pdf"],
    ["Contact", "/contact"],
  ];

  const [activeItem, setActiveItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setShowMobile(window.innerWidth < 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isCaseStudy || showMobile) {
      navItems.forEach(([, path]) => {
        if (
          location.pathname === path ||
          (path === "/work" && location.pathname.includes(path))
        ) {
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

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const menuButtonImg = menuVisible ? "/icons/close.svg" : "/icons/menu.svg";
  const menuButtonAlt = menuVisible ? "close" : "menu";
  const background = menuVisible
    ? "bg-s-primary"
    : "backdrop-blur-sm bg-gradient-tb-w";

  if (showMobile) {
    return (
      <>
        <nav
          className={`h-fit w-full ${background} fixed top-0 left-0 flex py-6 items-center justify-between z-20 sm:max-md:px-8 max-sm:px-5`}
        >
          {location.pathname === "/" ? (
            <h1 className="text-2-xl max-sm:text-3-xl font-bold">
              <Link
                className="text-t-primary hover:text-t-primary hover:no-underline"
                to="/"
              >
                Britt Shook
              </Link>
            </h1>
          ) : (
            <span className="text-2-xl max-sm:text-3-xl font-bold">
              <Link
                className="text-t-primary hover:text-t-primary hover:no-underline"
                to="/"
              >
                Britt Shook
              </Link>
            </span>
          )}
          <Button
            type="button"
            imgSrc={menuButtonImg}
            altText={menuButtonAlt}
            onClick={toggleMenu}
          />
        </nav>
        {menuVisible && (
          <Menu items={navItems} activeItem={activeItem} onClick={toggleMenu} />
        )}
      </>
    );
  }

  return (
    <nav className="h-fit flex flex-col sticky top-20 items-end lg:border-r lg:border-solid lg:border-s-border lg:py-5 lg:pr-8 lg:pl-0 min-w-33.5 max-lg:w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:z-20 md:max-lg:pt-8 md:max-lg:bg-none">
      {isCaseStudy && (
        <Button
          type="button"
          imgSrc="/icons/arrow_left.svg"
          altText="go back home"
          goToInternalPage="/"
          showTooltip
          className={{
            other: "mb-5 ml-auto w-11 md:max-lg:absolute md:max-lg:left-8",
          }}
        >
          Go Home
        </Button>
      )}
      <ul
        className={`text-anchor-base w-fit h-fit flex flex-col gap-5 list-none text-right ${
          isCaseStudy ? "md:max-lg:text-sm" : "md:max-lg:gap-9"
        } md:max-lg:flex-row md:max-lg:backdrop-blur-md md:max-lg:bg-transparent md:max-lg:rounded-lg md:max-lg:p-2.88 md:max-lg:mx-auto`}
      >
        {navItems.map(([item, path], index) => (
          <li key={item}>
            {path.startsWith("/") ? (
              path.startsWith("/pdf") ? (
                <a
                  className={`capitalize ${
                    activeItem === path
                      ? "text-t-primary hover:text-t-primary font-bold cursor-default"
                      : "text-t-secondary-light  hover:text-t-secondary-dark cursor-pointer"
                  } hover:no-underline`}
                  href={path}
                  target="_blank"
                >
                  {item}
                </a>
              ) : (
                <Link
                  className={`capitalize ${
                    activeItem === path
                      ? "text-t-primary hover:text-t-primary font-bold cursor-default"
                      : "text-t-secondary-light  hover:text-t-secondary-dark cursor-pointer"
                  } hover:no-underline`}
                  to={path}
                >
                  {item}
                </Link>
              )
            ) : (
              <a
                className={`${
                  isCaseStudy && index == 0 ? "md:max-lg:hidden " : ""
                }capitalize ${
                  activeItem === path
                    ? "text-t-primary hover:text-t-primary font-bold cursor-default"
                    : "text-t-secondary-light  hover:text-t-secondary-dark cursor-pointer"
                } hover:no-underline`}
                href={path}
              >
                {item}
              </a>
            )}
            {activeItem === path &&
              subNav &&
              subNav
                .filter(([subNavItem]) => subNavItem === item)
                .map(([, subNavNode], i) => <div key={i}>{subNavNode}</div>)}
          </li>
        ))}
      </ul>
    </nav>
  );
};
