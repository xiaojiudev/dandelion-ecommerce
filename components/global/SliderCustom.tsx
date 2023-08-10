'use client'
import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

import "keen-slider/keen-slider.min.css"
import CardCustom from './CardCustom'


export default function SliderCustom() {

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        slides: {
            perView: 5,
            spacing: 10,
        },
        breakpoints: {
            "(min-width: 280px)": {
                slides: { perView: 1, spacing: 5 },
            },
            "(min-width: 540px)": {
                slides: { perView: 2, spacing: 5 },
            },
            "(min-width: 768px)": {
                slides: { perView: 3, spacing: 5 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 4, spacing: 10 },
            },
            "(min-width: 1280px)": {
                slides: { perView: 5, spacing: 10 },
            },
        },
        drag: false,
        renderMode: 'performance'
    })




    return (
        <>
            <div className="navigation-wrapper relative ml-3">
                <div ref={sliderRef} className="keen-slider ">
                    <div className={`keen-slider__slide flex items-center justify-center h-[330px] ${loaded ? '' : 'hidden'}`}><CardCustom /></div>
                    <div className={`keen-slider__slide flex items-center justify-center h-[330px] ${loaded ? '' : 'hidden'}`}><CardCustom /></div>
                    <div className={`keen-slider__slide flex items-center justify-center h-[330px] ${loaded ? '' : 'hidden'}`}><CardCustom /></div>
                    <div className={`keen-slider__slide flex items-center justify-center h-[330px] ${loaded ? '' : 'hidden'}`}><CardCustom /></div>
                    <div className={`keen-slider__slide flex items-center justify-center h-[330px] ${loaded ? '' : 'hidden'}`}><CardCustom /></div>
                    <div className={`keen-slider__slide flex items-center justify-center h-[330px] ${loaded ? '' : 'hidden'}`}><CardCustom /></div>
                    <div className={`keen-slider__slide flex items-center justify-center h-[330px] ${loaded ? '' : 'hidden'}`}><CardCustom /></div>
                    <div className={`keen-slider__slide flex items-center justify-center h-[330px] ${loaded ? '' : 'hidden'}`}><CardCustom /></div>
                </div>

                {loaded && instanceRef.current && (
                    <>
                        <div
                            className={`bg-white border border-slate-100 w-10 h-10 rounded-full shadow absolute top-1/2 -translate-y-[31px] -left-12 flex items-center justify-center cursor-pointer ${currentSlide === 0 ? 'opacity-70 transition-opacity' : 'opacity-100'} `}
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                        >
                            <ChevronLeft strokeWidth={1.5} size={22} className='text-primary-500' />
                        </div>
                        <div
                            className={`bg-white border border-slate-100 w-10 h-10 rounded-full shadow absolute top-1/2 -translate-y-[31px] -right-9 flex items-center justify-center cursor-pointer ${currentSlide === instanceRef.current.track.details.maxIdx ? 'opacity-70 transition-opacity' : 'opacity-100'} `}
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                        >
                            <ChevronRight strokeWidth={1.5} size={22} className='text-primary-500' />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}


