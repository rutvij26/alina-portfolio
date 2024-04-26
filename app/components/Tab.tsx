import React from 'react'
import { TTab } from './TabBar'

interface ITabProps {
    setActivePane: React.Dispatch<React.SetStateAction<TTab>>,
    tabName: TTab,
    activePane: TTab
}

const tabStyleClass = (activePane: string, tabName: TTab) => `
        flex justify-center items-center h-[5vh] 
        text-text border-l-2 border-t-2 border-r-2
        hover:cursor-pointer uppercase 
        transition-all ease-in-ease-out duration-300
        ${activePane === tabName ? `z-100 h-100 w-[80%]` : "w-[20%]"}
        `
// ${activePane === tabName ? `border-b-4 border-b-hover` : ""} 

const Tab = ({
    setActivePane,
    tabName,
    activePane
}: ITabProps) => {
    return (
        <div onClick={() => setActivePane(tabName)} className={tabStyleClass(activePane, tabName)}>
            <span className='global-font overflow-clip text-ellipsis text-md md:text-lg lg:text-xl'>{tabName}</span>
        </div>
    )
}

export default Tab
