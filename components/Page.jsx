import React, { Fragment, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import Menu from './Menu'

const Page = ({ children }) => {

  const [open, setOpen] = useState(false)

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-800/60">
      <AnimatePresence exitBeforeEnter>
        {open && <Menu setOpen={setOpen} />}
      </AnimatePresence>
      <header className="w-full px-4 lg:px-0">
        <nav className="mx-auto flex max-w-6xl  items-center justify-between py-8">
          <span onClick={() => setOpen(!open)} className="flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 rotate-90 rounded-full border p-1 text-white md:h-8 md:w-8"
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
            <p className="pl-4 text-sm uppercase text-white md:text-base">
              Menu
            </p>
          </span>

          <img className="h-8 object-cover md:h-16" src="/images/logo.svg" />

          <Link href="https://wa.me/27814296318" passHref>
            <div className="flex cursor-pointer items-center space-x-3">
              <Fragment>
                <FaWhatsapp className="rounded-full border border-white p-[2px] text-2xl text-white md:text-3xl " />{' '}
                <span className="rounded-full border border-white px-3 py-1 text-sm text-white md:px-6 md:text-base">
                  Get In Touch
                </span>
              </Fragment>
            </div>
          </Link>
        </nav>
      </header>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="absolute inset-0 -z-10 h-full min-h-full w-full min-w-full bg-cover object-cover bg-blend-multiply "
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
