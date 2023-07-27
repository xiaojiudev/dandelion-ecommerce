'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from 'antd'


const { Header } = Layout

export default function HeaderCustom() {


    return (
        <Header className='flex items-center justify-between sticky top-0 z-50 h-16 w-full leading-[64px] bg-[#7dbcea] text-white text-center'>
            <a href="/" className="flex items-center">
                <Image src="https://flowbite.com/docs/images/logo.svg" width={36} height={36} quality={100} priority={true} className="mr-3 object-cover" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto " >
                <Link href="/">Home</Link>
                <Link href="/product">Navbar</Link>
            </div>
            <div className="flex items-center ">
                button
            </div>
        </Header>
    )
}
