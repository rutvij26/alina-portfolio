import React from 'react'
import Tab from './Tab'

export type TTab = 'Experience' | 'Projects'

export const tabs: TTab[] = [
    'Projects',
    'Experience',
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
        <div className="flex shadow-2xl  min-w-full ">
            {
                tabs.map((tab, index) => (
                    <Tab key={tab} setActivePane={setActivePane} activePane={activePane} tabName={tab} />
                ))
            }
        </div>
    )
}

export default TabBar
