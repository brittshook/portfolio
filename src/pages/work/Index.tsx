import { Card } from "../../components/Card";
import { Filter } from "../../components/Filter";
import { projectData } from "./ProjectData";
import { useState, useEffect } from "react";
import { Page } from "../../components/Page";

export const Work = () => {
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

    const cards = filteredData.map((project, index) => {
      return <Card key={index} data={project} />;
    });

    setDisplayCards(cards);
  };

  useEffect(() => {
    handleSelectCategory(null);
  }, []);

  return (
    <Page type="main" id="work" gapClass="gap-4">
      <h1 className="text-xl font-bold mb-2.5 max-sm:text-2-xl">
        Recent Projects
      </h1>
      <Filter
        filterCategories={["software engineering", "UX design"]}
        onSelectCategory={handleSelectCategory}
        className="mb-4"
      />
      <section className="flex flex-col gap-12">
        {displayCards.map((card) => card)}
      </section>
    </Page>
  );
};
