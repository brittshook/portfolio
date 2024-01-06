import { Page } from "../components/Page";

export const About = () => {
  return (
    <Page id="about" type="main" gapClass="gap-4">
      <div className="flex mb-3 md:max-lg:mb-0 max-810:flex-col">
        <div className="relative w-fit h-fit max-810:mx-auto max-810:mb-4">
          <img
            className="w-92 h-fit -translate-x-4.5 translate-y-1 max-810:w-74"
            src="images/britt_polaroid.png"
            alt="Polaroid of Britt Shook smiling"
          />
          <img
            className="absolute bottom-5 right-16 hover:rotate-12 transition-transform"
            src="images/sticker_ice_cream.svg"
            alt="ice cream sticker"
          />
          <img
            className="absolute -bottom-0.5 right-3 hover:-rotate-12 transition-transform"
            src="images/sticker_rainbow.svg"
            alt="rainbow sticker"
          />
        </div>
        <div className="w-2/3 h-fit bg-[#fafafa] border border-s-border border-solid py-5 px-6 rounded-sm max-810:w-full">
          <h1 className="text-base font-bold mb-2.5 max-sm:text-lg">
            I haven't always seen myself as a creative–
          </h1>
          <p className="text-base max-sm:text-lg">
            In another life, I studied the{" "}
            <a
              href="http://dx.doi.org/10.13140/RG.2.2.11264.20488"
              target="_blank"
            >
              mechanisms of HIV going dormant
            </a>
            , created training curricula for hygiene workers at the New
            Delhi-based{" "}
            <a href="https://washinstitute.org/" target="_blank">
              WASH Institute
            </a>
            , and lived many days in the UVA stacks archiving Boardwatch – a
            magazine for the Bulletin Board Systems of the 80s and 90s – to
            contribute to Dr. Kevin Driscoll's research{" "}
            <a
              href="https://yalebooks.yale.edu/book/9780300248142/modem-world/"
              target="_blank"
            >
              on an alternative origin story for the internet.
            </a>
          </p>
          <p className="text-base max-sm:text-lg">
            Along the way, I've developed a propensity for problem-solving, a
            keen ability to translate complex ideas to paper, and a love for
            technology.
          </p>
        </div>
      </div>
      <div className="w-full bg-[#fafafa] border border-s-border border-solid py-5 px-6 rounded-sm">
        <h2 className="text-base mb-2.5 font-bold max-sm:text-lg">
          My design ethos is...
        </h2>
        <p className="text-base max-sm:text-lg">
          <span className="italic">Authenticity</span>
          <br />
          In an age of AI masquerading as celebrities, digital experiences
          should be distinctly human
        </p>
        <p className="text-base max-sm:text-lg">
          <span className="italic">Playfulness</span>
          <br />
          The design process should be fun, loose, and driven by creativity
        </p>
        <p className="text-base max-sm:text-lg">
          <span className="italic">Accessibility</span>
          <br />
          Prioritizing inclusive and accessible design leads to better
          experiences for <span className="italic">all</span> users
        </p>
        <p className="text-base max-sm:text-lg">
          <span className="italic">Equity</span>
          <br />
          Design has the power to build community, affect social change, and
          foster a just and equitable world
        </p>
        <p className="text-base max-sm:text-lg">
          <span className="italic">Coherence</span>
          <br />
          Seamless, consistent design is not just aesthetically pleasing but
          also paramount for enhancing usability
        </p>
      </div>
      <div className="w-full bg-[#fafafa] border border-s-border border-solid py-5 px-6 rounded-sm">
        <h2 className="text-base mb-2.5 font-bold max-sm:text-lg ">
          I'm a T-shaped designer who...
        </h2>
        <p className="text-base max-sm:text-lg ">
          has a breadth of skills across <a>content design</a>,{" "}
          <a>product design</a>, and <a>web development</a>, with deep expertise
          in content strategy, information architecture, web accessibility, and
          design thinking.
        </p>
      </div>
      <div className="w-full bg-[#fafafa] border border-s-border border-solid py-5 px-6 rounded-sm">
        {" "}
        <h2 className="text-base mb-2.5 font-bold max-sm:text-lg">
          In my downtime, I...
        </h2>
        <p className="text-base max-sm:text-lg">
          am a vegan dessert connoisseur,{" "}
          <a
            href="https://open.spotify.com/user/brittanysshook"
            target="_blank"
          >
            indie rock playlist curator
          </a>
          , and collector of sunrise pics.
        </p>
      </div>
    </Page>
  );
};
