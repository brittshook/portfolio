import { CaseIntro } from "../../components/CaseIntro";
import { NavBar } from "../../components/NavBar";

export const PridePac = () => {
  return (
    <main id="pride-pac">
      <NavBar
        type="sub"
        items={[
          ["Overview", "#overview"],
          ["Background", "#background"],
          ["Design", "#design"],
          ["Development", "#development"],
          ["Next Steps", "#next-steps"],
        ]}
      />
      <div className="page-content">
        <CaseIntro
          title="Title"
          subtitle="Pride Pac"
          imgSrc="/images/test.webp"
          altText="test"
          description="Text here"
          showTools={true}
          toolNames={["HTML", "JavaScript"]}
          toolImgSrcs={["tbd", "tbd"]}
        />
        <section className="case-study">
          <section id="background"></section>
          <section id="design"></section>
          <section id="development"></section>
          <section id="next-steps"></section>
        </section>
      </div>
    </main>
  );
};
