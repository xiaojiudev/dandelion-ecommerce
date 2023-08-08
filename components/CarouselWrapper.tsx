// 'use client'
import React from 'react'
import { Carousel } from 'antd'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface AntdArrowProps {
    currentSlide?: number
    slideCount?: number
}

export default function CarouselWrapper() {

    const LeftButtonFix = ({ currentSlide, slideCount, ...props }: AntdArrowProps) => (
        <ChevronLeft {...props} />
    );

    const RightButtonFix = ({ currentSlide, slideCount, ...props }: AntdArrowProps) => (
        <ChevronRight {...props} />
    );


    const SETTINGS = {
        prevArrow: (
            <LeftButtonFix />
        ),
        nextArrow: (
            <RightButtonFix />
        )
    };

    return (
        <div className='relative'>
            <Carousel autoplay arrows {...SETTINGS}>
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
