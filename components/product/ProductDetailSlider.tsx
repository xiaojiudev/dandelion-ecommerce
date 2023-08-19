'use client'
import React, { MutableRefObject, useState } from "react"
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance, } from "keen-slider/react"
import { Skeleton, Image } from "antd"

import "keen-slider/keen-slider.min.css"

function ThumbnailPlugin(mainRef: MutableRefObject<KeenSliderInstance | null>): KeenSliderPlugin {

    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx: number) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

export default function ProductDetailSlider() {

    const [loaded, setLoaded] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 1,
            spacing: 0,
        },
        created() {
            setLoaded(true)
        },
        loop: true,
        renderMode: 'performance',

    }, [
        (slider) => {
            let timeout: ReturnType<typeof setTimeout>
            let mouseOver = false
            function clearNextTimeout() {
                clearTimeout(timeout)
            }
            function nextTimeout() {
                clearTimeout(timeout)
                if (mouseOver) return
                timeout = setTimeout(() => {
                    slider.next()
                }, 3000)
            }
            slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                    mouseOver = true
                    clearNextTimeout()
                })
                slider.container.addEventListener("mouseout", () => {
                    mouseOver = false
                    nextTimeout()
                })
                nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
        },
    ])


    const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 15,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    return (
        <>
            <div ref={sliderRef} className={`keen-slider mb-3 rounded`}>
                <Skeleton.Image active={loaded ? false : true} className={`${loaded ? 'hidden' : 'block'} w-full aspect-square object-cover rounded`} />
                <div className="keen-slider__slide "><Image src="/avatar.jpg" alt="product" width={480} height={400} className="rounded object-cover" /></div>
                <div className="keen-slider__slide "><Image src="/avatar.jpg" alt="product" width={480} height={400} className="rounded object-cover" /></div>
                <div className="keen-slider__slide "><Image src="/avatar.jpg" alt="product" width={480} height={400} className="rounded object-cover" /></div>
                <div className="keen-slider__slide "><Image src="/avatar.jpg" alt="product" width={480} height={400} className="rounded object-cover" /></div>
                <div className="keen-slider__slide "><Image src="/avatar.jpg" alt="product" width={480} height={400} className="rounded object-cover" /></div>
                <div className="keen-slider__slide "><Image src="/avatar.jpg" alt="product" width={480} height={400} className="rounded object-cover" /></div>
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
                <div className="keen-slider__slide"><Image src="/avatar.jpg" alt="product" width='auto' height='auto' className="rounded object-cover" /></div>
                <div className="keen-slider__slide"><Image src="/avatar.jpg" alt="product" width='auto' height='auto' className="rounded object-cover" /></div>
                <div className="keen-slider__slide"><Image src="/avatar.jpg" alt="product" width='auto' height='auto' className="rounded object-cover" /></div>
                <div className="keen-slider__slide"><Image src="/avatar.jpg" alt="product" width='auto' height='auto' className="rounded object-cover" /></div>
                <div className="keen-slider__slide"><Image src="/avatar.jpg" alt="product" width='auto' height='auto' className="rounded object-cover" /></div>
                <div className="keen-slider__slide"><Image src="/avatar.jpg" alt="product" width='auto' height='auto' className="rounded object-cover" /></div>
            </div>

        </>
    )
}
