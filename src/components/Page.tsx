import { ReactNode, useEffect } from "react";
import { NavBar } from "./NavBar";
import { CaseIntro } from "./CaseIntro";

type Props = {
  type: "main" | "case study" | "404";
  id?: string;
  items?: [string, string][];
  subNav?: [string, ReactNode][];
  gapClass?: string;
  customSubtitle?: string;
  children: ReactNode;
};
export const Page = ({
  type,
  id,
  items,
  subNav,
  gapClass,
  customSubtitle,
  children,
}: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gap = gapClass || "gap-28";

  return (
    <main
      id={id}
      className={`flex max-lg:flex-col justify-center gap-18 ${
        type == "case study" ? " case-study" : ""
      }`}
    >
      {type != "404" && (
        <NavBar
          isCaseStudy={type == "case study"}
          items={items}
          subNav={subNav}
        />
      )}
      <div
        id="page-content"
        className={`flex flex-col w-full max-w-2.5xl mt-4 max-lg:mx-auto ${gap}`}
      >
        {type != "case study" && children}
        {type == "case study" && (
          <>
            <CaseIntro customSubtitle={customSubtitle} />
            <section id="case-study-text" className="flex flex-col gap-24">
              {children}
            </section>
          </>
        )}
      </div>
    </main>
  );
};
