import SectionTitle from "../shared/SectionTitle";
import { myskill_data } from '../../assets/myskills.json'
import SkillTechMarquee from "./SkillTechMarquee";

// const skills = myskill_data.flatMap(category => category.skills)
const frontEnd = myskill_data.find(skill => skill.slug === "frontend").skills
const backEnd = myskill_data.filter(skill => skill.slug === "backend" || skill.slug === "security").map(skill => skill.skills).flat()
const toolsUtils = myskill_data.find(skill => skill.slug === "tools-utilities").skills
const otherLanguages = myskill_data.find(skill => skill.slug === "other-languages").skills


const Skills = () => {

    return (
        <div id="skills" className="pb-20">
            <SectionTitle title="My Skills" subtitle="Transform your ideas and desires into a distinctive web project that not only inspires you but also captivates your customers." />
            {/* Front End */}
            <SkillTechMarquee title={"Front End"} category={frontEnd} direction={"right"} />
            {/* Backend */}
            <SkillTechMarquee title={"Back End"} category={backEnd} direction={"left"} />
            {/* Tools And Utilities */}
            <SkillTechMarquee title={"Tools And Utilities "} category={toolsUtils} direction={"right"} />
            {/* Other Languages */}
            <SkillTechMarquee title={"Other Languages"} category={otherLanguages} direction={"left"} />

        </div >
    );
};

export default Skills;