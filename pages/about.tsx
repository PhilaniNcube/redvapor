import { NextPage } from 'next';
import React from 'react'
import Link from 'next/link'

const About:NextPage = () => {
  return (
      <div className="flex text-white max-w-6xl mx-auto min-h-[83vh] flex-col py-1">

          <div className="w-full my-6">
              <div className="w-full grid grid-cols-6 gap-6">
                  <img src="/images/shoot-4.jpg" className="w-full h-full col-span-2 object-cover" alt="Red Vapor" />
                  
                  <div className="w-full col-span-4">
                      <h1 className="text-3xl font-bold text-white w-full border-b border-white pb-2">About Us</h1>
                      <p className="text-xs text-white leading-6 pt-3">Red Vapor was established in 2019. Ian Jonkers is the sole owner of the company. Ian is a young passionate
                      videographer and content creator,he thrives on telling every day stories through film.The company is based in the second biggest city in the diverse Eastern Cape. Self taught filmmaker who struggled to get a bursary to go to film school. I started writing poetry and and short scripts which got me into a youth program with The NFVF where I excelled over peers in the field who have been to film school and working in the industry, my natural talent and passion propelled me forward to be the only one in the group to write one short film and direct 2 of the 10 short films in 2020. It is with this experience, my self taught knowledge and creativity the growth of red Vapor stands on.The company has grown to accommodate more film production needs of the customer, building trust and confidence in the company.</p>
                      <h1 className="text-3xl font-bold text-white w-full mt-3 border-b border-white pb-2">Our Vision &#38;  Mission</h1>
                      <p className="text-xs text-white leading-6 pt-3">We are an innovative and creatively ground breaking production company inspired by a growth mindset culture for increased well being and client satisfaction, and bring 
                      professional and affordable video production to the corporate and public sectors.</p>
                      <h1 className="text-3xl font-bold text-white w-full mt-3 border-b border-white pb-2">Our Values</h1>
                      <p className="text-xs text-white leading-6 pt-3">Creating a community inspired by culture, wellness and mindfulness. </p>

                  </div>

            </div>

          </div>
          
          
          
          <div className="w-full flex justify-center items-center flex-col">
        <Link href="/gallery" passHref>
          <svg  xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white cursor-pointer rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>
        
        <p className="text-center text-white">Our Gallery</p>
          </div>
      </div>
  )
}

export default About