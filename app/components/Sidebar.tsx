import React from 'react'
import Image from 'next/image'
import { IExperiences } from '../data/work'
import { IProjects } from '../data/projects'

interface SideBarProps {
    data: IExperiences | IProjects
    setExp: React.Dispatch<React.SetStateAction<TDataKey>>
    exp: TDataKey
}

type TDataKey = keyof IExperiences | keyof IProjects


const SideItemClass = (exp: TDataKey, key: TDataKey) => `
    flex justify-center items-center flex-1 border-b-2 border-text hover:cursor-pointer ${exp === key ? 'bg-hover' : ''}
`

const Sidebar = ({ data, setExp, exp }: SideBarProps) => {
    return (
        <div className="flex flex-[0.20] lg:flex-[0.20] flex-col  border-r-2 border-text">
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
                                    className="rounded-full object-cover h-10 w-10 md:h-20 md:w-20"
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
    )
}

export default Sidebar
