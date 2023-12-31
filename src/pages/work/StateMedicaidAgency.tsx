import { CaseIntro } from "../../components/CaseIntro";
import { NavBar } from "../../components/NavBar";

export const StateMedicaidAgency = () => {
  return (
    <main id="mahalia">
      <NavBar
        type="sub"
        items={[
          ["Overview", "#overview"],
          ["Background", "#background"],
          ["Problem", "#problem"],
          ["Pre-Transition", "#pre-transition"],
          ["Post-Transition", "#post-transition"],
          ["Results", "#results"],
        ]}
      />
      <div className="page-content">
        <CaseIntro
          title="Leading content design for an enhanced provider experience"
          subtitle="State Medicaid Agency"
          imgSrc="/images/test.webp"
          altText="test"
          description="I led a messaging strategy and developed UX content to communicate provider experience changes in an overhaul of a state Medicaid agency's health plans and its digital systems. For confidentiality, I have omited and replaced sensitive information, including the agency's name. Visuals are not finalized deliverables but rather recreations in Figma and other tools. They are not 1:1 representations, and none of the examples include real data."
        />
        <section className="case-study">
          <section id="background">
            <h2 className="eyebrow">Background</h2>
            <div>
              <h3>
                A push to provide better patient care and enhanced user
                experiences
              </h3>
              <p>
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
              <hr />
              <p>
                The state agency was decommissioning a legacy system – we'll
                call <span className="italic">System A</span> – for{" "}
                <span className="italic">most</span> uses, although healthcare
                providers that served fee-for-service members and would be paid
                by the state agency (rather than a health plan provider) would
                maintain access. Otherwise, healthcare providers would use the
                new system – <span className="italic">System B</span> – to
                submit claims which the state would validate and adjust, and
                then forward to the appropriate health insurance for that
                member's Medicaid health plan.
              </p>
              <p className="semi-bold">
                During the transition between systems A and B, there would be a
                lapse in access to either system while data is migrated.
              </p>
              <img />
            </div>
            <div>
              <h3>
                Provider experience involves nitty-gritty detail and technical
                knowledge
              </h3>
              <p>
                Coming into this project, I was already familiar with working
                with healthcare providers in other capacities – like developing
                content for providers for care improvement webinars on behalf of
                federal agencies.
              </p>
              <p>
                What I wasn't adept with was the technicalities of provider
                billing and claim payment – there were EDIs (
                <span className="italic">electronic data interchanges</span>),
                835 remittance advices (
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
                clearinghouses, health plans, and vendors who handle the dental
                and vision for Medicaid members.
              </p>
              <p>
                <span className="semi-bold">
                  Part of the challenge of this project was quickly getting up
                  to speed on the technical aspects
                </span>
                in order to message both technical and non-technical users
                regarding the changes.
              </p>
            </div>
          </section>
          <section id="problem">
            <h2 className="eyebrow">Problem</h2>
            <div>
              <h3>Offering clear pathways for users in a complex system</h3>
              <p>
                Providers and medical billers, especially in the wake of
                COVID-19, are time-pressed and expect streamlined processes to
                complete tasks. The system migration would cause delays and
                disrupt workflows.
              </p>
              <p className="semi-bold">Experience Goals:</p>
              <ul>
                <li>
                  Prioritize user needs over system-related details in our
                  messaging
                </li>
                <li>
                  Clearly inform users about any necessary actions they must
                  take before the migration to ensure accurate data transfer
                </li>
                <li>
                  Familiarize users with the modified workflows within the new
                  system
                </li>
                <li>
                  Use inclusive language and avoid complex terminology to ensure
                  the solution is accessible to both technical and non-technical
                  users
                </li>
              </ul>
              <p className="semi-bold">Limitations:</p>
              <ul>
                <li>Use established design components</li>
                <li>
                  Cannot differentiate content in system A based on user type
                </li>
                <li>Limited budget for research & testing</li>
                <li>
                  Limited time – ongoing implementation of messaging strategy &
                  go-live within 5 months
                </li>
              </ul>
            </div>
            <div>
              <h3>Breaking down the problem: pre- and post-transition</h3>
              <p>Essentially, the messaging can be divided into two phases:</p>
              <ol>
                <li>
                  <span className="semi-bold">
                    Pre-transition and transition phases
                  </span>
                  <ul>
                    <li>Messaging would occur on System A</li>
                    <li>
                      Inform users of upcoming changes and alert them to any
                      necessary actions
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <span className="semi-bold">Post-transition phase</span>
                    <li>Messaging would shift to System B</li>
                    <li>Onboard users to the redesigned user experience</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>
          <section id="pre-transition">
            <h2 className="eyebrow">Phase 1: Pre-transition</h2>
            <div>
              <h3>Speaking with SMEs to understand needs and assess impacts</h3>
              <p>
                Due to time and budget constraints, I didn't have access to end
                users, i.e. providers and medical billers. Instead, I relied on
                conversations with stakeholders and subject matter experts
                (SMEs) to draw out the information I needed in order to put
                myself in the user’s shoes.
              </p>
              <div className="callout">
                <div className="persona">
                  <h4>Healthcare Providers</h4>
                  <p>
                    Casual users, although some providers may also act as
                    billers
                  </p>
                  <ul>
                    <li>
                      <span className="semi-bold">Goals</span>
                      <li>
                        Quick, high-level overview to prepare for impacts on
                        their practice
                      </li>
                    </li>
                    <li>
                      <span className="semi-bold">Pain Points</span>
                      <li>Non-technical, varying levels of tech-savviness</li>
                    </li>
                    <li>
                      <span className="semi-bold">System Use</span>
                      <li>Periodically to check-in</li>
                    </li>
                  </ul>
                </div>
                <div className="persona">
                  <h4>Medical Billers</h4>
                  <p>
                    Professional users, could be managing a single provider or
                    entire provider groups
                  </p>
                  <ul>
                    <li>
                      <span className="semi-bold">Goals</span>
                      <li>
                        Comprehensive understanding of impacts on their workflow
                      </li>
                    </li>
                    <li>
                      <span className="semi-bold">Pain Points</span>
                      <li>
                        Juggling many tasks & bear the brunt if anything goes
                        wrong
                      </li>
                    </li>
                    <li>
                      <span className="semi-bold">System Use</span>
                      <li>Regularly, it's part of their job</li>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3>Roadmapping to align messaging across platforms</h3>
              <p>
                This UX content was part of a larger messaging campaign that I
                organized across multiple channels. In addition to System A and
                B, I spearheaded content strategy for messaging shared through
                the state Medicaid agency and partner agency websites,
                newsletters, and our (then) Twitter account.
              </p>
              <p>
                With many moving pieces and deadlines shifting quickly, I
                developed a content roadmap to ensure consistency across
                platforms.
              </p>
              <img />
            </div>
            <div>
              <h3>Deliverables</h3>
              <p>
                The two end users' goals felt a bit at odds – providers wanted
                quick & efficient, whereas medical billers needed precise &
                detailed.
              </p>
              <p>
                To balance these disparate interests, we implemented a two-fold
                solution: (a) short & simple banners and dialogs to highlight
                essential information for providers and (b) links to more
                detailed documentation to meet the needs of medical billers.
              </p>
              <p>
                For the sake of brevity, I will focus on the banners and
                dialogs.
              </p>
              <hr />
              <div>
                <h4>
                  Scenario 1: Migration not yet started / impacts on the horizon
                </h4>
                <img />
                <img />
              </div>
              <hr />
              <div>
                <h4>Scenario 2: Migration in-progress with ongoing impacts</h4>
                <img />
                <img />
              </div>
              <hr />
              <div>
                <h4>Scenario 3: Migration complete at go-live</h4>
                <p>
                  Once the data was migrated and the transition complete, System
                  A would sunset. The users that did need to maintain access
                  would log in to the legacy portal through the new System B.
                </p>
                <img />
              </div>
            </div>
          </section>
          <section id="post-transition">
            <h2 className="eyebrow">Phase 2: Post-transition</h2>
            <div>
              <h3>
                The onboarding solution should prioritize healthcare provider
                users
              </h3>
              <p>
                The System B vendor was planning to integrate a product tour and
                detailed documentation into the portal, but given the high
                volume of questions from healthcare providers about the
                transition, we decided to enhance our support by providing
                additional guidance and assistance for providers.
              </p>
              <p>
                We prioritized healthcare provider users, although
                administrators, billers, and helpdesk professionals may also
                utilize these resources.
              </p>
              <p className="semi-bold">
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
            <div>
              <h3>Once again, I spoke to SMEs to inform content needs</h3>
              <p>
                I spoke with product owners and other technical stakeholders to
                shape onboarding materials and get a better understanding of
                task flows. Alongside my team manager, we held stakeholder
                interviews with each workstream group (3-8 stakeholders per
                technical area).
              </p>
              <p>
                From there, I translated the technical content into
                user-friendly, visual journey maps for providers.
              </p>
            </div>
            <div>
              <h3>Deliverables</h3>
              <p>
                I created sets of visual journey maps for technical areas such
                as SSO, provider enrollment, and claims submission. Each set
                contained journey maps outlining common tasks, similar to the
                examples below:
              </p>
              <img />
              <img />
              <img />
            </div>
          </section>
          <section id="results">
            <h2 className="eyebrow">Results</h2>
            <h3>Successes & Learnings</h3>
            <p>
              Since I rolled off this project before some of this work went
              live, I don't have concrete data to share. Nevertheless, I've
              received positive feedback from my colleagues regarding the
              successful transition to System B, and favorable reactions from
              providers about the journey maps.
            </p>
            <p>
              The project showed me the balancing act that is scrappy design –
              most projects are constrained by one resource or another, be it
              time, budget, people, or all three. This project, at many times,
              felt like a rush to the finish line. Remaining focused on user
              goals, being deliberate in project planning, and leaning on
              internal stakeholders were all key aspects of my contributions and
              helped me find calm in the chaos.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
};
