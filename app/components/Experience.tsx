import React from 'react'
import Image from 'next/image'
import { IExperiences } from '../data/work'

const Experience = ({ data, exp }: { data: IExperiences, exp: keyof IExperiences }) => {
    return (
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
                                    width={150}
                                    height={150}
                                    className='rounded-full'
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="flex min-h-[50%] max-w-[70%] p-2 border border-text mt-4">
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
    )
}

export default Experience
