import { NavBar } from "../components/NavBar";
import "./About.css";

export const About = () => {
  return (
    <main id="about">
      <NavBar type="main" onSelectItem={() => {}} />
      <div className="page-content">
        <div className="intro">
          <div className="img-container">
            <img
              id="polaroid"
              src="images/britt_polaroid.png"
              alt="Polaroid of Britt Shook smiling"
            />
            <img
              className="sticker"
              id="ice-cream"
              src="images/sticker_ice_cream.svg"
              alt="ice cream sticker"
            />
            <img
              className="sticker"
              id="rainbow"
              src="images/sticker_rainbow.svg"
              alt="rainbow sticker"
            />
          </div>
          <div className="textbox">
            <h1 className="small-header">
              I haven't always seen myself as a creative–
            </h1>
            <p>
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
            <p>
              Along the way, I've developed a propensity for problem-solving, a
              keen ability to translate complex ideas to paper, and a love for
              technology.
            </p>
          </div>
        </div>
        <div className="textbox">
          <h2 className="small-header">My design ethos is...</h2>
          <p>
            <span className="italic">Authenticity</span>
            <br />
            In an age of AI masquerading as celebrities, digital experiences
            should be distinctly human
          </p>
          <p>
            <span className="italic">Playfulness</span>
            <br />
            The design process should be fun, loose, and driven by creativity
          </p>
          <p>
            <span className="italic">Accessibility</span>
            <br />
            Prioritizing inclusive and accessible design leads to better
            experiences for <span className="italic">all</span> users
          </p>
          <p>
            <span className="italic">Equity</span>
            <br />
            Design has the power to build community, affect social change, and
            foster a just and equitable world
          </p>
          <p>
            <span className="italic">Coherence</span>
            <br />
            Seamless, consistent design is not just aesthetically pleasing but
            also paramount for enhancing usability
          </p>
        </div>
        <div className="textbox">
          <h2 className="small-header">I'm a T-shaped designer who…</h2>
          <p>
            has a breadth of skills across <a>content design</a>,{" "}
            <a>product design</a>, and <a>web development</a>, with deep
            expertise in content strategy, information architecture, web
            accessibility, and design thinking.
          </p>
        </div>
        <div className="textbox">
          {" "}
          <h2 className="small-header">In my downtime, I...</h2>
          <p>
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
      </div>
    </main>
  );
};
