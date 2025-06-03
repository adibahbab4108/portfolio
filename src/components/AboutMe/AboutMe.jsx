import SectionTitle from "../shared/SectionTitle";

const AboutMe = () => {
  return (
    <div id="about">
      <SectionTitle
        title="About Me"
      />
      <div className="flex ">
        <div className=" w-full  text-white/50">
          A passionate Full-Stack Developer specialize in both front-end
          technologies like React, Tailwind CSS, and JavaScript, and back-end
          development with Node.js, Express.js, and MongoDB.<br/><br/>
          Currently I&apos;m  Learning next level technologies i.e. TypeScript, PostgreSQL, advanced MongoDB and so on. <br/><br/>
          I pursued my B.Sc in Computer Science and engineering from
          International Islamic University Chittagong.
        </div>
        <div className="h-60 w-full border">Hello</div>
      </div>
    </div>
  );
};

export default AboutMe;
