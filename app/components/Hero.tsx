import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='text-primary flex flex-col h-screen items-center mt-10'>
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
                <span className='text-text tracking-widest'>CopyWriter</span>
            </div>
            <div className="">
                <span className='custom-text'>About</span>
                <span className='custom-text'>Work</span>
                <span className='custom-text'>Skills</span>
            </div>
        </div>
    )
}

export default Hero
