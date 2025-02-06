import SectionTitle from "../shared/SectionTitle";

const ContactMe = () => {
    return (
        <div id="contact">
            <SectionTitle title="Let's Work Together" subtitle="I design and code beautifully simple things and i love what i do. Just simple like that!" />
            <div className="">
                <div className="border">
                    <form className="card-body">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                            <div className="">
                                <input type="text" placeholder="First Name" className="w-full input  bg-slate-900 text-white p-6 font-bold" required />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Last Name" className="w-full input input-bordered bg-slate-900 text-white p-6 font-bold" />
                            </div>
                            <div className="">
                                <input type="email" placeholder="Email" className="w-full input input-bordered bg-slate-900 text-white p-6 font-bold" required />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Phone" className="w-full input input-bordered bg-slate-900 text-white p-6 font-bold" required />
                            </div>
                        </div>
                        <textarea placeholder="Write your message here..." className="input input-bordered w-full bg-slate-900 text-white p-6 h-32 font-bold" required />
                        <div className="form-control mt-6">
                            <button className="customized-btn">Send Message</button>
                        </div>
                    </form>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default ContactMe;