'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IExperiences, experiences } from '../data/work'
import { IProjects, projects } from '../data/projects'
import TabBar, { TTab } from './TabBar'
import Experience from './Experience'

const dataPaneMap: Record<TTab, IExperiences | IProjects> = {
    'Experiences': experiences,
    'Projects': projects
}

type TDataKey = keyof IExperiences | keyof IProjects

const SideItemClass = (exp: TDataKey, key: TDataKey) => `
    flex justify-center items-center flex-1 border-b-2 border-text hover:cursor-pointer ${exp === key ? 'bg-hover' : ''}
`

const Work = () => {
    const [activePane, setActivePane] = useState<TTab>("Experiences")
    const [data, setData] = useState<IExperiences | IProjects>(experiences)
    const [exp, setExp] = useState<TDataKey>("1")

    useEffect(() => {
        setData(dataPaneMap[activePane])
    }, [activePane])


    return (
        <div className='global-section mt-0 md:mt-8 flex-col items-center justify-center'>
            <TabBar activePane={activePane} setActivePane={setActivePane} />
            {/* Canvas */}
            <div className="flex h-[65vh] md:h-[70vh] w-[80vw] border-2 border-text">
                {/* SideBar */}
                <div className="flex flex-[0.10] flex-col  border-r-2 border-text">
                    {/* Item */}
                    {
                        Object.entries(data).map(([key, experience]) => (
                            <div key={experience.name} className={SideItemClass(exp, key)}>
                                <div
                                    onClick={() => setExp(key)}
                                    className="flex flex-1  items-center justify-center">
                                    <div className="flex p-2">
                                        <Image
                                            src={experience.photo_url}
                                            width={80}
                                            height={80}
                                            alt='Alina Photo'
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    {/* <div className="flex p-2">
                                        <span className={`text-[0.5rem] global-font md:text-lg ${exp === key ? 'text-background' : 'text-text'} `}>{experience.name}</span>
                                    </div> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Render Pane */}
                {
                    activePane === "Experiences" ?
                        <Experience data={data} exp={exp} />
                        : <></>
                }
            </div>
        </div >
    )
}

export default Work
