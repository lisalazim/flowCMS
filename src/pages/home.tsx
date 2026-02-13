import { useState } from 'react';
import { IoMenu, IoCloseOutline,} from "react-icons/io5";
import { RiEditCircleFill } from "react-icons/ri";
import { IoMdAnalytics } from "react-icons/io";
import { FcElectroDevices } from "react-icons/fc";





function Home() {
    const [open, setOpen] = useState(false);
    return (
    <>
        <nav className="fixed top-0 w-full p-6 md:px-20 z-50 bg-transparent">
            <div className="flex justify-between items-center">

            {/* Logo */}
            <p className={`font-bold text-xl transition ${open ? "text-blue-600" : "text-white"}`}>FlowCMS</p>

            {/* Toggle button */}
            <button
                className={`md:hidden text-3xl z-50 cursor-pointer transition ${
                open ? "text-blue-600" : "text-white"
                }`}
                onClick={() => setOpen(!open)}>
                {open ? <IoCloseOutline /> : <IoMenu />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-12 text-white font-medium">
                <a className="hover:text-blue-300 transition" href="">Home</a>
                <a className="hover:text-blue-300 transition" href="">Features</a>
                <a className="hover:text-blue-300 transition" href="">Recent Posts</a>
            </div>

            </div>
        </nav>

        {/* Mobile fullscreen menu */}
        <div
            className={`fixed inset-0 bg-white md:hidden transition-all duration-300 z-40
            ${open ? "flex" : "hidden"} flex-col justify-start items-start pt-32 pl-8 gap-8`}
        >
            <a onClick={() => setOpen(false)} className="text-xl hover:text-blue-600 transition" href="">Home</a>
            <a onClick={() => setOpen(false)} className="text-xl hover:text-blue-600 transition" href="">Features</a>
            <a onClick={() => setOpen(false)} className="text-xl hover:text-blue-600 transition" href="">Recent Posts</a>
        </div>

        {/* hero section */}
        <section className="hero-section flex justify-center items-center bg-[url('./assets/hero.png')] h-screen bg-cover bg-center font-(--font-primary)" >
            <div className="hero-content flex flex-col justify-center items-center text-center text-white px-4 md:px-20 lg:px-40">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">Manage Your Content. <br />Ship Faster. Stay Organized.</h1>
            <p className="text-sm md:text-xl mb-6">A lightweight content management dashboard built for modern teams who care about speed, clarity, and control.</p>
            <div className="btn">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 hover:text-white hover:cursor-pointer">Get Started</button>
                <button className="ml-4 bg-transparent border-2 border-white text-white font-bold py-2 px-6 rounded-full transition duration-300 hover:bg-white hover:text-blue-600 hover:cursor-pointer">View Blog</button>
            </div>
            </div>
        </section>

        {/* Features section */}
        <section className='features-section py-20 bg-gray-100'>
            <div className='container mx-auto px-4 md:px-8 lg:px-16'>
                <h2 className='text-3xl font-bold text-center mb-12'>Everything you need to manage content</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='feature-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                        <RiEditCircleFill className="text-blue-600 text-5xl mb-4" />
                        <h3 className='text-xl font-semibold mb-4'>Smart Content Management</h3>
                        <p className='text-gray-600 text-center'>Create, edit, and publish posts with a clean editor and simple workflow.</p>
                    </div>
                    <div className='feature-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                        <IoMdAnalytics className="text-blue-600 text-5xl mb-4" />
                        <h3 className='text-xl font-semibold mb-4'>Built-in Analytics</h3>
                        <p className='text-gray-600 text-center'>Track content performance with real-time insights and visual reports.</p>
                    </div>
                    <div className='feature-card flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                        <FcElectroDevices className="text-blue-600 text-5xl mb-4" />
                        <h3 className='text-xl font-semibold mb-4'>Fast & Developer Friendly</h3>
                        <p className='text-gray-600 text-center'>Built with React, TypeScript, and modern UI patterns for speed and scalability.</p>
                    </div>
                </div>
            </div>

        </section>

    </>
)
}

export default Home
