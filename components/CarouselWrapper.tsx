'use client'
import React from 'react'
import { Carousel } from 'antd'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
                <a>
                    <img src="/avatar.jpg" alt="avatar" className='object-cover max-h-60 w-full' />
                </a>
                <a>
                    <img src="/avatar.jpg" alt="avatar" className='object-cover max-h-60 w-full' />
                </a>
                <a>
                    <img src="/avatar.jpg" alt="avatar" className='object-cover max-h-60 w-full' />
                </a>
                <a>
                    <img src="/avatar.jpg" alt="avatar" className='object-cover max-h-60 w-full' />
                </a>
            </Carousel>
        </div>
    )
}
