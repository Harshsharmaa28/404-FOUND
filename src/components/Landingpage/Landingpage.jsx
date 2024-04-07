import React, { useEffect } from 'react'
import { useState } from 'react'
import './Landingpage.css';
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom';

const Landingpage = () => {
  const [flipSideBar, setflipSideBar] = useState(true);

  useEffect(() => {
    const toggleState = () => {
      setflipSideBar(prev => !prev)
    }
    const intervalId = setInterval(toggleState, 4000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className='vsm:max-sm:h-full flex justify-between'>
      <div className='vsm:max-sm:ml-6 vsm:max-sm:text-3xl  sm:ml-40 flex flex-col mt-16'>
        <div className='vsm:max-sm:text-2xl vsm:max-sm:ml-0 text-5xl flex  gap-2 font-bold'>IMPROVE YOUR
          <div className='text-[#7E00E1]'>
            <span className="word-animation">A</span>
            <span className="word-animation" style={{ animationDelay: '0.1s' }}>C</span>
            <span className="word-animation" style={{ animationDelay: '0.2s' }}>A</span>
            <span className="word-animation" style={{ animationDelay: '0.3s' }}>D</span>
            <span className="word-animation" style={{ animationDelay: '0.4s' }}>E</span>
            <span className="word-animation" style={{ animationDelay: '0.5s' }}>M</span>
            <span className="word-animation" style={{ animationDelay: '0.6s' }}>I</span>
            <span className="word-animation" style={{ animationDelay: '0.7s' }}>C</span>
            <span className="word-animation" style={{ animationDelay: '0.8s' }}>S</span>
          </div>
        </div>
        <div className='vsm:max-sm:text-2xl flex gap-2 font-bold text-5xl mt-5'>GET RIGHT
          <div className='text-[#C1BA00]'>
            <span className="word-animation" style={{ animationDelay: '2s' }}>M</span>
            <span className="word-animation" style={{ animationDelay: '2.1s' }}>E</span>
            <span className="word-animation" style={{ animationDelay: '2.2s' }}>N</span>
            <span className="word-animation" style={{ animationDelay: '2.3s' }}>T</span>
            <span className="word-animation" style={{ animationDelay: '2.4s' }}>O</span>
            <span className="word-animation" style={{ animationDelay: '2.5s' }}>R</span>
            <span className="word-animation" style={{ animationDelay: '2.6s' }}>S</span>
          </div>
        </div>
        <div className='vsm:max-sm:text-md vsm:max-sm:flex vsm:max-sm:flex-wrap vsm:max-sm:py-5 vsm:max-sm:text-sm mt-4 sm:py-10 max-w-[35rem] text-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum nobis natus eius odit exercitationem repellat, ex autem iusto mollitia veritatis fuga id cum quos expedita atque explicabo maiores totam.</div>
        <div className=' mt-6'>
          <Link to='/signup'>
            <button
              type="button"
              className="flex  rounded-md bg-black px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Get Started
              <ArrowRight className=" mt-1 ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
      <div className='vsm:max-sm:hidden h-[40rem] mr-20 flex gap-10'>
        <div className={`rounded-lg ${flipSideBar ? 'mt-48' : 'mt-0'} h-[25rem] bg-[#C1C1C1] w-56  transition-all duration-1000  shadow-md shadow-black `}>
          <div className=' font-semibold mt-8 text-2xl flex justify-center'>
            Top Tags
          </div>
          <div className=' flex flex-wrap justify-center mt-7 gap-4 font-semibold'>
            <p className='border border-black px-3 py-1 rounded-2xl'>Notes</p>
            <p className='border border-black px-3 py-1 rounded-2xl'>Class Notes</p>
            <p className='border border-black px-8 py-1 rounded-xl'>Scholarship</p>
            <p className='border border-black px-8 py-1 rounded-xl'>Mentorship</p>
          </div>
        </div>
        <div className={` rounded-lg ${!flipSideBar ? 'mt-48' : 'mt-0'} h-[25rem] w-56 bg-[#7E00E1] transition-all duration-1000  shadow-md shadow-black `}>
          <div className=' flex justify-center mt-10'>
            <button
              type="button"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black border border-black shadow-md shadow-black hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join for Free
            </button>
          </div>
          <div className=' flex justify-center mt-6 flex-col items-center'>
            <p className=' font-bold text-white'>200+</p>
            <p className=' text-white'>Notes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage