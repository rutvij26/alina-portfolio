import React from 'react'
import Image from 'next/image'
import { IProjects } from '../data/projects'

const Project = ({ data, project }: { data: IProjects, project: keyof IProjects }) => {
    return (
        <div className='flex flex-1'>
            <div className="border-r-2 border-text flex  flex-col flex-[0.3] items-center justify-around md:p-4 overflow-scroll">
                <div className="flex flex-col">
                    <span className='global-font italic xl:m-2 custom-text px-[0.3rem] md:px-2 text-xs md:text-sm lg:text-xl xl:text-2xl text-bold text-text  uppercase  cursor-default tracking-tighter'>
                        IDEA
                    </span>
                    <span className='global-font xl:m-2 custom-text px-[0.3rem] md:px-2 text-xs md:text-sm lg:text-xl xl:text-2xl text-bold text-text  uppercase  cursor-default tracking-tighter'>
                        {data[project].idea}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className='global-font italic xl:m-2 custom-text px-[0.3rem] md:px-2 text-xs md:text-sm lg:text-xl xl:text-2xl text-bold text-text  uppercase  cursor-default tracking-tighter'>
                        INSIGHT
                    </span>
                    <span className='global-font xl:m-2 custom-text px-[0.3rem] md:px-2 text-xs md:text-sm lg:text-xl xl:text-2xl text-bold text-text  uppercase  cursor-default tracking-tighter'>
                        {data[project].insight}
                    </span>
                </div>
            </div>
            <div className="flex-[0.7] justify-center md:snap-y md:snap-mandatory overflow-y-scroll">
                {data[project]?.images?.map((image, index) => (
                    <div
                        key={index}
                        className="flex flex-1 md:h-full md:w-full justify-center items-center md:snap-center">
                        <Image
                            src={image}
                            alt="project image"
                            width={600}
                            height={600}
                            className='object-scale-down h-full w-full'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
