import SectionTitle from "../shared/SectionTitle";

const AboutMe = () => {
  return (
    <div id="about">
      <SectionTitle title="About Me" />

     
      <div className="grid grid-cols-2 grid-rows-3 place-items-center ">
        <div className="row-span-2 w-full h-full text-white/50 border-t border-r rounded-tr-xl border-base2 pr-4 pt-4 pb-20 lg:pb-40">
          <p className="text-2xl">
            A passionate Full-Stack Developer specialize in both front-end
            technologies like React, Tailwind CSS, and JavaScript, and back-end
            development with Node.js, Express.js, and MongoDB.
          </p>
        </div>
        <div className="w-full  h-full rounded-xl border-base2"></div>
        {/* <div className="w-full border-r h-full rounded-br-xl border-base2"></div> */}
        <div className="row-span-2 text-white/50 border-t border-l rounded-xl w-full h-full pl-4 pt-4 pb-20 lg:pb-40 border-base2">
          <p className="text-2xl">
            I pursued my B.Sc in Computer Science and engineering from
            International Islamic University Chittagong.
          </p>
          <p className="py-3">Graduation: 2025</p>
        </div>
        <div className="text-white/50 border-t border-r rounded-xl w-full pr-4 pt-4  pb-20 lg:pb-40 border-base2">
          <p className="text-2xl">
            Currently learning next level technologies i.e. TypeScript,
            PostgreSQL, advanced MongoDB and so on.
          </p>
        </div>
        {/* <div className="text-white w-full border-l h-full rounded-xl border-base2"></div> */}
      </div>
    </div>
  );
};

export default AboutMe;
