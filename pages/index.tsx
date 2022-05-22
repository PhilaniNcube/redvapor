import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex text-white max-w-6xl mx-auto min-h-[83vh] flex-col py-1">
      <div className="w-full border-b pb-2 border-white" >

          <h1 className="mt-4 text-2xl text-white">Our Productions</h1>
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-3 my-6">
        <div className="w-full">
          <img src="/images/Swela.jpg" className="w-full object-cover" alt="Swela Poster" />
         </div>
        <div className="w-full">
          <img src="/images/Isambulo.jpg" className="w-full object-cover" alt="Isambulo Poster" />
         </div>
        <div className="w-full">
          <img src="/images/Rent.jpg" className="w-full object-cover" alt="Rent Poster" />
         </div>
      </div>

      <div className="w-full flex justify-center items-center flex-col">
        <Link href="/services" passHref>
          <svg  xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white cursor-pointer rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>
        
        <p className="text-center text-white">Our Services</p>
      </div>
    </div>
  )
}

export default Home
