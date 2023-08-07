import React from 'react'

import { footerDescription, footerLinks, socialItems } from '@/constants'
import LogoSVG from '../LogoSVG'
import FloatButtonGroup from './FloatButtonGroup'



export default function FooterCustom() {
    return (
        <footer className='bg-[#fafafb]'>
            <div className="mx-auto max-w-screen-xl space-y-6 lg:space-y-8 py-8 px-4 sm:px-6 lg:px-12 " >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 py-8">
                    <div>
                        <LogoSVG imageShow={false} textClass='text-3xl' />

                        <p className="mt-4 max-w-xs text-gray-500 text-justify select-none">
                            {footerDescription.map((item, index) => (item.desc))}
                        </p>

                        <ul className="mt-8 flex justify-center items-center gap-6">
                            {socialItems.map((item, index) => (
                                <li key={index}>
                                    {item.link}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">

                        {footerLinks.map((item) => (
                            <div key={item.label}>
                                <p className="font-medium text-gray-900">{item.label}</p>
                                <ul className="mt-6 space-y-4 text-sm">
                                    {item.links.map((link, index) => (
                                        <li key={index}>
                                            {link.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
                <p className="text-xs text-gray-500 text-center">
                    &copy; 2023. Dandelion. All rights reserved.
                </p>
            </div>

            <FloatButtonGroup  />
        </footer>
    )
}
