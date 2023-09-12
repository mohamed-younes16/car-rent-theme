import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/public/logo.svg"
import hero from "@/public/hero.png"

const Hero = () => {
  return (

    <div className=' relative max-width padding-x'>
        <nav className=' items-center py-7  absolute inset-x-0 max-width px-5   z-10 flex justify-between  pt-5 '>
            
            <Link href="#" > <Image height={50}  alt="logo" width={120} src={logo}/></Link>
            <div className="sign p-2 bg-white rounded-full text-blue-700  text-xl"> <button>Sign in </button></div>
        </nav>

        <div className="hero pt-28">
            <div className='  flex-1'>
                 <div className="hero__title ">
        Find, book, or rent a car — quickly and easily!

        </div>
        <div className="hero__subtitle">
        Streamline your car rental experience with our effortless booking process.
        </div>
        <div className="bg-blue-700 my-9 w-fit text-white text-xl rounded-full  p-4">Explore Cars</div>

            </div>
            
            <div className="hero__image-container flex-1">
                <div className="hero__image">
                    <Image src={hero} alt='car photo' fill className=' object-contain'/>
                    
                </div>
                <div className="hero__image-overlay"></div>
            </div>

        </div>
    </div>
  )
}

export default Hero