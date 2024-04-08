import React from 'react'
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
    return (
        <div className='h-20 flex w-screen pt-4 px-4 '>
            <div className="flex flex-1 alina-container navbar-heading items-center">
                <span className='custom-text cursor-default tracking-widest'>Alina Velani</span>
            </div>
            <div className="about-work-skills flex justfiy-center items-center">
                <div className="px-2">
                    <SocialIcon
                        url="https://www.linkedin.com/in/alina-velani-37b4b4180/"
                        bgColor='#463239'
                        fgColor='#ffc09f'
                    />
                </div>
                <div className="px-2">
                    <SocialIcon
                        url="https://www.instagram.com/alina_velani28/"
                        bgColor='#463239'
                        fgColor='#ffc09f'
                    />
                </div>
                <div className="px-2">
                    <SocialIcon
                        url="https://twitter.com/alina_velani28"
                        bgColor='#463239'
                        fgColor='#ffc09f'
                    />
                </div>
                <div className="px-2">
                    <SocialIcon
                        url="mailto:alinavelani99@gmail.com"
                        bgColor='#463239'
                        fgColor='#ffc09f'
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar
