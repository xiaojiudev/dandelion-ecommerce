import React from 'react'
import Image from 'next/image'

interface LogoSVGProps {
    imageShow?: boolean,
    imgWidth?: number,
    imgHeight?: number,
    textClass?: string,
}

export default function LogoSVG({ imageShow = true, imgWidth = 36, imgHeight = 36, textClass = "text-2xl", ...props }: LogoSVGProps) {
    return (
        <>
            <a className='flex items-center select-none' href='/'>
                {imageShow && <Image src="/logo.svg" width={imgHeight} height={imgHeight} quality={100} priority={true} className="mr-3 object-cover" alt="Dandelion Logo" />}
                <div className='select-none w-full text-center'>
                    <span className={`self-center ${textClass} font-dancing-script font-bold whitespace-nowrap text-primary-400 tracking-wide`}>Dandelion</span>
                </div>
            </a>
        </>
    )
}
