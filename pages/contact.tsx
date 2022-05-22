import { NextPage } from 'next';
import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram } from "react-icons/fa";


const Contact: NextPage= () => {
  return (
      <div className="flex my-8 text-white w-full max-w-5xl mx-auto min-h-[83vh] flex-col py-1">
          <div className="grid grid-cols-1 w-[100%] lg:grid-cols-2 gap-12">
              <div className="w-[100%]">
                  <h1 className="text-3xl font-bold text-white w-[100%] border-b border-white pb-2">Contact RED VAPOR</h1>
                  <section className="px-8 text-white">
                      <p className="text-sm leading-7">8 labans Place</p>
                      <p className="text-sm leading-7">Buffalo Flats</p>
                      <p className="text-sm leading-7">East London 5201</p>
                      <p className="text-sm leading-7">+27 (0) 81 429 6318</p>
                      <p className="text-sm leading-7">redvaporproductions@gmail.com</p>
                      <p className="text-sm leading-7">info@redvaporproduction.co.za</p>
                      <span className="flex space-x-6 mt-4 justify-start items-center">
                          <Link href="https://www.facebook.com/RedVaporProductions">
                          <FaFacebookF className="text-white text-4xl p-1 border rounded-full border-white cursor-pointer" />
                          </Link>
                          <Link href="https://www.instagram.com/redvapor_productions/">
                          <FaInstagram className="text-white text-4xl p-1 border rounded-full border-white cursor-pointer" />
                          </Link>
                      </span>
                  </section>
              </div>
              <div className="w-full">
                  <h1 className="text-3xl font-bold text-white w-full border-b border-white pb-2 uppercase">Submit an Enquiry</h1>
                  <form className="w-full text-white mt-8" action="https://api.web3forms.com/submit" method="POST" id="form">

                         <input type="hidden" name="access_key" className="hidden" value={process.env.NEXT_PUBLIC_WEBFORMS_API_KEY} />
          <input type="hidden" name="subject" className="hidden" value="New Submission from Website" />
          <input type="hidden" name="redirect" className="hidden" value="https://web3forms.com/success" />
          <input type="checkbox" name="botcheck" id="" className="hidden" />

                      <div className="w-full flex flex-col space-y-2">
                          <label className="text-sm" htmlFor="name">
                              Name
                          </label>
                          <input type="text" className="bg-transparent border-b text-base py-1 border-slate-200 focus:outline-none pl-4" id="name" name="name" />
                      </div>
                      <div className="w-full flex flex-col space-y-2 mt-3">
                          <label className="text-sm" htmlFor="contact">
                              Contact Number
                          </label>
                          <input type="tel" className="bg-transparent border-b text-base py-1 border-slate-200 focus:outline-none pl-4" id="contact" name="contact" />
                      </div>
                      <div className="w-full flex flex-col space-y-2 mt-3">
                          <label className="text-sm" htmlFor="email">
                              Email Address
                          </label>
                          <input type="email" className="bg-transparent border-b text-base py-1 border-slate-200 focus:outline-none pl-4" id="email" name="email" />
                      </div>
                      <div className="w-full flex flex-col space-y-2 mt-3">
                          <label className="text-sm" htmlFor="message">
                              Message
                          </label>
                          <input type="text" className="bg-transparent border-b text-base py-1 border-slate-200 focus:outline-none pl-4" id="message" name="message" />
                      </div>

                      <button className="text-white bg-transparent border border-white px-6 py-2 mt-6 hover:text-slate-800 font-medium hover:bg-white transition duration-700 ease-out">Submit</button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Contact