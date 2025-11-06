import { assets } from "../assets/assets";
export default function About() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-white text-center mx-auto tracking-wider mt-10">Healthcare Made Simple</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
               Experience a smarter way to manage your healthcare by finding doctors, booking visits, and tracking your medical history effortlessly.
            </p>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 px-4 md:px-0 py-10">
                <div className="size-[520px] rounded-full absolute "></div>
                <img className="max-w-sm w-full rounded-xl h-auto"
                    src={assets.about_image}
                    alt="" />
                <div>
                    <h1 className="text-3xl text-white font-semibold">Why Choose Us</h1>
                    <p className="text-sm text-slate-500 mt-2">
                     Highlight what makes your app stand out — reliability, speed, and trusted healthcare access.
                    </p>
            
                    <div className="flex flex-col gap-10 mt-6">
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2  rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Smart Doctor Search</h3>
                                <p className="text-sm text-slate-500">Find the right doctor instantly by specialty, experience, or location.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Real-Time Availability</h3>
                                <p className="text-sm text-slate-500">Check doctors’ available slots and schedule accordingly.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Health Record Storage</h3>
                                <p className="text-sm text-slate-500">Safely store and access all your medical reports anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};