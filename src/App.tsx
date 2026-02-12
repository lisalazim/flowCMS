import './App.css'

function App() {

  return (
    <>
      <nav className='md:flex justify-between md:text-center absolute w-full top-0 p-6 md:px-20 bg-transparent'>
        <p className='font-bold text-lg md:text-xl text-white'>FlowCMS</p>
        <ul className='flex justify-between gap-4 md:gap-12 text-white'>
          <a href=""><li className='text-base md:text-lg font-normal hover:text-blue-300'>Home</li></a>
          <a href=""><li className='text-base md:text-lg font-normal hover:text-blue-300'>Features</li></a>
          <a href=""><li className='text-base md:text-lg font-normal hover:text-blue-300'>Recent Posts</li></a>
        </ul>
        
      </nav>
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
