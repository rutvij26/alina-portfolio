import React from 'react'
import { TTab } from './TabBar'

interface ITabProps {
    setActivePane: React.Dispatch<React.SetStateAction<TTab>>,
    tabName: TTab,
    activePane: TTab
}

const tabStyleClass = (activePane: string, tabName: TTab) => `
        flex justify-center items-center min-h-[5vh] w-[50%] md:w-[20%] 
        border-x-2 border-t-2 border-text text-text 
        hover:cursor-pointer uppercase 
        ${activePane === tabName ? 'bg-hover-200 text-black-900' : ''}
        `

const Tab = ({
    setActivePane,
    tabName,
    activePane
}: ITabProps) => {
    return (
        <div onClick={() => setActivePane(tabName)} className={tabStyleClass(activePane, tabName)}>
            <span className='global-font text-lg'>{tabName}</span>
        </div>
    )
}

export default Tab
