import React from 'react'

const NavBar = () => {
    return (
        <div className='h-20 flex w-screen pt-4 px-4'>
            <div className="flex flex-1 alina-container items-center">
                <span className='custom-text cursor-default'>Alina Velani</span>
            </div>
            <div className="about-work-skills flex justfiy-center items-center">
                <span className='custom-text'>About</span>
                <span className='custom-text'>Work</span>
                <span className='custom-text'>Skills</span>
            </div>
        </div>
    )
}

export default NavBar
