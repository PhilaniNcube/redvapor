import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Page = ({children}) => {
  return (
      <div className="flex min-h-screen flex-col bg-slate-800/60 relative items-center justify-center">
          <header className="w-full ">
              <nav className="max-w-6xl py-8 flex items-center justify-between mx-auto">
                  <span className="flex items-center">
                      <span><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rotate-90 text-white border rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                          
                      </span>
                          <p className="text-white text-base uppercase pl-4">Menu</p>

                  </span>
                  
                  <img className="h-16 object-cover" src="/images/logo.svg" />

                  <div className="flex items-center space-x-3"><FaWhatsapp className="border rounded-full border-white p-[3px] text-white text-3xl " /> <span className="text-white text-base border rounded-full border-white px-6 py-1">Get In Touch</span></div>

              </nav>
          </header>
          <video autoPlay muted loop id="myVideo" className="-z-10 min-h-full min-w-full  bg-blend-multiply fixed right-0 bottom-0 ">
                <source src="/videos/bg-video.mp4" type="video/mp4"/>
          </video>
     {children}
    </div>
  )
}

export default Page