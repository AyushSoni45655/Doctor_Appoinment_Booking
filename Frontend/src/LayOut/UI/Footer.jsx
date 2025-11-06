import { assets } from "../../assets/assets";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b   text-white mt-6">
            <div className="border-t-[1px] border-t-gray-500  sections max-w-7xl mx-auto px-6 py-6 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img alt="" className="h-14 w-16"
                        src={assets.dlogo} />
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                   Book your appointments with ease and stay connected with your trusted healthcare providers. Your health, our priority.
                </p>
            </div>
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="/">HealHub</a> ©2025. All rights reserved.
                </div>
            </div>
        </footer>
    );
};