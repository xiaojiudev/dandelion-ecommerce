'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button, ConfigProvider, Skeleton } from 'antd';


import HeartActive from './HeartActive';


type CardProps = {
    href?: string,
    sale?: number,
    imgSrc?: string,
    cardTitle?: string,
    cardPrice?: number,
    productSold?: number
    loading?: boolean
}


export default function CardCustom({ href, sale, imgSrc, cardTitle, cardPrice, productSold, loading = false, ...props }: CardProps) {

    const [color, setColor] = useState({ active: false, fill: 'rgba(0, 0, 0, 0.5)', stroke: '#fff' })

    const heartClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        e.preventDefault()
        if (!color.active) {
            setColor({ active: true, fill: '#ff385c', stroke: '#fff' });
            console.log(color);

        } else {
            setColor({ active: false, fill: 'rgba(0, 0, 0, 0.5)', stroke: '#fff' })
            console.log(color);
        }
    }

    // const [loading, setLoading] = useState(false)

    return (
        <>
            <Link href='/product/1' target='' className="relative min-w-[180px] max-w-[200px] h-[285px] block bg-white text-gray-900 shadow-md rounded-3xl p-2 cursor-pointer hover:-translate-y-1 transition-all select-none">
                {loading ? (
                    <>
                        <div className="rounded-2xl relative overflow-hidden">
                            <Skeleton.Image active className='h-44 w-full' />
                        </div>
                        <div className="my-4 pl-2 mb-2 flex flex-col justify-between items-stretch">
                            <Skeleton paragraph={{ rows: 1, width: '100%' }} active />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="rounded-2xl relative overflow-hidden">
                            <span className="absolute left-2 top-2 mt-2 z-10 rounded-full bg-primary-700 px-2 text-center text-sm font-medium text-white select-none">-39%</span>
                            {/* <img className="h-44 rounded-2xl w-full object-cover hover:scale-105 transition duration-500" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" /> */}
                            <Image src={`https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg`} alt='Card' priority quality={100} sizes="100vw" width={500} height={300} className='h-44 rounded-2xl w-full object-cover hover:scale-105 transition duration-500'/>
                            <HeartActive className='absolute right-2 top-2' />
                        </div>
                        <div className="my-4 pl-2 mb-2 flex flex-col justify-between items-stretch">
                            <div className=''>
                                <p className="text-sm tracking-tight font-medium line-clamp-1 text-gray-900 mb-0">Nike Air MX Super 2500 - Red</p>
                            </div>
                            <div className='flex justify-between items-center pt-2'>
                                <span className="text-2xl font-bold text-slate-900">$449</span>
                                <div className='text-xs text-[#0000008a]'>2.6k sold</div>
                            </div>
                        </div>

                        {/* Button */}
                        <ConfigProvider theme={{
                            token: {
                                colorPrimary: '#e8dfda'
                            },
                        }}>
                            <Button
                                className="flex flex-col-reverse mb-1 mr-4 cursor-pointer bg-[#e8dfda] w-9 h-9 rounded-full items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                                onClick={(e) => { e.preventDefault() }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </Button>
                        </ConfigProvider>
                    </>
                )}


            </Link>

        </>
    )
}
