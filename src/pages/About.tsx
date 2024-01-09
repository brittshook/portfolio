import { Page } from "../components/Page";
import { Tools } from "../components/Tools";

export const About = () => {
  return (
    <Page id="about" type="main" gapClass="gap-4">
      <div className="flex mb-3 md:max-lg:mb-0 max-810:flex-col">
        <div className="relative w-fit h-fit max-810:mx-auto max-810:mb-4">
          <img
            className="w-92 h-fit -translate-x-4.5 translate-y-1 max-810:w-74 max-810:h-81.5 object-contain"
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
            I haven't always been a software engineer...
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
            keen ability to translate complex ideas to their parts, and a love
            for technology.
          </p>
        </div>
      </div>
      <div className="w-full bg-[#fafafa] border border-s-border border-solid py-5 px-6 rounded-sm">
        <h2 className="text-base mb-2.5 font-bold max-sm:text-lg">
          My toolkit includes...
        </h2>
        <div className="flex flex-col gap-6">
          <Tools
            customHeading="Languages"
            toolNames={["HTML", "CSS", "JavaScript", "TypeScript", "Python"]}
            gapClass="gap-5"
          />
          <Tools
            customHeading="Frontend"
            toolNames={["React", "TailwindCSS", "Figma"]}
            gapClass="gap-5"
          />
          <Tools
            customHeading="Backend"
            toolNames={["Flask", "Postgre", "NodeJS"]}
            gapClass="gap-5"
          />
          <Tools
            customHeading="Tools & Tech"
            toolNames={["Git", "Postman", "Raspberry Pi"]}
            gapClass="gap-5"
          />
        </div>
      </div>
      <div className="w-full bg-[#fafafa] border border-s-border border-solid py-5 px-6 rounded-sm">
        <h2 className="text-base mb-2.5 font-bold max-sm:text-lg">I pre</h2>
      </div>
      <div className="w-full bg-[#fafafa] border border-s-border border-solid py-5 px-6 rounded-sm">
        <h2 className="text-base mb-2.5 font-bold max-sm:text-lg ">
          The first time I touched code, I...
        </h2>
        <p className="text-base max-sm:text-lg ">
          was 10 years old and creating fan sites for my favorite celebrities of
          the time{" "}
          <span className="italic">(see: Ashlee Simpson & Miley Cyrus)</span>{" "}
          with custom HTML & CSS
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
          , and collector of sunrise pics
        </p>
      </div>
    </Page>
  );
};
