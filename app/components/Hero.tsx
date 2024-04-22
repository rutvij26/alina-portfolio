import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='global-section flex-col items-center'>
            <div className="p-10">
                <Image
                    src="/Headshot-square-cropped.JPG"
                    width={500}
                    height={500}
                    alt='Alina Photo'
                    className="rounded-full 
                    h-40 md:h-[20rem] 
                    w-40 md:w-[20rem] 
                    object-cover"
                />
            </div>
            <div className="p-10">
                <span className='global-font text-2xl md:text-3xl xl:text-4xl uppercase global-font text-text tracking-widest '>CopyWriter</span>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row">
                <Link className='pt-4' href="#about">
                    <span className='custom-text'>About</span>
                </Link>
                <Link className='pt-4' href="#work">
                    <span className='custom-text'>Work</span>
                </Link>
            </div>
        </div>
    )
}

export default Hero
