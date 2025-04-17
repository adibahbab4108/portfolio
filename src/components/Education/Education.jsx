import SectionTitle from "../shared/SectionTitle";
import {
    certificates
} from "../../assets/certificates/certificates"
import Marquee from "react-fast-marquee";

const Education = () => {
    return (
        <div id="education">

            <SectionTitle title="Education"
                subtitle="Education journey has been an exciting ride—full of challenges, growth, and countless moments.  The journey continues, and always ready for the next adventure! 🚀"
            />

            <div>
                <div className="group bg-slate-900 text-white p-10  rounded-t-xl transition-all duration-300  hover:bg-violet-800">
                    <p className="text-xl font-bold text-violet-400">2021-2025</p>
                    <h1 className="text-3xl font-bold mt-2">B.Sc in Computer Science and Engineering</h1>
                    <p className="font-bold text-gray-300 mt-2">International Islamic University Chittagong</p>
                </div>

                <div className="group bg-slate-900 text-white p-10  transition-all duration-300 hover:bg-violet-700">
                    <p className="text-xl font-bold text-violet-400">2018</p>
                    <h1 className="text-3xl font-bold mt-2">Higher Secondary Certificate</h1>
                    <p className="font-bold text-gray-300 mt-2">CDA Public School and College</p>
                </div>

                <div className="group bg-slate-900 text-white p-10 rounded-b-2xl transition-all duration-500  hover:bg-violet-700">
                    <p className="text-xl font-bold text-violet-400">2016</p>
                    <h1 className="text-3xl font-bold mt-2">Secondary School Certificate</h1>
                    <p className="font-bold text-gray-300 mt-2">Bakalia High School</p>
                </div>
            </div>
            <div className=" mt-10">
                <Marquee pauseOnHover="true" className="flex gap-4">
                    <div className="w-50 px-1  ">
                        <img src={certificates.webmasterCertificate} alt="" className="" />
                    </div>
                    <div className="w-50 px-1 ">
                        <img src={certificates.ph1} alt="" />
                    </div>
                    <div className="w-50 px-1 px-2 space-x-1 ">
                        <img src={certificates.ieee1} alt="" />
                    </div>
                    <div className="w-50 px-1 ">
                        <img src={certificates.cloudToIot} alt="" />
                    </div>
                    <div className="w-50 px-1 px-2 space-x-1  ">
                        <img src={certificates.fiveG} alt="" />
                    </div>
                    <div className="w-50 px-1 px-2 space-x-1  ">
                        <img src={certificates.dataScienceML} alt="" />
                    </div>
                    <div className="w-50 px-1 ">
                        <img src={certificates.icrcs} alt="" />
                    </div>
                    <div className="w-50 px-1 ">
                        <img src={certificates.cyber1} alt="" />
                    </div>
                </Marquee>

            </div>
        </div>
    );
};

export default Education;