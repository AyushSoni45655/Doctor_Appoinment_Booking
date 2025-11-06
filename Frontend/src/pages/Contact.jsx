export default function Contact() {
    return (
        <form className="flex flex-col items-center my-6 text-sm">
            <p className="text-lg text-white font-bold tracking-wider  pb-2">Get in Touch</p>
            <h1 className="text-4xl font-semibold  text-white max-w-xl text-center pb-4">We’re here to help you with all your healthcare needs.</h1>
            <p className="text-sm text-gray-500 max-w-lg text-center pb-10">feedback, or need support? Our team is always ready to assist you. Reach out to us for appointment issues, doctor queries — we’ll get back to you as soon as possible</p>
            
            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full text-white">
                    <label className="text-white" htmlFor="name">Your Name</label>
                    <input placeholder="Enter Your Name" className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-white" htmlFor="name">Your Email</label>
                    <input placeholder="Enter E-mail" className="h-12 p-2 text-white mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
            </div>
        
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-white" htmlFor="name">Message</label>
                <textarea placeholder="Type SOmething here...." className="w-full mt-2 text-white p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
            </div>
        
            <button type="submit" className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send Message</button>
        </form>
    );
};