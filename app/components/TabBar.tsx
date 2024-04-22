import React from 'react'
import Tab from './Tab'

export type TTab = 'Experiences' | 'Projects'

export const tabs: TTab[] = [
    'Experiences',
    'Projects'
]

interface ITabBarProps {
    setActivePane: React.Dispatch<React.SetStateAction<TTab>>,
    activePane: TTab
}

const TabBar = ({
    setActivePane,
    activePane,
}: ITabBarProps) => {
    return (
        <div className="flex md:justify-left min-w-full md:w-[80vw]">
            {
                tabs.map((tab) => (
                    <Tab key={tab} setActivePane={setActivePane} activePane={activePane} tabName={tab} />
                ))
            }
        </div>
    )
}

export default TabBar
