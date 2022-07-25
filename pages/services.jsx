import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AiOutlineVideoCamera, AiOutlineInstagram } from 'react-icons/ai'
import { MdOndemandVideo, MdMusicVideo, MdVideoLibrary } from 'react-icons/md'

const children = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Services = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          y: '150%',
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.5,
            delay: 0.6,
            ease: 'easeOut',
            delayChildren: 0.6,
            staggerChildren: 0.5,
          },
        },
      }}
      className="mx-auto flex min-h-[83vh] max-w-6xl flex-col px-4 lg:px-0  py-1 text-white"
    >
      <div className="w-full border-b border-white pb-2">
        <h1 className="mt-4 text-2xl text-white">Our Services</h1>
      </div>
      <p className="text-base text-white">
        We thrive on giving each client personal attention for each shoot.
      </p>
      <div className="lg:min-w-6xl mx-auto my-6 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
        <motion.div
          variants={children}
          className="flex w-full flex-col items-center justify-center space-y-3"
        >
          <span className="flex h-44 w-44 items-center justify-center rounded-[50%] border border-white p-4">
            <AiOutlineVideoCamera className="text-5xl  text-white lg:text-7xl" />
          </span>
          <p className="text-base text-white">Video Production</p>
        </motion.div>
        <motion.div
          variants={children}
          className="flex w-full flex-col items-center justify-center space-y-3"
        >
          <span className="flex h-44 w-44 items-center justify-center rounded-[50%] border border-white p-4">
            <MdOndemandVideo className="text-5xl  text-white lg:text-7xl" />
          </span>
          <p className="text-base text-white">Post Production</p>
        </motion.div>
        <motion.div
          variants={children}
          className="flex w-full flex-col items-center justify-center space-y-3"
        >
          <span className="flex h-44 w-44 items-center justify-center rounded-[50%] border border-white p-4">
            <MdMusicVideo className="text-5xl  text-white lg:text-7xl" />
          </span>
          <p className="text-base text-white">Music Videos</p>
        </motion.div>
        <motion.div
          variants={children}
          className="flex w-full flex-col items-center justify-center space-y-3"
        >
          <span className="flex h-44 w-44 items-center justify-center rounded-[50%] border border-white p-4">
            <MdVideoLibrary className="text-5xl  text-white lg:text-7xl" />
          </span>
          <p className="text-base text-white">Video Advertising</p>
        </motion.div>
        <motion.div
          variants={children}
          className="flex w-full flex-col items-center justify-center space-y-3"
        >
          <span className="flex h-44 w-44 items-center justify-center rounded-[50%] border border-white p-4">
            <AiOutlineInstagram className="text-5xl  text-white lg:text-7xl" />
          </span>
          <p className="text-base text-white">Social Media</p>
        </motion.div>
      </div>

      <div className="my-4 flex w-full flex-col items-start justify-center">
        <motion.span variants={children} className="flex w-full text-white">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <span className="ml-4 w-full flex-1 border-b border-white"></span>
        </motion.span>

        <motion.p
          variants={children}
          className="py-4 text-xs text-white md:text-sm"
        >
          We are willing to go the extra mile to ensure the best quality and
          service by building long lasting relationships and friendship,
          guaranteeing a professional service that is always accompanied by
          respect, integrity and passion for each project and for every client.
        </motion.p>
      </div>

      <motion.div
        variants={children}
        className="flex w-full flex-col items-center justify-center"
      >
        <Link href="/about" passHref>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 rotate-90 cursor-pointer text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>

        <p className="text-center text-white">About Us</p>
      </motion.div>
    </motion.div>
  )
}

export default Services
