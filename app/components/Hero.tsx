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
                    className="rounded-full"
                />
            </div>
            <div className="text-7xl uppercase global-font p-10">
                <span className='text-text tracking-widest global-font'>CopyWriter</span>
            </div>
            <div className="">
                <Link href="#about">
                    <span className='custom-text'>About</span>
                </Link>
                <Link href="#about">
                    <span className='custom-text'>Work</span>
                </Link>
                <Link href="#about">
                    <span className='custom-text'>Skills</span>
                </Link>
            </div>
        </div>
    )
}

export default Hero
