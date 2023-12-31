import { NavBar } from "../../components/NavBar";
import { Card } from "../../components/Card";
import { Filter } from "../../components/Filter";
import { WorkData } from "./WorkData";
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
      filteredData = WorkData.filter((data) =>
        data.categories.includes(category)
      );
    } else {
      filteredData = WorkData;
    }

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
          categories={data.categories}
        />
      );
    });

    setDisplayCards(cards);
  };

  useEffect(() => {
    handleSelectCategory(null);
  }, []);

  return (
    <main id="work">
      <NavBar type="main" />
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
