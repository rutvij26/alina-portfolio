'use client'
import React, { useEffect, useState } from 'react'
import { IExperiences, experiences } from '../data/work'
import { IProjects, projects } from '../data/projects'
import TabBar, { TTab } from './TabBar'
import Experience from './Experience'
import Project from './Project'
import Sidebar from './Sidebar'

const dataPaneMap: Record<TTab, IExperiences | IProjects> = {
    'Experience': experiences,
    'Projects': projects
}


type TDataKey = keyof IExperiences | keyof IProjects


const Work = () => {
    const [activePane, setActivePane] = useState<TTab>("Projects")
    const [data, setData] = useState<IExperiences | IProjects>(experiences)
    const [exp, setExp] = useState<TDataKey>("1")

    useEffect(() => {
        setData(dataPaneMap[activePane])
        setExp("1")
    }, [activePane])

    useEffect(() => {
        const projects = document?.getElementById('project')
        if (projects) {
            projects.scrollTop = 0;
        }
        const experience = document.getElementById('experience')
        if (experience) {
            experience.scrollTop = 0;
        }
    }, [exp])

    return (
        <div className='global-section mt-0 md:mt-8 flex-col transition-all delay-150 ease-in-ease-out h-screen items-center justify-center'>
            <TabBar activePane={activePane} setActivePane={setActivePane} />
            {/* Canvas */}
            <div className="flex shadow-2xl h-[65vh] md:h-[70vh] w-[100vw] md:w-[80vw] border-r-2 border-y-2 border-text">
                {/* SideBar */}
                <Sidebar data={data} exp={exp} setExp={setExp} />
                {/* Render Pane */}
                {
                    activePane === "Experience" ?
                        <Experience data={data} exp={exp} />
                        : <Project data={data} project={exp} />
                }
            </div>
        </div >
    )
}

export default Work
