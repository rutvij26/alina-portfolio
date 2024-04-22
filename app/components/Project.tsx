import React from 'react'
import Image from 'next/image'
import { IProjects } from '../data/projects'

const Project = ({ data, project }: { data: IProjects, project: keyof IProjects }) => {
    return (
        <div className='flex flex-1'>
            <div className="border-r-2 border-text flex  flex-col flex-[0.3] items-center justify-around p-4">
                <div className="flex flex-col">
                    <span className='global-font italic m-2 custom-text text-2xl text-bold text-text  uppercase  cursor-default'>
                        IDEA
                    </span>
                    <span className='global-font m-2 custom-text text-2xl text-bold text-text  uppercase  cursor-default'>
                        {data[project].idea}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className='global-font italic m-2 custom-text text-2xl text-bold text-text  uppercase  cursor-default'>
                        INSIGHT
                    </span>
                    <span className='global-font m-2 custom-text text-2xl text-bold text-text  uppercase  cursor-default'>
                        {data[project].insight}
                    </span>
                </div>
            </div>
            <div className="flex-[0.7] justify-center snap-y snap-mandatory overflow-y-scroll">
                {data[project]?.images?.map((image, index) => (
                    <div
                        key={index}
                        className="flex flex-1 h-full w-full justify-center items-center snap-center">
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
