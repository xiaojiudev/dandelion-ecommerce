'use client'
import React, { useState } from 'react'
import { Button, ConfigProvider, Skeleton } from 'antd';


interface CardProps {
    href?: string,
    sale?: number,
    imgSrc?: string,
    cardTitle?: string,
    cardPrice?: number,
    productSold?: number
}


export default function CardCustom({ href, sale, imgSrc, cardTitle, cardPrice, productSold, ...props }: CardProps) {

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

    const [loading, setLoading] = useState(false)


    return (
        <>
            <a href='https://translate.google.com/' target='_blank' className="relative min-w-[180px] max-w-[200px] h-[285px] block bg-white text-gray-900 shadow-md rounded-3xl p-2 cursor-pointer hover:-translate-y-1 transition-all">
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
                            <img className="h-44 rounded-2xl w-full object-cover hover:scale-105 transition duration-500" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg" />
                            <p className="absolute right-2 top-2 p-2 cursor-pointer " onClick={heartClick}>
                                <svg
                                    fill={color.fill}
                                    stroke={color.stroke}
                                    className="h-6 w-6"
                                    style={{
                                        transition: "all .2s ease",
                                        WebkitTransition: "all .2s ease",
                                        MozTransition: "all .2s ease"
                                    }}
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                                    </path>
                                </svg>
                            </p>
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
                    </>
                )}

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
            </a>

        </>
    )
}
