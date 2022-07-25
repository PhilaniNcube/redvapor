import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

const children = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Home = () => {
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
            duration: 3,
            delay: 0.6,
            ease: 'easeOut',
            delayChildren: 0.6,
            staggerChildren: 0.5,
          },
        },
      }}
      className="mx-auto flex min-h-[83vh] max-w-6xl flex-col py-1 px-4 text-white lg:px-0"
    >
      <div className="w-full border-b border-white pb-2">
        <h1 className="mt-4 text-2xl text-white">Our Productions</h1>
      </div>
      <div className="mx-auto my-6 grid w-10/12 grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
        <motion.div variants={children} className="w-full">
          <img
            src="/images/Swela.jpg"
            className="w-full object-cover"
            alt="Swela Poster"
          />
        </motion.div>
        <motion.div variants={children} className="w-full">
          <img
            src="/images/Isambulo.jpg"
            className="w-full object-cover"
            alt="Isambulo Poster"
          />
        </motion.div>
        <motion.div variants={children} className="w-full">
          <img
            src="/images/Rent.jpg"
            className="w-full object-cover"
            alt="Rent Poster"
          />
        </motion.div>
      </div>

      <motion.div
        variants={children}
        className="flex w-full flex-col items-center justify-center"
      >
        <Link href="/services" passHref>
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

        <p className="text-center text-white">Our Services</p>
      </motion.div>
    </motion.div>
  )
}

export default Home
