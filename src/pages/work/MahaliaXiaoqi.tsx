import { useEffect } from "react";
import { CaseIntro } from "../../components/CaseIntro";
import { NavBar } from "../../components/NavBar";

export const MahaliaXiaoqi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="mahalia">
      <NavBar
        type="sub"
        items={[
          ["Overview", "#overview"],
          ["Background", "#background"],
          ["Research", "#research"],
          ["Design", "#design"],
          ["Test", "#test"],
          ["Development", "#development"],
          ["Next Steps", "#next-steps"],
        ]}
      />
      <div className="page-content">
        <CaseIntro
          title="Driving conversions in a bite-size tattoo portfolio"
          subtitle="Mahalia Xiaoqi"
          imgSrc="/images/test.webp"
          altText="test"
          description="I led the end-to-end design and development of a bite-sized tattoo portfolio, including content & product design, to draw clientele for a budding artist."
          showTools={true}
          toolNames={["HTML", "CSS", "JavaScript"]}
          toolImgSrcs={["tbd", "tbd", "tbd"]}
        />
        <section className="case-study">
          <section id="background"></section>
          <section id="research"></section>
          <section id="design"></section>
          <section id="test"></section>
          <section id="development"></section>
          <section id="next-steps"></section>
        </section>
      </div>
    </main>
  );
};
