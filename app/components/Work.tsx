'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IExperiences, experiences } from '../data/work'
import { IProjects, projects } from '../data/projects'
import TabBar, { TTab } from './TabBar'



const dataPaneMap: Record<TTab, IExperiences | IProjects> = {
    'Experiences': experiences,
    'Projects': projects
}

type TDataKey = keyof IExperiences | keyof IProjects

const SideItemClass = (exp: TDataKey, key: TDataKey) => `
    flex justify-center items-center flex-[0.1] border-b-2 border-text hover:cursor-pointer ${exp === key ? 'bg-hover' : ''}
`

const Work = () => {
    const [activePane, setActivePane] = useState<TTab>("Experiences")
    const [data, setData] = useState<IExperiences | IProjects>(experiences)
    const [exp, setExp] = useState<TDataKey>("1")

    useEffect(() => {
        setData(dataPaneMap[activePane])
    }, [activePane])

    console.log(exp)

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
                                    className="flex flex-1  items-center justify-around">
                                    <div className="flex p-2">
                                        <Image
                                            src={experience.photo_url}
                                            width={50}
                                            height={50}
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
                <div className=" flex  flex-col flex-[0.90] border-text  p-4">
                    <div className="flex  justify-between">
                        <div className="flex">
                            <span className='custom-text cursor-default text-2xl'>{data[exp].name}</span>
                        </div>
                        <div className="flex">
                            <span className='custom-text cursor-default text-2xl'>{data[exp].title}</span>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-between flex-col py-2 items-center">
                        <div className="py-2 flex justify-center">
                            <span className='global-font custom-text text-2xl text-bold text-text  uppercase  cursor-default'>
                                Brands
                            </span>
                        </div>
                        <div className="flex flex-row justify-center">
                            {
                                data[exp]?.brands?.map((brand, index) => (
                                    <div key={index} className="p-2">
                                        <Image
                                            key={index}
                                            src={brand}
                                            alt='brand'
                                            width={100}
                                            height={100}
                                            className='rounded-full'
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex max-w-[70%] p-2 border border-text mt-4">
                            <ul>
                                {
                                    data[exp]?.points?.map((point) => (
                                        <li key={point}>
                                            <span className="global-font text-text">
                                                {" - "}{point}
                                            </span>
                                        </li>

                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Work
