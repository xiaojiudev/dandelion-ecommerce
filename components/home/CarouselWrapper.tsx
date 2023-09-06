'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Carousel } from 'antd'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { carouselItems } from '@/constants'

interface AntdArrowProps {
    currentSlide?: number
    slideCount?: number
}

export default function CarouselWrapper() {

    const LeftButtonFix = ({ currentSlide, slideCount, ...props }: AntdArrowProps) => (
        <ChevronLeft {...props} size={32} strokeWidth={3} />
    )

    const RightButtonFix = ({ currentSlide, slideCount, ...props }: AntdArrowProps) => (
        <ChevronRight {...props} size={32} strokeWidth={3} />
    )

    const settings = {
        autoplay: true,
        arrows: true,
        prevArrow: (<LeftButtonFix />),
        nextArrow: (<RightButtonFix />)
    }

    return (
        <div className='relative'>
            <Carousel {...settings}>
                {carouselItems?.map((item, index) => (
                    <Link href={item?.href} key={index} prefetch>
                        {/* <img src={item?.img} alt={item?.alt} className='object-cover max-h-60 w-full' /> */}
                        <Image src={item?.img} alt={item?.alt} sizes="100vw" priority quality={100} width={500} height={300} className='object-cover max-h-60 w-full'/>
                    </Link>
                ))}
            </Carousel>
        </div>
    )
}
