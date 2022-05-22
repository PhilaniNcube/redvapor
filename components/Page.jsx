import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Page = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-800/60">
      <header className="w-full ">
        <nav className="mx-auto flex max-w-6xl items-center justify-between py-8">
          <span className="flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 rotate-90 rounded-full border p-1 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
            <p className="pl-4 text-base uppercase text-white">Menu</p>
          </span>

          <img className="h-16 object-cover" src="/images/logo.svg" />

          <div className="flex items-center space-x-3">
            <FaWhatsapp className="rounded-full border border-white p-[3px] text-3xl text-white " />{' '}
            <span className="rounded-full border border-white px-6 py-1 text-base text-white">
              Get In Touch
            </span>
          </div>
        </nav>
      </header>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="fixed right-0 bottom-0  -z-10 min-h-full min-w-full bg-blend-multiply "
      >
        <source
          src="https://res.cloudinary.com/athenamedia-co-za/video/upload/v1653216010/bg-video_youei2.mp4"
          type="video/mp4"
        />
      </video>
      {children}
    </div>
  )
}

export default Page
