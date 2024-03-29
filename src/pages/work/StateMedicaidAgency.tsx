import { Callout } from "../../components/Callout";
import { EnlargeImage } from "../../components/EnlargeImage";
import { Page } from "../../components/Page";
import { SubNav } from "../../components/SubNav";

export const StateMedicaidAgency = () => {
  return (
    <Page
      id="state-medicaid-agency"
      type="case study"
      items={[
        ["Overview", "#overview"],
        ["Background", "#background"],
        ["Problem", "#problem"],
        ["Pre-Transition", "#pre-transition"],
        ["Post-Transition", "#post-transition"],
        ["Results", "#results"],
      ]}
      subNav={[
        [
          "Pre-Transition",
          <SubNav
            items={[
              ["Research", "#pre-research"],
              ["Roadmap", "#pre-roadmap"],
              ["Deliverables", "#pre-deliverables"],
            ]}
            color="var(--surface-brand-medicaid, #5C89FA)"
          />,
        ],
        [
          "Post-Transition",
          <SubNav
            items={[
              ["Prioritize", "#post-prioritize"],
              ["Research", "#post-research"],
              ["Deliverables", "#post-deliverables"],
            ]}
            color="var(--surface-brand-medicaid, #5C89FA)"
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
            A push to provide better patient care and enhanced user experiences
          </h3>
          <p className="custom mb-2">
            This work existed at the nexus of two large-scale transformation
            projects:
          </p>
          <ul>
            <li>
              Care management reforms to improve patient wellness & health
              outcomes, including additional support to providers
            </li>
            <li>
              State-wide IT modernization efforts to provide better user
              experiences across agency systems
            </li>
          </ul>
          <p>
            During this process, my work focused on the provider experience,
            with a particular emphasis on communicating changes to claims
            submissions and remittances (
            <span className="italic">getting paid</span>).
          </p>
          <hr className="h-0.5 bg-s-border mb-4.5" />
          <p>
            The state agency was decommissioning a legacy system – we'll call{" "}
            <span className="italic">System A</span> – for{" "}
            <span className="italic">most</span> uses, although healthcare
            providers that served fee-for-service members and would be paid by
            the state agency (rather than a health plan provider) would maintain
            access. Otherwise, healthcare providers would use the new system –{" "}
            <span className="italic">System B</span> – to submit claims which
            the state would validate and adjust, and then forward to the
            appropriate health insurance for that member's Medicaid health plan.
          </p>
          <p className="font-bold">
            During the transition between systems A and B, there would be a
            lapse in access to either system while data is migrated.
          </p>
          <EnlargeImage
            src="/images/state_medicaid_agency/system_diagram.webp"
            altText="System A will be decommissioned, and its data will be migrated to System B, resulting in a service disruption lasting for 2 weeks"
          />
        </div>
        <div>
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Provider experience involves nitty-gritty detail and technical
            knowledge
          </h3>
          <p>
            Coming into this project, I was already familiar with working with
            healthcare providers in other capacities – like developing content
            for providers for care improvement webinars on behalf of federal
            agencies.
          </p>
          <p>
            What I wasn't adept with was the technicalities of provider billing
            and claim payment – there were EDIs (
            <span className="italic">electronic data interchanges</span>), 835
            remittance advices (
            <span className="italic">
              electronic messages about claim payment
            </span>
            ), 278 transactions (
            <span className="italic">
              electronic requests for pre-authorization
            </span>
            ), and more.
          </p>
          <p>
            I also had to account for other stakeholders like data
            clearinghouses, health plans, and vendors who handle the dental and
            vision for Medicaid members.
          </p>
          <p>
            <span className="font-bold">
              Part of the challenge of this project was quickly getting up to
              speed on the technical aspects
            </span>{" "}
            in order to message both technical and non-technical users regarding
            the changes.
          </p>
        </div>
      </section>
      <section id="problem">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          Problem
        </h2>
        <div className="mb-14">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Offering clear pathways for users in a complex system
          </h3>
          <p>
            Providers and medical billers, especially in the wake of COVID-19,
            are time-pressed and expect streamlined processes to complete tasks.
            The system migration would cause delays and disrupt workflows.
          </p>
          <p className="font-bold custom mb-2">Experience Goals:</p>
          <ul className="list-disc">
            <li>
              Prioritize user needs over system-related details in our messaging
            </li>
            <li>
              Clearly inform users about any necessary actions they must take
              before the migration to ensure accurate data transfer
            </li>
            <li>
              Familiarize users with the modified workflows within the new
              system
            </li>
            <li>
              Use inclusive language and avoid complex terminology to ensure the
              solution is accessible to both technical and non-technical users
            </li>
          </ul>
          <p className="font-bold custom mb-2">Limitations:</p>
          <ul>
            <li>Use established design components</li>
            <li>Cannot differentiate content in system A based on user type</li>
            <li>Limited budget for research & testing</li>
            <li>
              Limited time – ongoing implementation of messaging strategy &
              go-live within 5 months
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Breaking down the problem: pre- and post-transition
          </h3>
          <p>Essentially, the messaging can be divided into two phases:</p>
          <ol className="list-decimal">
            <li className="mb-3">
              <p className="inline-block font-bold custom mb-2">
                Pre-transition and transition phases
              </p>
              <ul>
                <li>Messaging would occur on System A</li>
                <li>
                  Inform users of upcoming changes and alert them to any
                  necessary actions
                </li>
              </ul>
            </li>
            <li>
              <p className="inline-block font-bold custom mb-2">
                Post-transition phase
              </p>
              <ul>
                <li>Messaging would shift to System B</li>
                <li>Onboard users to the redesigned user experience</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
      <section id="pre-transition">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          Phase 1: Pre-transition
        </h2>
        <div className="mb-14" id="pre-research">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Speaking with SMEs to understand needs and assess impacts
          </h3>
          <p>
            Due to time and budget constraints, I didn't have access to end
            users, i.e. providers and medical billers. Instead, I relied on
            conversations with stakeholders and subject matter experts (SMEs) to
            draw out the information I needed in order to put myself in the
            user’s shoes.
          </p>
          <Callout
            className={{
              backgroundColor: "bg-s-secondary max-sm: bg-s-primary",
              other:
                "gap-3.5 h-fit min-h-110.5 md:max-lg:h-115 max-sm:p-0 lg:p-7.5 max-md:flex-col",
            }}
          >
            <div className="py-7.5 px-4.5 flex flex-col w-full max-w-81 sm:max-md:h-full rounded-sm bg-s-medicaid text-s-primary shadow">
              <h4 className="text-lg font-bold mb-2">Healthcare Providers</h4>
              <p className="text-sm">
                Casual users, although some providers may also act as billers
              </p>
              <ul className="list-none text-sm">
                <li className="mb-3 bg-check bg-no-repeat pl-9 pt-px">
                  <span className="font-bold">Goals</span>
                  <ul className="list-none mt-1.5">
                    <li>
                      Quick, high-level overview to prepare for impacts on their
                      practice
                    </li>
                  </ul>
                </li>
                <li className="mb-3 bg-close bg-no-repeat pl-9 pt-px">
                  <span className="font-bold">Pain Points</span>
                  <ul className="list-none mt-1.5">
                    <li>Non-technical, varying levels of tech-savviness</li>
                  </ul>
                </li>
                <li className="bg-clock bg-no-repeat pl-9 pt-px">
                  <span className="font-bold">System Use</span>
                  <ul className="list-none mt-1.5">
                    <li>Periodically to check-in</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="py-7.5 px-4.5 flex flex-col w-full max-w-81 max-md:h-full rounded-sm bg-s-medicaid text-s-primary shadow">
              <h4 className="text-lg font-bold mb-2">Medical Billers</h4>
              <p className="text-sm">
                Professional users, could be managing a single provider or
                entire provider groups
              </p>
              <ul className="list-none text-sm">
                <li className="mb-3 bg-check bg-no-repeat pl-9 pt-px">
                  <span className="font-bold">Goals</span>
                  <ul className="list-none mt-1.5">
                    <li>
                      Comprehensive understanding of impacts on their workflow
                    </li>
                  </ul>
                </li>
                <li className="mb-3 bg-close bg-no-repeat pl-9 pt-px">
                  <span className="font-bold">Pain Points</span>
                  <ul className="list-none mt-1.5">
                    <li>
                      Juggling many tasks & bear the brunt if anything goes
                      wrong
                    </li>
                  </ul>
                </li>
                <li className="bg-clock bg-no-repeat pl-9 pt-px">
                  <span className="font-bold">System Use</span>
                  <ul className="list-none mt-1.5">
                    <li>Regularly, it's part of their job</li>
                  </ul>
                </li>
              </ul>
            </div>
          </Callout>
        </div>
        <div className="mb-14" id="pre-roadmap">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Roadmapping to align messaging across platforms
          </h3>
          <p>
            This UX content was part of a larger messaging campaign that I
            organized across multiple channels. In addition to System A and B, I
            spearheaded content strategy for messaging shared through the state
            Medicaid agency and partner agency websites, newsletters, and our
            (then) Twitter account.
          </p>
          <p>
            With many moving pieces and deadlines shifting quickly, I developed
            a content roadmap to ensure consistency across platforms.
          </p>
          <EnlargeImage
            src="/images/state_medicaid_agency/content_roadmap_example.webp"
            altText="Content roadmap displaying tasks categorized under key objectives, along with information for channel, status, and schedule"
          />
        </div>
        <div id="pre-deliverables">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Deliverables
          </h3>
          <p>
            The two end users' goals felt a bit at odds – providers wanted quick
            & efficient, whereas medical billers needed precise & detailed.
          </p>
          <p>
            To balance these disparate interests, we implemented a two-fold
            solution: (a) short & simple banners and dialogs to highlight
            essential information for providers and (b) links to more detailed
            documentation to meet the needs of medical billers.
          </p>
          <p>
            For the sake of brevity, I will focus on the banners and dialogs.
          </p>
          <hr className="h-0.5 bg-s-border mb-4.5" />
          <div>
            <div className="mb-5">
              <h4 className="text-base max-sm:text-lg font-bold mb-4">
                Scenario 1: Migration not yet started / impacts on the horizon
              </h4>
              <EnlargeImage
                src="/images/state_medicaid_agency/before_public.webp"
                altText="Banner UI for System A's public portal notifying users to prepare for system impacts and transition to System B"
              />
              <EnlargeImage
                src="/images/state_medicaid_agency/before_internal.webp"
                altText="Modal UI for System A's internal portal notifying users to update their provider details ahead of transition"
              />
            </div>
            <hr className="h-0.5 bg-s-border mb-4.5" />
            <div className="mb-5">
              <h4 className="text-base max-sm:text-lg font-bold mb-4">
                Scenario 2: Migration in-progress with ongoing impacts
              </h4>
              <EnlargeImage
                src="/images/state_medicaid_agency/during_public.webp"
                altText="Banner UI for System A's public portal notifying users of ongoing system impacts during transition to System B"
              />
              <EnlargeImage
                src="/images/state_medicaid_agency/during_internal.webp"
                altText="Modal UI for System A's internal portal notifying users to enroll in the state's Single Sign-On (SSO)"
              />
            </div>
            <hr className="h-0.5 bg-s-border mb-4.5" />
            <div className="mb-5">
              <h4 className="text-base max-sm:text-lg font-bold mb-4">
                Scenario 3: Migration complete at go-live
              </h4>
              <p>
                Once the data was migrated and the transition complete, System A
                would sunset. The users that did need to maintain access would
                log in to the legacy portal through the new System B.
              </p>
              <EnlargeImage
                src="/images/state_medicaid_agency/go_live_public.webp"
                altText="Banner UI for System A's public portal notifying users that the system will depreciate soon"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="post-transition">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          Phase 2: Post-transition
        </h2>
        <div className="mb-14" id="post-prioritize">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            The onboarding solution should prioritize healthcare provider users
          </h3>
          <p>
            The System B vendor was planning to integrate a product tour and
            detailed documentation into the portal, but given the high volume of
            questions from healthcare providers about the transition, we decided
            to enhance our support by providing additional guidance and
            assistance for providers.
          </p>
          <p>
            We prioritized healthcare provider users, although administrators,
            billers, and helpdesk professionals may also utilize these
            resources.
          </p>
          <p className="font-bold custom mb-2">
            Our goals for these materials were to:
          </p>
          <ul>
            <li>
              Communicate a high-level overview of the steps required to
              complete common tasks
            </li>
            <li>
              Provide visual references to assist users in following along
            </li>
            <li>Create a solution that providers could easily revisit</li>
          </ul>
        </div>
        <div className="mb-14" id="post-research">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Once again, I spoke to SMEs to inform content needs
          </h3>
          <p>
            I spoke with product owners and other technical stakeholders to
            shape onboarding materials and get a better understanding of task
            flows. Alongside my team manager, we held stakeholder interviews
            with each workstream group (3-8 stakeholders per technical area).
          </p>
          <p>
            From there, I translated the technical content into user-friendly,
            visual journey maps for providers.
          </p>
        </div>
        <div id="post-deliverables">
          <h3 className="text-lg max-sm:text-xl font-bold mb-4">
            Deliverables
          </h3>
          <p>
            I created sets of visual journey maps for technical areas such as
            SSO, provider enrollment, and claims submission. Each set contained
            journey maps outlining common tasks, similar to the examples below:
          </p>
          <EnlargeImage
            src="/images/state_medicaid_agency/pre_registered_user.webp"
            altText="Illustrated steps for logging into System B using Single Sign-On (SSO) if you pre-enrolled"
          />
          <EnlargeImage
            src="/images/state_medicaid_agency/existing_user.webp"
            altText="Illustrated steps for logging into System B using Single Sign-On (SSO) if you are an existing Medicaid provider, but did not pre-enroll"
          />
          <EnlargeImage
            src="/images/state_medicaid_agency/new_user.webp"
            altText="Illustrated steps for logging into System B using Single Sign-On (SSO) if you are a new Medicaid provider and did not pre-enroll"
          />
        </div>
      </section>
      <section id="results">
        <h2 className="font-mono text-sm max-sm:text-base font-normal mb-2.5 text-t-secondary-light uppercase">
          Results
        </h2>
        <h3 className="text-lg max-sm:text-xl font-bold mb-4">
          Successes & Learnings
        </h3>
        <p>
          Since I rolled off this project before some of this work went live, I
          don't have concrete data to share. Nevertheless, I've received
          positive feedback from my colleagues regarding the successful
          transition to System B, and favorable reactions from providers about
          the journey maps.
        </p>
        <p>
          The project showed me the balancing act that is scrappy design – most
          projects are constrained by one resource or another, be it time,
          budget, people, or all three. This project, at many times, felt like a
          rush to the finish line. Remaining focused on user goals, being
          deliberate in project planning, and leaning on internal stakeholders
          were all key aspects of my contributions and helped me find calm in
          the chaos.
        </p>
      </section>
    </Page>
  );
};
