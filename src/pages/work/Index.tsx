import { NavBar } from "../../components/NavBar";
import { Card } from "../../components/Card";
import { Filter } from "../../components/Filter";
import { projectData } from "./ProjectData";
import { useState, useEffect } from "react";
import "./Index.css";

export const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [displayCards, setDisplayCards] = useState<React.ReactNode[]>([]);

  const handleSelectCategory = (category: string | null) => {
    let filteredData;

    if (category) {
      filteredData = projectData.filter((project) =>
        project.categories.includes(category)
      );
    } else {
      filteredData = projectData;
    }

    const cards = filteredData.map((project) => {
      return <Card data={project} />;
    });

    setDisplayCards(cards);
  };

  useEffect(() => {
    handleSelectCategory(null);
  }, []);

  return (
    <main id="work">
      <NavBar />
      <div className="page-content">
        <h1>Recent Projects</h1>
        <Filter
          filterCategories={["software engineering", "UX design"]}
          onSelectCategory={handleSelectCategory}
        />
        <section id="project-cards">{displayCards.map((card) => card)}</section>
      </div>
    </main>
  );
};
