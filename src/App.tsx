import './App.css'
import { useState } from 'react';
import { IoMenu, IoCloseOutline } from "react-icons/io5";



function App() {
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
    </>
  )
}

export default App
