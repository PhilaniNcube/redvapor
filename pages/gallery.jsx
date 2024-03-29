import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Carousel from '../components/Carousel'

const children = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.8,
    },
  },
}

const gallery = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,

          transition: {
            duration: 1.5,
            delay: 0.6,
            ease: 'easeOut',
            delayChildren: 0.8,
            staggerChildren: 0.5,
          },
        },
      }}
      className="mx-auto flex min-h-[83vh] max-w-6xl px-4 lg:px-0 flex-col py-1 text-white"
    >
      <motion.div variants={children} className="my-6 w-full overflow-hidden">
        <motion.h1
          variants={children}
          className="w-full border-b border-white pb-2 text-3xl font-bold text-white"
        >
          Gallery
        </motion.h1>
        <Carousel />
      </motion.div>

      <div className="flex w-full flex-col items-center justify-center">
        <Link href="/contact" passHref>
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

        <p className="text-center text-white">Contact Us</p>
      </div>
    </motion.div>
  )
}

export default gallery
