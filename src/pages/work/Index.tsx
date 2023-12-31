import { NavBar } from "../../components/NavBar";
import { Card } from "../../components/Card";
import { Filter } from "../../components/Filter";
import { WorkData } from "./WorkData";
import { useState, useEffect } from "react";

export const Work = () => {
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
    <main id="home">
      <NavBar type="main" />
      <div className="page-content">
        <h1>Recent Projects</h1>
        <Filter
          filterCategories={["software engineering", "UX design"]}
          onSelectCategory={handleSelectCategory}
        />
        <section className="project-cards">
          {displayCards.map((card) => card)}
        </section>
      </div>
    </main>
  );
};

{
  /* <Card
showDemoButton={true}
demoLink="test"
showGithubButton={true}
githubRepoLink="test"
title="RESTful API for my hyper-local air quality data"
description="Raspberry Pi, Python, Django, PostgreSQL"
imageSrc="images/test.webp"
altText="test"
categories={["software"]}
/>
<Card
showCaseStudyButton={true}
caseStudyPath="/work/mahalia-xiaoqi"
showGithubButton={true}
githubRepoLink="https://github.com/brittshook/mahalia"
title="Driving conversions in a bite-size tattoo portfolio with booking form"
description="HTML, CSS, JavaScript"
imageSrc="images/test.webp"
altText="test"
categories={["software", "design"]}
/>
<Card
showDemoButton={true}
demoLink="test"
showGithubButton={true}
githubRepoLink="https://github.com/brittshook/pride-pac"
title="Introducing Pride Pac: Queer-themed take on Pac-Man"
description="HTML, JavaScript"
imageSrc="images/test.webp"
altText="test"
categories={["software"]}
/>
<Card
showCaseStudyButton={true}
caseStudyPath="/work/state-medicaid-agency"
title="Leading content design for an enhanced provider experience"
description="State Medicaid Agency (@Deloitte Consulting)"
imageSrc="images/test.webp"
altText="test"
categories={["design"]}
/>
<Card
showCaseStudyButton={true}
caseStudyPath="/work/stravafit"
title="TBD"
description="TypeScript, React"
imageSrc="images/test.webp"
altText="test"
categories={["design", "software"]}
/> */
}
