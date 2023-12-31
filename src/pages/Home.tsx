import { NavBar } from "../components/NavBar";
import { Card } from "../components/Card";
import "./Home.css";
import { useEffect, useState } from "react";
import { WorkData } from "./work/WorkData";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredData = WorkData.filter((data) => data.showOnHomepage);

  const cards = filteredData.map((data, index) => {
    return (
      <Card
        key={index}
        showCaseStudyButton={data.showCaseStudyButton || false}
        caseStudyPath={data.caseStudyPath || ""}
        showDemoButton={data.showDemoButton || false}
        demoLink={data.demoLink || ""}
        showGithubButton={data.showGithubButton || false}
        githubRepoLink={data.githubRepoLink || ""}
        title={data.title}
        description={data.description}
        imageSrc={data.imgSrc}
        altText={data.altText}
      />
    );
  });

  return (
    <main id="home">
      <NavBar type="main" />
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
