import { NavBar } from "../components/NavBar";
import { Card } from "../components/Card";
import "./Home.css";
import { useEffect, useState } from "react";
import { projectData } from "./work/ProjectData";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <main id="home">
      <NavBar />
      <div className="page-content">
        <section className="intro">
          {showHeader && <h1>Britt Shook</h1>}
          <p>
            Full-stack software engineer and compassionate problem-solver,
            currently working to advance environmental justice for Black South
            Carolinians @ OUR Strategies.
          </p>
          <p>Previously at Deloitte & Optum.</p>
        </section>
        {cards.map((card) => card)}
      </div>
    </main>
  );
};
