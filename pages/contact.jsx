import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

const children = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          x: '150%',
        },
        visible: {
          opacity: 1,
          x: 0,

          transition: {
            duration: 1.5,
            delay: 0.6,
            ease: 'easeOut',
            delayChildren: 0.8,
            staggerChildren: 0.5,
          },
        },
      }}
      className="my-4 mx-auto flex min-h-[75vh] w-full max-w-5xl flex-col px-4 py-1 text-white lg:px-0"
    >
      <div className="grid w-[100%] grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="w-[100%]">
          <h1 className="w-[100%] border-b border-white pb-2 text-3xl font-bold text-white">
            Contact RED VAPOR
          </h1>
          <section className="px-8 text-white">
            <p className="text-sm leading-7">8 labans Place</p>
            <p className="text-sm leading-7">Buffalo Flats</p>
            <p className="text-sm leading-7">East London 5201</p>
            <p className="text-sm leading-7">+27 (0) 81 429 6318</p>
            <p className="text-sm leading-7">redvaporproductions@gmail.com</p>
            <p className="text-sm leading-7">info@redvaporproduction.co.za</p>
            <span className="mt-4 flex items-center justify-start space-x-6">
              <Link href="https://www.facebook.com/RedVaporProductions">
                <FaFacebookF className="cursor-pointer rounded-full border border-white p-1 text-4xl text-white" />
              </Link>
              <Link href="https://www.instagram.com/redvapor_productions/">
                <FaInstagram className="cursor-pointer rounded-full border border-white p-1 text-4xl text-white" />
              </Link>
            </span>
          </section>
        </div>
        <div className="w-full">
          <h1 className="w-full border-b border-white pb-2 text-3xl font-bold uppercase text-white">
            Submit an Enquiry
          </h1>
          <form
            className="mt-8 w-full text-white"
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
          >
            <input
              type="hidden"
              name="access_key"
              className="hidden"
              value={process.env.NEXT_PUBLIC_WEBFORMS_API_KEY}
            />
            <input
              type="hidden"
              name="subject"
              className="hidden"
              value="New Submission from Website"
            />
            <input
              type="hidden"
              name="redirect"
              className="hidden"
              value="https://web3forms.com/success"
            />
            <input type="checkbox" name="botcheck" id="" className="hidden" />

            <div className="flex w-full flex-col space-y-2">
              <label className="text-sm" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="border-b border-slate-200 bg-transparent py-1 pl-4 text-base focus:outline-none"
                id="name"
                name="name"
              />
            </div>
            <div className="mt-3 flex w-full flex-col space-y-2">
              <label className="text-sm" htmlFor="contact">
                Contact Number
              </label>
              <input
                type="tel"
                className="border-b border-slate-200 bg-transparent py-1 pl-4 text-base focus:outline-none"
                id="contact"
                name="contact"
              />
            </div>
            <div className="mt-3 flex w-full flex-col space-y-2">
              <label className="text-sm" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                className="border-b border-slate-200 bg-transparent py-1 pl-4 text-base focus:outline-none"
                id="email"
                name="email"
              />
            </div>
            <div className="mt-3 flex w-full flex-col space-y-2">
              <label className="text-sm" htmlFor="message">
                Message
              </label>
              <input
                type="text"
                className="border-b border-slate-200 bg-transparent py-1 pl-4 text-base focus:outline-none"
                id="message"
                name="message"
              />
            </div>

            <button className="mt-6 border border-white bg-transparent px-6 py-2 font-medium text-white transition duration-700 ease-out hover:bg-white hover:text-slate-800">
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
