import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Page } from "../components/Page";
import { projectData } from "./work/ProjectData";

export const Home = () => {
  const [showHeader, setShowHeader] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setShowHeader(window.innerWidth >= 750);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredData = projectData.filter((data) => data.showOnHomepage);

  const cards = filteredData.map((project, index) => {
    return <Card key={index} data={project} />;
  });

  return (
    <Page id="home" type="main" gapClass="gap-12">
      <section className="flex flex-col">
        {showHeader && (
          <h1 className="text-xl font-bold mb-2.5 max-sm:text-2-xl">
            Britt Shook
          </h1>
        )}
        <p className="text-base max-sm:text-lg">
          Full-stack software engineer and compassionate problem-solver,
          currently working to advance environmental justice for Black South
          Carolinians @ OUR Strategies.
        </p>
        <p className="text-t-secondary-dark text-base max-sm:text-lg">
          Previously at Deloitte & Optum.
        </p>
      </section>
      {cards.map((card) => card)}
    </Page>
  );
};
