import SectionTitle from "../shared/SectionTitle";
import ieecsImg1 from "../../assets/ieeecs-rakibvai.jpg"
const Experience = () => {
    return (
        <div>
            <SectionTitle title="Experience" subtitle="" />
            <div className="flex justify-center gap-4">
                <div className="card  w-80 shadow-xl">
                    <figure>
                        <img
                            src={ieecsImg1}
                            alt="Me with Abdur Rokib Vai" 
                            className="h-40 object-cover w-full  "
                            />
                    </figure>
                    <div className=" group bg-slate-900 h-48 text-white p-4 rounded-br-4xl transition-all duration-300  hover:bg-violet-800">
                        <h1 className="sm:text-2xl font-bold mt-2">Webmaster</h1>
                        <p className=" font-bold text-gray-300 mt-2">IEEE Communication Scociety IIUC SBC</p>
                        <p className="sm:text-lg font-bold text-violet-400">2024-present</p>
                    </div>
                </div>
                <div className="card  w-80 shadow-xl">
                    <figure>
                        <img
                            src={ieecsImg1}
                            alt="ME with Abdur Rokib Vai" 
                            className="h-40 object-cover w-full  "
                            />
                    </figure>
                    <div className=" group bg-slate-900 h-48 text-white p-4  rounded-br-4xl transition-all duration-300  hover:bg-violet-800">
                        <h1 className="sm:text-2xl font-bold mt-2">Webmaster Executive</h1>
                        <p className="font-bold text-gray-300 mt-2">IEEE Computer Scociety IIUC SBC</p>
                        <p className="sm:text-lg font-bold text-violet-400">2023-2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;