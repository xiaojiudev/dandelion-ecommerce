import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='my-10'>
            <div className='flex flex-wrap min-h-[calc(100vh-260px)] max-w-5xl m-auto'>
                <div className='w-4/5 mr-10'>
                    <div className='flex flex-col min-h-[520px]'>
                        <div className='h-[112px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-t-lg relative'>
                            <div className='absolute z-10 bg-img-confetti w-full h-full'>
                            </div>
                        </div>
                        <div className='flex-1 relative bg-white p-4 rounded-b-lg'>
                            <Image src="/assets/img/congrat.svg" sizes='100vw' alt='congrat' width={150} height={150} quality={100} className='absolute object-cover'/>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    right
                </div>
            </div>
        </div >
    )
}
