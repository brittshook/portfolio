import { useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { CaseIntro } from "../../components/CaseIntro";
import { Definition } from "../../components/Definition";
import { EnlargeImage } from "../../components/EnlargeImage";

export const StravaFit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="stravafit" className="case-study">
      <NavBar
        type="sub"
        items={[
          ["Overview", "#overview"],
          ["Research", "#research"],
          ["Define", "#define"],
          ["Design", "#design"],
          ["Test", "#test"],
          ["Development", "#development"],
          ["Takeaways", "#takeaways"],
        ]}
      />
      <div className="page-content">
        <CaseIntro
          title="Designing a cohesive experience across platforms"
          subtitle="StravaFit"
          imgSrc="/images/stravafit/cover.webp"
          altText=""
          description="I designed end-to-end iOS and watchOS apps adding guided workouts into the Strava suite, and paired with a full-stack engineer to bring this feature to the Strava web platform."
          additionalDescription="This is a student project completed as a part of Designlab's UX Academy. Please note that this is a concept feature & app created for Strava as a personal project."
          showTeam={true}
          teamImgSrcs={[
            "/images/stravafit/britt.webp",
            "/images/stravafit/george.webp",
          ]}
          teamNames={["Britt", "George"]}
          teamRoles={["Designer & Front-End Developer", "Front-End Developer"]}
          showTools={true}
          toolNames={["Figma", "React", "TypeScript"]}
          toolImgSrcs={[
            "/icons/figma.svg",
            "/icons/react.svg",
            "/icons/typescript.svg",
          ]}
        />
        <section className="case-study-text">
          <section id="background">
            <h2 className="eyebrow">Background</h2>
            <h3>Pivoting from fitness recovery to guided workouts</h3>
            <p>
              I was initially interested in how well (or not well) people
              recover from their workouts, and after a round of research, my
              findings suggested that people may benefit from guided recovery
              workouts… except that already exists in the Strava suite with the
              recent acquisition of Recovery Athletics. This, however,
              highlighted the fact that Strava was missing out on the market for
              the generalized guided workouts that their competitors provide.
            </p>
            <Definition
              emoji="❓"
              title="What are guided workouts?"
              text="Guided workouts allow users to follow along to complete exercises and are typically audio or video-based."
            />
            <p>
              Closing out this first chapter, I was left with limited
              information on how users were integrating guided workouts into
              their fitness routines or what features were important to them,
              and had only a hypothesis that a watch companion app may be
              needed.
            </p>
          </section>
          <section id="research">
            <h2 className="eyebrow">Research</h2>
            <div>
              <h3>Building proto-personas with my existing research</h3>
              <p>
                While investigating athletic recovery, I conducted a week-long
                diary study with 4 participants, as well as 30-minute interviews
                with 5 participants, all of whom exercised regularly. Coming
                back to this research, I built these two proto-personas:
              </p>
              <EnlargeImage src="" altText="" />
            </div>
            <div>
              <h3>Sizing up the competition</h3>
              <p>
                Going into this competitive audit, I wanted to learn about the
                particular features and design patterns that distinguished each
                app that topped this market.
              </p>
              <p>
                You can see the full{" "}
                <a
                  href="https://granite-toaster-c27.notion.site/655b98d36b52461c8be4d5d85e3e7b62?v=8195e64dd3114ddcad5f7d9d04e37d27"
                  target="_blank"
                >
                  feature list audit
                </a>{" "}
                on Notion, as well as an{" "}
                <a
                  href="https://granite-toaster-c27.notion.site/e532e82dc3b2480f87f375dad536bba1?v=5d45c208e650474abd1e296daa21d336"
                  target="_blank"
                >
                  overview audit
                </a>{" "}
                of these companies from the previous round of research.
              </p>
              <div className="callout">
                <img src="" alt="" />
              </div>
            </div>
            <div>
              <h3>
                I surveyed users and followed-up to identify expectations and
                understand user behaviors
              </h3>
              <p>
                I surveyed users from r/Strava on Reddit, as well as DesignLab
                peers, and received responses from 23 people. You can see my
                <a
                  href="https://granite-toaster-c27.notion.site/Survey-Questionnaire-StravaFit-for-iOS-and-watchOS-5aaedb644b794f9ebf634c67649e32df"
                  target="_blank"
                >
                  survey question list
                </a>{" "}
                on Notion.
              </p>
              <p>
                I compiled the responses, as well as my findings from follow-up
                interviews, into an affinity map.
              </p>
              <div></div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};
