import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const children = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          x: '-150%',
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.5,
            delay: 0.6,
            ease: 'easeOut',
            delayChildren: 0.6,
            staggerChildren: 0.5,
          },
        },
      }}
      className="mx-auto flex min-h-[83vh] max-w-6xl flex-col py-1 text-white"
    >
      <div className="my-6 w-full">
        <motion.div
          variants={children}
          className="grid w-full grid-cols-6 gap-6"
        >
          <motion.img
            variants={children}
            src="/images/shoot-4.jpg"
            className="col-span-2 h-full w-full object-cover"
            alt="Red Vapor"
          />

          <motion.div variants={children} className="col-span-4 w-full">
            <h1 className="w-full border-b border-white pb-2 text-3xl font-bold text-white">
              About Us
            </h1>
            <p className="pt-3 text-xs leading-6 text-white">
              Red Vapor was established in 2019. Ian Jonkers is the sole owner
              of the company. Ian is a young passionate videographer and content
              creator,he thrives on telling every day stories through film.The
              company is based in the second biggest city in the diverse Eastern
              Cape. Self taught filmmaker who struggled to get a bursary to go
              to film school. I started writing poetry and and short scripts
              which got me into a youth program with The NFVF where I excelled
              over peers in the field who have been to film school and working
              in the industry, my natural talent and passion propelled me
              forward to be the only one in the group to write one short film
              and direct 2 of the 10 short films in 2020. It is with this
              experience, my self taught knowledge and creativity the growth of
              red Vapor stands on.The company has grown to accommodate more film
              production needs of the customer, building trust and confidence in
              the company.
            </p>
            <h1 className="mt-3 w-full border-b border-white pb-2 text-3xl font-bold text-white">
              Our Vision &#38; Mission
            </h1>
            <p className="pt-3 text-xs leading-6 text-white">
              We are an innovative and creatively ground breaking production
              company inspired by a growth mindset culture for increased well
              being and client satisfaction, and bring professional and
              affordable video production to the corporate and public sectors.
            </p>
            <h1 className="mt-3 w-full border-b border-white pb-2 text-3xl font-bold text-white">
              Our Values
            </h1>
            <p className="pt-3 text-xs leading-6 text-white">
              Creating a community inspired by culture, wellness and
              mindfulness.{' '}
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={children}
        className="flex w-full flex-col items-center justify-center"
      >
        <Link href="/gallery" passHref>
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

        <p className="text-center text-white">Our Gallery</p>
      </motion.div>
    </motion.div>
  )
}

export default About
