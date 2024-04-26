import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { socials } from '../data/socials'
import config from '@/tailwind.config'

const NavBar = () => {
    return (
        <div className='h-20 flex max-h-screen w-screen pt-4 px-4 '>
            <div className="flex flex-1 alina-container navbar-heading items-center">
                <span className='custom-text cursor-default tracking-widest'>Alina Velani</span>
            </div>
            <div className="about-work-skills flex justfiy-center items-center">
                {
                    socials.map((social) => (
                        <div className="px-2" key={social.name}>
                            <SocialIcon
                                url={social.url}
                                bgColor={(config?.theme?.colors as any)?.text ?? "#000"}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NavBar
