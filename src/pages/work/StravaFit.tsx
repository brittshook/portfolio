import { Definition } from "../../components/Definition";
import { EnlargeImage } from "../../components/EnlargeImage";
import { Insight } from "../../components/Insight";
import { Video } from "../../components/Video";
import { SubNav } from "../../components/SubNav";
import { Page } from "../../components/Page";
import { Callout } from "../../components/Callout";
import { ViewDemo } from "../../components/ViewDemo";

export const StravaFit = () => {
  return (
    <Page
      id="stravafit"
      type="case study"
      items={[
        ["Overview", "#overview"],
        ["Background", "#background"],
        ["Research", "#research"],
        ["Design", "#design"],
        ["User Test", "#user-test"],
        ["Development", "#development"],
      ]}
      subNav={[
        [
          "Design",
          <SubNav
            items={[
              ["Define", "#define"],
              ["Co-design", "#co-design"],
              ["Sort & Filter", "#sort-filter"],
              ["Library", "#library"],
              ["Empty States", "#empty-states"],
            ]}
            color="var(--surface-brand-strava, #E96127)"
          />,
        ],
      ]}
    >
      <section id="background">
        <div className="mb-14">
          <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
            Background
          </h2>
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            The dev-design workflow
          </h3>
          <p className="text-base max-sm:text-lg">
            I initially teamed up with my friend and newly minted engineer,
            George, to develop this feature before I started learning to code
            myself. Together, we joined to build this feature, with me leading
            the design and George handling the development. As the project
            progressed, I became more involved in the development process and
            focused on polishing the front-end."
          </p>
          <p className="text-base max-sm:text-lg">
            Throughout the design process, we held regular 30-minute check-ins,
            from reviewing research to doing Crazy 8s and conducting a
            feasibility check at the mid-fi stage.
          </p>
        </div>
        <div>
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Building a guided workout library
          </h3>
          <p className="text-base max-sm:text-lg">
            My initial round of research reveled that Strava was missing out on
            the market for the generalized guided workouts that their
            competitors provide.
          </p>
          <Definition
            emoji="❓"
            title="What are guided workouts?"
            text="Guided workouts allow users to follow along to complete exercises and are typically audio or video-based."
          />
        </div>
      </section>
      <section id="research">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          Research
        </h2>
        <div className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Comparing StravaFit to the competition
          </h3>
          <p className="text-base max-sm:text-lg">
            I conducted competitive audits of the leading guided workout apps.
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
          <EnlargeImage src="/images/stravafit/comp_audit.webp" altText="" />
        </div>
        <div>
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            I surveyed users and followed-up to identify expectations and
            understand user behaviors
          </h3>
          <p className="text-base max-sm:text-lg">
            I surveyed users from r/Strava on Reddit, as well as DesignLab
            peers, and received responses from 23 people. You can see my{" "}
            <a
              href="https://granite-toaster-c27.notion.site/Survey-Questionnaire-StravaFit-for-iOS-and-watchOS-5aaedb644b794f9ebf634c67649e32df"
              target="_blank"
            >
              survey question list
            </a>{" "}
            on Notion.
          </p>
          <p className="text-base max-sm:text-lg">
            I compiled the responses, as well as my findings from follow-up
            interviews, into an affinity map.
          </p>
          <div
            id="infograph"
            className="grid gap-2.5 grid-cols-2 grid-rows-3-200 max-570:grid-rows-4-180"
          >
            <Insight
              text="Users choose guided workouts because they simplify the workout planning process"
              insightType="Behavior"
              className="max-570:col-span-2"
            />
            <Insight
              text="Users should be able to sort & filter by activity, duration, and instructor"
              insightType="Behavior"
              className="max-570:col-span-2"
            />
            <Insight
              className="col-span-2"
              text="Users prefer to save workouts, but there is room for improvement with saved lists"
              htmlElement={
                <p className="text-base text-t-secondary-dark max-sm:hidden">
                  Some participants had trouble narrowing their saved lists to
                  find workouts
                </p>
              }
              insightType="Expectation"
            />
            <Insight
              className="col-span-2"
              text="Users prefer whiteboard-style videos over long-form"
              htmlElement={
                <p className="text-base text-t-secondary-dark max-sm:hidden">
                  This style allows users to preview the movement in a loop and
                  can be easier to view on small screens
                </p>
              }
              insightType="Expectation"
            />
          </div>
        </div>
      </section>
      <section id="design">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          Design
        </h2>
        <div className="mb-14" id="define">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Aligning goals using a Product Requirements Document (PRD)
          </h3>
          <p className="text-base max-sm:text-lg">
            To ensure George (developer) and I were on the same page, I created
            this PRD. I narrowed down the feature requirements for this web
            feature and specified what was out of scope, like plans and
            customizing music.
          </p>
          <p className="text-base max-sm:text-lg">
            I also designed a companion watchOS app due to the large number of
            smartwatch users in my research and the precedent of companion watch
            apps in the existing market,
          </p>
          <EnlargeImage src="/images/stravafit/prd.webp" altText="" />
        </div>
        <div className="mb-14" id="co-design">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Co-designing cards with end users at the lo-fi stage
          </h3>
          <p className="text-base max-sm:text-lg">
            When designing the workout cards for the content library, I created
            several lo-fi versions with different design and information
            architecture options and I lacked clarity on what information to
            include as a preview. To address this, I conducted an experiment of
            collaborative creativity and asked users to complete a card building
            worksheet to build their ideal design.
          </p>
          <EnlargeImage
            src="/images/stravafit/co_design.webp"
            altText=""
            showBorder
          />
        </div>
        <div className="mb-14" id="sort-filter">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Sorting and filtering so that users can find workouts efficiently
          </h3>
          <p className="text-base max-sm:text-lg">
            While developing the user and task flows, I considered whether users
            should find workouts via a search or sort & filter method - both
            were common design patterns in competitor apps. As you can see, I
            chose a sort & filter method, as my research showed common ties
            among what people look for in choosing a workout, such as duration,
            instructor, or type of workout. Additionally, sorting and filtering
            would be an easier lift from the dev perspective.
          </p>
          <Callout>
            <img src="/images/stravafit/sort_and_filter.webp" alt="" />
          </Callout>
        </div>
        <div className="mb-14" id="library">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Designing the nuances of a content library
          </h3>
          <p className="text-base max-sm:text-lg">
            This project was full of UX considerations like–
          </p>
          <Callout
            className={{
              other:
                "relative gap-12 570:max-md:gap-8 max-570:flex-col-reverse sm:max-570:gap-6",
            }}
          >
            <div className="absolute z-10 left-7 bottom-12 rounded-b-[39px] bg-[#ffdb7880] w-64 h-32 max-md:w-56 330:max-md:rounded-b-[33px] 330:max-570:left-1/2 330:max-570:-ml-28 max-330:rounded-none max-330:hidden"></div>
            <img
              className="w-64 h-fit object-contain max-md:w-56"
              src="/images/stravafit/load_more.webp"
              alt=""
            />
            {/* Fix Image*/}
            <div>
              <h4 className="text-lg max-sm:text-xl font-bold mb-4">
                Load more
              </h4>
              <p className="text-base max-sm:text-lg custom mb-0">
                Show 25 items on initial page load, then use load more
                functionality on scroll to improve UX on low-bandwidth devices
              </p>
            </div>
          </Callout>
          <Callout
            className={{
              other:
                "relative gap-12 570:max-md:gap-8 max-570:flex-col-reverse sm:max-570:gap-6",
            }}
          >
            <div className="absolute z-10 left-7 md:top-20 bg-[#ffdb7880] w-64 h-18 max-md:w-56 max-md:h-16 570:max-md:top-18 330:max-570:left-1/2 330:max-570:-ml-28 max-570:bottom-104 max-330:hidden"></div>
            <img
              className="w-64 h-fit object-contain max-md:w-56"
              src="/images/stravafit/multi_sort.webp"
              alt=""
            />
            <div>
              <h4 className="text-lg max-sm:text-xl font-bold mb-4">
                Allow multi-sort
              </h4>
              <p className="text-base max-sm:text-lg custom mb-0">
                Users can sort by multiple activities, based on established
                Strava design patterns
              </p>
            </div>
          </Callout>
          <Callout
            className={{
              other:
                "relative gap-12 570:max-md:gap-8 max-570:flex-col-reverse sm:max-570:gap-6",
            }}
          >
            <div className="absolute z-10 left-7 md:top-20 bg-[#ffdb7880] w-64 h-18 max-md:w-56 max-md:h-16 570:max-md:top-18 330:max-570:left-1/2 330:max-570:-ml-28 max-570:bottom-104 max-330:hidden"></div>
            <Video
              src="/videos/stravafit/load_top.mp4"
              type="video/mp4"
              autoPlay={true}
              muted={true}
              loop={true}
              setDelay={1000}
              className="w-64 h-fit object-contain max-md:w-56"
            />
            <div>
              <h4 className="text-lg max-sm:text-xl font-bold mb-4">
                Load content at top
              </h4>
              <p className="text-base max-sm:text-lg custom mb-0">
                After sorting by an activity, load new content at top of the
                page to increase the visibility of changes
              </p>
            </div>
          </Callout>
        </div>
        <div id="empty-states">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Designing for empty states
          </h3>
          <p className="text-base max-sm:text-lg">
            I had two types of empty states in this project: an empty library
            and no valid results returned.
          </p>
          <Callout
            className={{
              other:
                "gap-12 570:max-md:gap-8 max-570:flex-col-reverse sm:max-570:gap-6",
            }}
          >
            <img
              className="w-64 h-fit object-contain sm:max-md:w-56"
              src="/images/stravafit/empty_library.webp"
              alt=""
            />
            <div>
              <h4 className="text-lg max-sm:text-xl font-bold mb-4">
                Empty library
              </h4>
              <p className="text-base max-sm:text-lg custom mb-0">
                This is the initial state of the saved library when a user
                hasn’t saved any workouts. This empty state encourages the user
                to find workouts, so that they might find something they want to
                save.
              </p>
            </div>
          </Callout>
          <Callout
            className={{
              other:
                "gap-12 570:max-md:gap-8 max-570:flex-col-reverse sm:max-570:gap-6",
            }}
          >
            <img
              className="w-64 h-fit object-contain sm:max-md:w-56"
              src="/images/stravafit/no_valid_results.webp"
              alt=""
            />
            <div>
              <h4 className="text-lg max-sm:text-xl font-bold mb-4">
                No valid results
              </h4>
              <p className="text-base max-sm:text-lg custom mb-0">
                This empty state can appear in either the main content library
                or the saved library. This can only occur after filtering the
                library, when there are no workouts with the filter criteria.
              </p>
            </div>
          </Callout>
        </div>
      </section>
      <section id="user-test">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          User Test
        </h2>
        <div className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Conducting unmoderated tests to save time and gather data-rich
            insights
          </h3>
          <p className="text-base max-sm:text-lg">
            Before this project, I designed a native app version of this feature
            wherein I conducted moderated tests. As a result, I felt confident
            in its basic flows and felt comfortable conducting unmoderated tests
            this time around. I recruited from r/Strava and DesignLab’s discord
            and in the end had 12 participants complete Maze tests.
          </p>
        </div>
        <div className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            The user experience was comparable between content library and saved
            library tasks
          </h3>
          <p className="text-base max-sm:text-lg">
            There was no significant difference in task completion between
            tasks.
          </p>
          <Definition
            emoji="✅"
            title="Hypothesis accepted"
            text="There will be no significant difference in the level of task completion between 'Select a Guided Workout via Content Library' and 'Select a Guided Workout via Saved Library' tasks."
          />
        </div>
        <div>
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Reworking a dropdown menu to address user priorities within
            technical constraints
          </h3>
          <p className="text-base max-sm:text-lg">
            I found that the order of filters in the filter modal was causing
            confusion among users. In particular, users tended to view
            instructors as the lowest priority, yet it was listed first.
          </p>
          <p className="text-base max-sm:text-lg">
            To address this, I rearranged the order of filters and placed
            instructors at the bottom. Additionally, to avoid any potential
            scrolling issues for touch screen users, I made UI changes and
            utilized the system default dropdown for touch screen devices
            instead of the custom UI.
          </p>
          <Callout
            className={{
              other:
                "gap-12 570:max-md:gap-8 max-570:flex-col-reverse sm:max-570:gap-6",
            }}
          >
            <div>
              <Video
                src="/videos/stravafit/filter_before.mp4"
                type="video/mp4"
                autoPlay={true}
                muted={true}
                loop={true}
                className="w-64 h-fit object-contain sm:max-md:w-56 max-h-[475px]"
              />
              <figcaption className="text-center text-sm max-sm:text-base text-t-secondary-light">
                Before
              </figcaption>
            </div>
            <div>
              <Video
                src="/videos/stravafit/filter_after.mp4"
                type="video/mp4"
                autoPlay={true}
                muted={true}
                loop={true}
                className="w-64 h-fit object-contain sm:max-md:w-56 max-h-[475px]"
              />
              <figcaption className="text-center text-sm max-sm:text-base text-t-secondary-light">
                After
              </figcaption>
            </div>
          </Callout>
        </div>
      </section>
      <section id="development">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          Development
        </h2>
        <div className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Building StravaFit
          </h3>
          <p>
            George served as the primary developer and did an incredible job in
            bringing this project to life, using React and Locofy.ai. Currently,
            I am working on a tweaking a few of the React components to fine
            tune the UI.
          </p>
          <p>Hear George's perspective of this project in his LinkedIn post:</p>
          <iframe
            className="w-full h-85 border-s-border border-solid border rounded-lg"
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7152897479456247809"
            title="Embedded post"
          ></iframe>
        </div>
        <ViewDemo />
      </section>
    </Page>
  );
};
