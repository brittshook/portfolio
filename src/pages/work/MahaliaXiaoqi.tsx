import { SpeechBubble } from "../../components/SpeechBubble";
import { EnlargeImage } from "../../components/EnlargeImage";
import { SubNav } from "../../components/SubNav";
import { Page } from "../../components/Page";
import { Callout } from "../../components/Callout";
import { ViewDemo } from "../../components/ViewDemo";

export const MahaliaXiaoqi = () => {
  return (
    <Page
      id="mahalia-xiaoqi"
      type="case study"
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
              ["Info Architect", "#info-arch"],
              ["Crazy 8s", "#crazy8"],
              ["Form Modals", "#modals"],
              ["Error States", "#error-states"],
            ]}
            color="var(--surface-brand-mahalia, #D8D339)"
          />,
        ],
      ]}
    >
      <section id="background">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          Background
        </h2>
        <div className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            No clear way to book consultations with Mahalia
          </h3>
          <p className="text-base max-sm:text-lg">
            Mahalia is an oil and mixed medium artist venturing into the world
            of tattooing. Her previous online presence focused on her work in
            the fine arts and there was no immediate way to book tattoo
            consultations. She offered tattoo design commissions and relied on
            word-of-mouth referrals for clients.
          </p>
          <p className="text-base max-sm:text-lg">
            With this website, she sought to establish a professional presence
            in tattooing and draw new clientele for tattoo bookings.
          </p>
        </div>
        <div>
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Resource constraints led to a one-page design
          </h3>
          <p className="text-base max-sm:text-lg">
            Because Mahalia just started out in tattooing, her budget was
            limited. To address these resource constraints, I offered up an
            alternative to the traditional site – a one-page portfolio, which
            could be created using Framer’s $5 mini-site plan. Since then, I
            have utilized some of my new web dev skills to hand-code the site
            for Mahalia.
          </p>
        </div>
      </section>
      <section id="research">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          Research
        </h2>
        <div className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            I used affinity mapping to review insights from 7 user interviews
          </h3>
          <p className="text-base max-sm:text-lg">
            I spoke with 7 folks that recently booked a tattoo consultation or
            planned to in the near future. I set out to identify factors that
            influence a user’s decision to book a tattoo consultation, user
            needs throughout the tattooing process, and what creates a
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
            showBorder
          />
        </div>
        <div className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            There's a lack of consistency for booking consultations across the
            industry
          </h3>
          <div className="speech-bubbles">
            <SpeechBubble className="bg-s-mahalia mb-6" orientation="left">
              It's confusing that all booking procedures are so different among
              the industry.
            </SpeechBubble>
            <SpeechBubble className="bg-s-mahalia mb-6" orientation="right">
              Some artists are like… send me a DM, some say no DMs - send me an
              email, some have a form!
            </SpeechBubble>
            <SpeechBubble className="bg-s-mahalia" orientation="left">
              The process has changed since the pandemic. [Before,] the
              consultation was always a separate appointment. Since the
              pandemic… the consultation is usually over email or phone call or
              just within the tattoo appointment.
            </SpeechBubble>
          </div>
        </div>
        <div className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            … but users prefer to use online booking systems when available
          </h3>
          <SpeechBubble className="bg-s-mahalia" orientation="left">
            As a customer, with a form… I'm{" "}
            <span className="font-bold">
              confident we're speaking the same language
            </span>{" "}
            because I'm giving [the artist] the information they want.
          </SpeechBubble>
        </div>
        <div>
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            When searching for particular artists, users look for aligned tattoo
            styles and values
          </h3>
          <p className="text-base max-sm:text-lg">
            Some of the most important factors for users when selecting a tattoo
            artist were tattooing style, experience, and values.
          </p>
        </div>
      </section>
      <section id="design">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          Design
        </h2>
        <div id="info-arch" className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Incentivizing action for fresh-skinned newbies and tattoo veterans
          </h3>
          <p className="text-base max-sm:text-lg">
            Pulling from user research, I identified content types to address
            user needs, such as a selected work gallery showcasing tattoo style
            and an 'About' section highlighting Mahalia's values.
          </p>
          <p className="text-base max-sm:text-lg">
            When structuring the information architecture, I made a deliberate
            effort to align content with the needs of newcomers, who may need
            more information before committing to a tattoo consultation, as well
            as tattoo veterans and returning customers, who want to be able to
            quickly book a consultation.
          </p>
          <p className="text-base max-sm:text-lg">
            Furthermore, when thinking through booking form flow, I{" "}
            <span>
              arranged form pages in terms of commitment level to prevent early
              exits.
            </span>
            Basic tattoo information, like whether the tattoo will have color
            and the body placement, comes before more involved steps, like
            submitting reference images and a description of the tattoo idea.
          </p>
          <EnlargeImage
            src="/images/mahalia_xiaoqi/info_architecture.webp"
            altText="Information architecture diagram for the homepage and form modal's content"
            showBorder
          />
        </div>
        <div id="crazy8" className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Using Crazy 8s to quickly ideate on page elements
          </h3>
          <p className="text-base max-sm:text-lg">
            Given the shortened nature of a one-page portfolio, my sketches were
            more granular - focused mainly on the individual page content, like
            the selected work or FAQ section.
          </p>
          <EnlargeImage
            src="/images/mahalia_xiaoqi/crazy8s.webp"
            altText="Crazy 8s sketch sheets featuring eight quick design concepts for Selected Work and FAQ page elements"
            showBorder
          />
        </div>
        <div id="modals" className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Making a one-page portfolio feel like a traditional site with clever
            modals
          </h3>
          <p className="text-base max-sm:text-lg">
            Using modals, the booking system could be handled in a single-page
            site.
          </p>
          <p className="text-base max-sm:text-lg">
            Additionally, research showed that users prefer to schedule the
            consultation appointment date directly within the form. However, due
            to stakeholder constraints, this feature was not incorporated. As a
            tattoo artist, Mahalia may decline certain consultations if the
            tattoo concepts do not align with her specific style or skill set.
          </p>
          <EnlargeImage
            src="/images/mahalia_xiaoqi/modal_sketches.webp"
            altText="Wireframe sketches of three form page modals"
            showBorder
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
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Designing intuitive success and error states
          </h3>
          <p className="text-base max-sm:text-lg">
            Sometimes <span className="italic">component states</span> speak
            1,000 words…
          </p>
          <p className="text-base max-sm:text-lg">
            I incorporated input validation after each field is completed,
            giving real-time feedback to users. I coupled this with an
            auto-disabled 'Next' CTA until all fields are filled successfully,
            to further communicate the form's completion status to users.
          </p>
          <Callout>
            <img
              className="h-96 object-contain"
              src="/images/mahalia_xiaoqi/text_field_UI.webp"
              alt="Component states (default, selected, success, error, error selected, disabled) for a single-line text field"
            />
          </Callout>
          <p className="text-base max-sm:text-lg">
            To sort out error messages, I laid out a spreadsheet with each form
            field and the various error types that could be encountered.{" "}
            <span className="font-bold">
              With each error state, I aimed for consistency utilizing similar
              sentence structure and attribute variables whenever possible.
            </span>
          </p>
          <p className="text-base max-sm:text-lg">
            For example, each empty state error message follows this structure:
            Please [noun] your [field name / 'option'].
          </p>
          <EnlargeImage
            src="/images/mahalia_xiaoqi/error_messages.webp"
            altText="Error message planning document in Google Sheets"
          />
        </div>
      </section>
      <section id="user-test">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          User Test
        </h2>
        <div className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            I tested across breakpoints to ensure a consistent user experience
          </h3>
          <p className="text-base max-sm:text-lg">
            Using unmoderated Maze tests, I was able to assess a number of
            research goals, such as my primary goal of comparing user experience
            among breakpoints (e.g., desktop and mobile). Other testing goals
            included assessing task completion, ease of navigation within the
            site, and user expectations of the card destinations.
          </p>
          <p className="text-base max-sm:text-lg">
            Due to the limitations of asynchronous testing, I received more
            responses for the mobile test than desktop. Ideally, I would have
            wanted an equal number of users for each. To ensure fair
            comparisons, I compared the first 6 mobile tests to the 6 desktop
            tests.
          </p>
          <p className="text-base max-sm:text-lg">
            While my findings are summarized below, you can see the full list of
            findings in my{" "}
            <a
              href="https://granite-toaster-c27.notion.site/Usability-Testing-Report-9254d3d1959148d2adae9ef2802ba1ea"
              target="_blank"
            >
              usability test report
            </a>
          </p>
          .
        </div>
        <div className="mb-14">
          <h4 className="text-base font-bold max-sm:text-lg mb-4">
            💡 Insight #1: User expectations of cards were completely unaligned
            for mobile users
          </h4>
          <p className="text-base max-sm:text-lg italic">
            Users were shown the tattoo card, below, and asked what they
            expected would happen upon clicking the card
          </p>
          <p className="text-base max-sm:text-lg">
            While 100% of desktop users had accurate expectations of the card's
            destination due to context in the hover state, mobile users had no
            context and 0% accurate expectations.
          </p>
          <p className="text-base max-sm:text-lg">
            To resolve this, I added visual cues as to the card’s destination on
            mobile.
          </p>
          <Callout className={{ other: "gap-8 max-sm:flex-col" }}>
            <div>
              <img
                className="mb-2.5 h-80 object-contain"
                src="/images/mahalia_xiaoqi/card_before.webp"
                alt=""
              />
              <figcaption className="text-center text-sm max-sm:text-base text-t-secondary-light">
                Before
              </figcaption>
            </div>
            <div>
              <img
                className="mb-2.5 h-80 object-contain"
                src="/images/mahalia_xiaoqi/card_after.webp"
                alt=""
              />
              <figcaption className="text-center text-sm max-sm:text-base text-t-secondary-light">
                After
              </figcaption>
            </div>
          </Callout>
        </div>
        <div className="mb-14">
          <h4 className="text-base font-bold max-sm:text-lg mb-4">
            💡 Insight #2: There was higher task completion among desktop users
            (100%) than mobile users (83%)
          </h4>
        </div>
        <div>
          <h4 className="text-base font-bold max-sm:text-lg mb-4">
            💡 Insight #3: There was no significant difference in the ease of
            use or preference for visual design between devices
          </h4>
          <ul className="text-base max-sm:text-lg">
            <li>Users generally rated the tasks as easy to complete</li>
            <li>Users generally rated the site as visually appealing</li>
          </ul>
        </div>
      </section>
      <section id="development">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          Development
        </h2>
        <h3 className="text-lg max-sm:text-xl font-bold mb-4">
          My first entrance to web development
        </h3>
        <p>
          This website was my first web development project with JavaScript,
          aside from writing small programs. Most of my progress came during my
          self-learning journey before joining Per Scholas, and it is this
          project that first got me comfortable with manipulating the DOM and
          writing custom validations. As it was written in Vanilla JavaScript,
          making the form robust took hours upon hours of effort, but in turn
          honed my JS skills significant in ways I can appreciate looking back.
        </p>
        <ViewDemo />
      </section>
      <section id="next-steps">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          Next Steps
        </h2>
        <h3 className="text-lg max-sm:text-xl font-bold mb-4">
          Adjusting the tattoo card's destination
        </h3>
        <p className="text-base max-sm:text-lg">
          In another phase of this project, it would be wonderful to dive
          further into the tattoo cards – the ones that mobile users faced
          issues with in usability testing.
        </p>
        <p className="text-base max-sm:text-lg">
          Currently, these cards link to Instagram posts of the tattoo. However,
          it would be great to drive further conversions and keep users on the
          website by hosting related images and information within the
          portfolio. This could be achieved with additional modal windows or new
          pages, if Mahalia opts for a traditional site in the future.
        </p>
      </section>
    </Page>
  );
};
