import { NavBar } from "../components/NavBar";
import { Card } from "../components/Card";
import "./Home.css";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <Card
          showDemoButton={true}
          demoLink="test"
          showGithubButton={true}
          githubRepoLink="test"
          title="RESTful API for my hyper-local air quality data"
          description="Raspberry Pi, Python, Django, PostgreSQL"
          imageSrc="images/test.webp"
          altText="test"
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
        />
      </div>
    </main>
  );
};
