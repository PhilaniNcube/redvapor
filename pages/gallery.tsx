import Link from 'next/link';
import React from 'react'
import Carousel from '../components/Carousel';

const gallery = () => {
  return (
      <div className="flex text-white max-w-6xl mx-auto min-h-[83vh] flex-col py-1">
          <div className="w-full my-6">
              <h1 className="text-3xl font-bold text-white w-full border-b border-white pb-2">Gallery</h1>
              <Carousel />
          </div>
          
           <div className="w-full flex justify-center items-center flex-col">
        <Link href="/contact" passHref>
          <svg  xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white cursor-pointer rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>
        
        <p className="text-center text-white">Contact Us</p>
          </div>
    </div>
  )
}

export default gallery