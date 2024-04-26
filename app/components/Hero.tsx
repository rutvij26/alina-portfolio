import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='global-section flex-col justify-center items-center'>
            <div className="xl:p-10">
                <Image
                    src="/Headshot-square-cropped.JPG"
                    width={500}
                    height={500}
                    alt='Alina Photo'
                    className="rounded-full 
                    h-40 md:h-[15rem] 
                    w-40 md:w-[15rem] 
                    object-scale-down shadow-2xl"
                />
            </div>
            <div className="xl:p-10">
                <span className='global-font text-2xl md:text-4xl uppercase global-font text-text tracking-widest '>CopyWriter</span>
            </div>
            <div className="flex max-h-fit flex-col justify-center items-center md:flex-row">
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
