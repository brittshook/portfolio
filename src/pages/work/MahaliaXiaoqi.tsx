import { useEffect } from "react";
import { CaseIntro } from "../../components/CaseIntro";
import { NavBar } from "../../components/NavBar";
import { SpeechBubble } from "../../components/SpeechBubble";
import { EnlargeImage } from "../../components/EnlargeImage";
import "./MahaliaXiaoqi.css";
import { SubNav } from "../../components/SubNav";

export const MahaliaXiaoqi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="mahalia-xiaoqi" className="case-study">
      <NavBar
        isCaseStudy={true}
        items={[
          ["Overview", "#overview"],
          ["Background", "#background"],
          ["Research", "#research"],
          ["Design", "#design"],
          ["User Test", "#user-test"],
          ["Development", "#development"],
          ["Next Steps", "#next-steps"],
        ]}
        subNav={[
          [
            "Design",
            <SubNav
              items={[
                ["Info Architecture", "#info-arch"],
                ["Crazy 8s", "#crazy8"],
                ["Form Modals", "#modals"],
                ["Error States", "#error-states"],
              ]}
              color="var(--surface-brand-mahalia, #D8D339)"
            />,
          ],
        ]}
      />
      <div className="page-content">
        <CaseIntro customSubtitle="Mahalia Xiaoqi" />
        <section className="case-study-text">
          <section id="background">
            <h2 className="eyebrow">Background</h2>
            <div>
              <h3>No clear way to book consultations with Mahalia</h3>
              <p>
                Mahalia is an oil and mixed medium artist venturing into the
                world of tattooing. Her previous online presence focused on her
                work in the fine arts and there was no immediate way to book
                tattoo consultations. She offered tattoo design commissions and
                relied on word-of-mouth referrals for clients.
              </p>
              <p>
                With this website, she sought to establish a professional
                presence in tattooing and draw new clientele for tattoo
                bookings.
              </p>
            </div>
            <div>
              <h3>Resource constraints led to a one-page design</h3>
              <p>
                Because Mahalia just started out in tattooing, her budget was
                limited. To address these resource constraints, I offered up an
                alternative to the traditional site – a one-page portfolio,
                which could be created using Framer’s $5 mini-site plan. Since
                then, I have utilized some of my new web dev skills to hand-code
                the site for Mahalia.
              </p>
            </div>
          </section>
          <section id="research">
            <h2 className="eyebrow">Research</h2>
            <div>
              <h3>
                I used affinity mapping to review insights from 7 user
                interviews
              </h3>
              <p>
                I spoke with 7 folks that recently booked a tattoo consultation
                or planned to in the near future. I set out to identify factors
                that influence a user’s decision to book a tattoo consultation,
                user needs throughout the tattooing process, and what creates a
                user-friendly booking system. To learn more about this research,
                check out my{" "}
                <a
                  href="https://granite-toaster-c27.notion.site/Research-Plan-8bf1848c562b4bc68fd58c90ba032e68"
                  target="_blank"
                >
                  research plan
                </a>{" "}
                on Notion.
              </p>
              <EnlargeImage
                src="/images/mahalia_xiaoqi/affinity_map.webp"
                altText="Affinity map summarizing grouped user insights and themes from 7 user interviews"
              />
            </div>
            <div>
              <h3>
                There's a lack of consistency for booking consultations across
                the industry
              </h3>
              <div className="speech-bubbles">
                <SpeechBubble
                  color="var(--surface-brand-mahalia, #D8D339)"
                  orientation="left"
                >
                  It's confusing that all booking procedures are so different
                  among the industry.
                </SpeechBubble>
                <SpeechBubble
                  color="var(--surface-brand-mahalia, #D8D339)"
                  orientation="right"
                >
                  Some artists are like… send me a DM, some say no DMs - send me
                  an email, some have a form!
                </SpeechBubble>
                <SpeechBubble
                  color="var(--surface-brand-mahalia, #D8D339)"
                  orientation="left"
                >
                  The process has changed since the pandemic. [Before,] the
                  consultation was always a separate appointment. Since the
                  pandemic… the consultation is usually over email or phone call
                  or just within the tattoo appointment.
                </SpeechBubble>
              </div>
            </div>
            <div>
              <h3>
                … but users prefer to use online booking systems when available
              </h3>
              <SpeechBubble
                color="var(--surface-brand-mahalia, #D8D339)"
                orientation="left"
              >
                As a customer, with a form… I'm{" "}
                <span className="bold">
                  confident we're speaking the same language
                </span>{" "}
                because I'm giving [the artist] the information they want.
              </SpeechBubble>
            </div>
            <div>
              <h3>
                When searching for particular artists, users look for aligned
                tattoo styles and values
              </h3>
              <p>
                Some of the most important factors for users when selecting a
                tattoo artist were tattooing style, experience, and values.
              </p>
            </div>
          </section>
          <section id="design">
            <h2 className="eyebrow">Design</h2>
            <div id="info-arch">
              <h3>
                Incentivizing action for fresh-skinned newbies and tattoo
                veterans
              </h3>
              <p>
                Pulling from user research, I identified content types to
                address user needs, such as a selected work gallery showcasing
                tattoo style and an 'About' section highlighting Mahalia's
                values.
              </p>
              <p>
                When structuring the information architecture, I made a
                deliberate effort to align content with the needs of newcomers,
                who may need more information before committing to a tattoo
                consultation, as well as tattoo veterans and returning
                customers, who want to be able to quickly book a consultation.
              </p>
              <p>
                Furthermore, when thinking through booking form flow, I{" "}
                <span>
                  arranged form pages in terms of commitment level to prevent
                  early exits.
                </span>
                Basic tattoo information, like whether the tattoo will have
                color and the body placement, comes before more involved steps,
                like submitting reference images and a description of the tattoo
                idea.
              </p>
              <EnlargeImage
                src="/images/mahalia_xiaoqi/info_architecture.webp"
                altText="Information architecture diagram for the homepage and form modal's content"
              />
            </div>
            <div id="crazy8">
              <h3>Using Crazy 8s to quickly ideate on page elements</h3>
              <p>
                Given the shortened nature of a one-page portfolio, my sketches
                were more granular - focused mainly on the individual page
                content, like the selected work or FAQ section.
              </p>
              <EnlargeImage
                src="/images/mahalia_xiaoqi/crazy8s.webp"
                altText="Crazy 8s sketch sheets featuring eight quick design concepts for Selected Work and FAQ page elements"
              />
            </div>
            <div id="modals">
              <h3>
                Making a one-page portfolio feel like a traditional site with
                clever modals
              </h3>
              <p>
                Using modals, the booking system could be handled in a
                single-page site.
              </p>
              <p>
                Additionally, research showed that users prefer to schedule the
                consultation appointment date directly within the form. However,
                due to stakeholder constraints, this feature was not
                incorporated. As a tattoo artist, Mahalia may decline certain
                consultations if the tattoo concepts do not align with her
                specific style or skill set.
              </p>
              <EnlargeImage
                src="/images/mahalia_xiaoqi/modal_sketches.webp"
                altText="Wireframe sketches of three form page modals"
              />
              <EnlargeImage
                src="/images/mahalia_xiaoqi/form_start.webp"
                altText="Getting started form page, shown on desktop and mobile devices"
              />
              <EnlargeImage
                src="/images/mahalia_xiaoqi/form_page_1.webp"
                altText="Form page for customer contact information, shown on desktop and mobile devices"
              />
              <EnlargeImage
                src="/images/mahalia_xiaoqi/form_page_2.webp"
                altText="Form page for basic tattoo details, shown on desktop and mobile devices"
              />
            </div>
            <div id="error-states">
              <h3>Designing intuitive success and error states</h3>
              <p>
                Sometimes <span className="italic">component states</span> speak
                1,000 words…
              </p>
              <p>
                I incorporated input validation after each field is completed,
                giving real-time feedback to users. I coupled this with an
                auto-disabled 'Next' CTA until all fields are filled
                successfully, to further communicate the form's completion
                status to users.
              </p>
              <div className="callout">
                <img
                  id="text-field-component"
                  src="/images/mahalia_xiaoqi/text_field_UI.webp"
                  alt="Component states (default, selected, success, error, error selected, disabled) for a single-line text field"
                />
              </div>
              <p>
                To sort out error messages, I laid out a spreadsheet with each
                form field and the various error types that could be
                encountered.{" "}
                <span className="bold">
                  With each error state, I aimed for consistency utilizing
                  similar sentence structure and attribute variables whenever
                  possible.
                </span>
              </p>
              <p>
                For example, each empty state error message follows this
                structure: Please [noun] your [field name / 'option'].
              </p>
              <EnlargeImage
                src="/images/mahalia_xiaoqi/error_messages.webp"
                altText="Error message planning document in Google Sheets"
              />
            </div>
          </section>
          <section id="user-test">
            <h2 className="eyebrow">User Test</h2>
            <div>
              <h3>
                I tested across breakpoints to ensure a consistent user
                experience
              </h3>
              <p>
                Using unmoderated Maze tests, I was able to assess a number of
                research goals, such as my primary goal of comparing user
                experience among breakpoints (e.g., desktop and mobile). Other
                testing goals included assessing task completion, ease of
                navigation within the site, and user expectations of the card
                destinations.
              </p>
              <p>
                Due to the limitations of asynchronous testing, I received more
                responses for the mobile test than desktop. Ideally, I would
                have wanted an equal number of users for each. To ensure fair
                comparisons, I compared the first 6 mobile tests to the 6
                desktop tests.
              </p>
              <p>
                While my findings are summarized below, you can see the full
                list of findings in my{" "}
                <a
                  href="https://granite-toaster-c27.notion.site/Usability-Testing-Report-9254d3d1959148d2adae9ef2802ba1ea"
                  target="_blank"
                >
                  usability test report
                </a>
              </p>
              .
            </div>
            <div>
              <h4>
                💡 Insight #1: User expectations of cards were completely
                unaligned for mobile users
              </h4>
              <p className="italic">
                Users were shown the tattoo card, below, and asked what they
                expected would happen upon clicking the card
              </p>
              <p>
                While 100% of desktop users had accurate expectations of the
                card's destination due to context in the hover state, mobile
                users had no context and 0% accurate expectations.
              </p>
              <p>
                To resolve this, I added visual cues as to the card’s
                destination on mobile.
              </p>
              <div className="callout">
                <div>
                  <img
                    id="card-before"
                    src="/images/mahalia_xiaoqi/card_before.webp"
                    alt=""
                  />
                  <figcaption>Before</figcaption>
                </div>
                <div>
                  <img
                    id="card-after"
                    src="/images/mahalia_xiaoqi/card_after.webp"
                    alt=""
                  />
                  <figcaption>After</figcaption>
                </div>
              </div>
            </div>
            <div>
              <h4>
                💡 Insight #2: There was higher task completion among desktop
                users (100%) than mobile users (83%)
              </h4>
            </div>
            <div>
              <h4>
                💡 Insight #3: There was no significant difference in the ease
                of use or preference for visual design between devices
              </h4>
              <ul>
                <li>Users generally rated the tasks as easy to complete</li>
                <li>Users generally rated the site as visually appealing</li>
              </ul>
            </div>
          </section>
          <section id="development">
            <h2 className="eyebrow">Development</h2>
          </section>
          <section id="next-steps">
            <h2 className="eyebrow">Next Steps</h2>
            <h3>Adjusting the tattoo card's destination</h3>
            <p>
              In another phase of this project, it would be wonderful to dive
              further into the tattoo cards – the ones that mobile users faced
              issues with in usability testing.
            </p>
            <p>
              Currently, these cards link to Instagram posts of the tattoo.
              However, it would be great to drive further conversions and keep
              users on the website by hosting related images and information
              within the portfolio. This could be achieved with additional modal
              windows or new pages, if Mahalia opts for a traditional site in
              the future.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
};
