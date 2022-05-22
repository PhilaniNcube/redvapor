import { NextPage } from 'next';
import React from 'react'
import Link from 'next/link'
import { AiOutlineVideoCamera, AiOutlineInstagram } from "react-icons/ai";
import { MdOndemandVideo, MdMusicVideo, MdVideoLibrary } from "react-icons/md";

const Services:NextPage = () => {
  return (
    <div className="flex text-white max-w-6xl mx-auto min-h-[83vh] flex-col py-1">
      <div className="w-full border-b pb-2 border-white" >

          <h1 className="mt-4 text-2xl text-white">Our Services</h1>
      </div>
      <p className="text-white text-base">We thrive on giving each client personal attention for each shoot.</p>
      <div className="lg:min-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 md:gap-4 gap-3 my-6">
        <div className="w-full flex flex-col items-center justify-center space-y-3">
          <span className="w-44 h-44 flex items-center justify-center p-4 border border-white rounded-[50%]"><AiOutlineVideoCamera className="text-5xl  lg:text-7xl text-white" /></span>
          <p className="text-base text-white">Video Production</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-3">
          <span className="w-44 h-44 flex items-center justify-center p-4 border border-white rounded-[50%]"><MdOndemandVideo className="text-5xl  lg:text-7xl text-white" /></span>
          <p className="text-base text-white">Post Production</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-3">
          <span className="w-44 h-44 flex items-center justify-center p-4 border border-white rounded-[50%]"><MdMusicVideo className="text-5xl  lg:text-7xl text-white" /></span>
          <p className="text-base text-white">Music Videos</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-3">
          <span className="w-44 h-44 flex items-center justify-center p-4 border border-white rounded-[50%]"><MdVideoLibrary className="text-5xl  lg:text-7xl text-white" /></span>
          <p className="text-base text-white">Video Advertising</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center space-y-3">
          <span className="w-44 h-44 flex items-center justify-center p-4 border border-white rounded-[50%]"><AiOutlineInstagram className="text-5xl  lg:text-7xl text-white" /></span>
          <p className="text-base text-white">Social Media</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-start my-4 flex-col">
        <span className="flex text-white w-full">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <span className="flex-1 border-b border-white ml-4 w-full"></span>
        </span>

        <p className="text-white py-4 text-xs md:text-sm">We are willing to go the extra mile to ensure the best quality and service by building long lasting relationships and friendship, guaranteeing a professional
service that is always accompanied by respect, integrity and passion for each project and for every client.</p>

      </div>

      <div className="w-full flex justify-center items-center flex-col">
        <Link href="/about" passHref>
          <svg  xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white cursor-pointer rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>
        
        <p className="text-center text-white">About Us</p>
      </div>
    </div>
  )
}

export default Services