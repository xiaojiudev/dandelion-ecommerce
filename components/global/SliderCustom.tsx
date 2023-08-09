'use client'
import React, { useEffect, useState } from 'react'
import { useKeenSlider } from "keen-slider/react"

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
        drag: false
    })

    console.log(currentSlide, instanceRef.current);


    return (
        <>
            <div className="navigation-wrapper relative ml-3">
                <div ref={sliderRef} className="keen-slider ">
                    <div className="keen-slider__slide number-slide1 h-[300px] "><CardCustom /></div>
                    <div className="keen-slider__slide number-slide2 h-[300px]"><CardCustom /></div>
                    <div className="keen-slider__slide number-slide3 h-[300px]"><CardCustom /></div>
                    <div className="keen-slider__slide number-slide4 h-[300px]"><CardCustom /></div>
                    <div className="keen-slider__slide number-slide5 h-[300px]"><CardCustom /></div>
                    <div className="keen-slider__slide number-slide6 h-[300px]"><CardCustom /></div>
                    <div className="keen-slider__slide number-slide7 h-[300px]"><CardCustom /></div>
                    <div className="keen-slider__slide number-slide8 h-[300px]"><CardCustom /></div>
                </div>

                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                            myClass='absolute top-1/2 -translate-y-[30px] -left-6'
                        />

                        <Arrow
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.maxIdx
                            }
                            myClass='absolute top-1/2 -translate-y-[30px] -right-2'
                        />
                    </>
                )}
            </div>
        </>
    )
}

interface ArrowProps {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
    myClass?: string
}

function Arrow({ disabled, left, onClick, myClass }: ArrowProps) {


    return (
        <svg
            onClick={onClick}
            className={`arrow ${left ? "arrow--left" : "arrow--right"
                } ${disabled ? "fill-red-500" : ""} ${myClass}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
        >
            {left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

