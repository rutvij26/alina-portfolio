import React from 'react'
import Image from "next/image";


const AppBgImg = () => {
    return <Image
        src='/bg.png'
        alt='background'
        style={{
            objectFit: 'cover',
            zIndex: -1
        }}
    />
}

export default AppBgImg
