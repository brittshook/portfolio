import { NavBar } from "../components/NavBar";
import { Card } from "../components/Card";
import "./Home.css";
import { useEffect } from "react";
import { projectData } from "./work/ProjectData";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredData = projectData.filter((data) => data.showOnHomepage);

  const cards = filteredData.map((project) => {
    return <Card data={project} />;
  });

  return (
    <main id="home">
      <NavBar />
      <div className="page-content">
        <section className="intro">
          <h1>Britt Shook</h1>
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
