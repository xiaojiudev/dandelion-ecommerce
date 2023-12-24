'use client'
import { Skeleton, Image } from "antd";
import React, { MutableRefObject, useState } from "react";
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance, } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import { DEFAULT_IMG_URL } from "@/constants/baseURL";

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

export default function ProductDetailSlider({ data, alt }: { data: string[], alt: string }) {
    // Sort the data list so that the mp4 file is always at the end of the array.
    const dataList = data.sort((a, b) => a.localeCompare(b))

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
        loop: data.length > 1,
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
        [ThumbnailPlugin(instanceRef)],

    )

    const renderSlideImage = dataList.length > 0 && !dataList.includes('') ? dataList?.map((item, index) => {
        const fileExtension = item.substring(item.lastIndexOf('.') + 1, item.length) || item;

        if (fileExtension === 'jpg' || fileExtension === 'png') {
            return (
                <div className="keen-slider__slide" key={item}>
                    <Image src={item} alt={`${alt}_${index}`} width={480} height={400} className="rounded object-cover" />
                </div>
            )
        } else if (fileExtension === 'mp4') {
            return (
                <div className="keen-slider__slide" key={item}>
                    <video
                        controls
                        muted
                        autoPlay
                        className='object-contain rounded'
                        height={400}
                        width={480}
                    >
                        <source src={item} type="video/mp4" />
                    </video>
                </div>
            )
        }
    }) : (
        <div className="keen-slider__slide">
            <Image src={DEFAULT_IMG_URL} alt={`${alt}`} width={480} height={400} className="rounded object-cover" />
        </div>
    );

    const renderThumbnailImage = dataList.length > 0 && !dataList.includes('') ? dataList?.map((item, index) => {
        const fileExtension = item.substring(item.lastIndexOf('.') + 1, item.length) || item;

        if (fileExtension === 'jpg' || fileExtension === 'png') {
            return (
                <div className="keen-slider__slide" key={item}>
                    <Image src={item} alt={`${alt}_${index}`} width={100} height={100} className="rounded object-cover" />
                </div>
            )
        } else if (fileExtension === 'mp4') {
            return (
                <div className="keen-slider__slide" key={item}>
                    <video
                        controls
                        muted
                        autoPlay
                        className='object-contain rounded'
                        width={100} 
                        height={100}
                    >
                        <source src={item} type="video/mp4" />
                    </video>
                </div>
            )
        }
    }) : (
        <div className="keen-slider__slide">
            <Image src={DEFAULT_IMG_URL} alt={`${alt}`} width={'auto'} height={'auto'} className="rounded object-cover" />
        </div>
    );

    return (
        <>
            <Skeleton.Image active className={`${loaded ? 'hidden' : ''} w-full h-[400px] object-cover rounded`} />
            <div ref={sliderRef} className={`${loaded ? "" : "invisible"} keen-slider mb-3 rounded`}>
                {renderSlideImage}
            </div>
            <div ref={thumbnailRef} className="keen-slider thumbnail">
                <Image.PreviewGroup
                    preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        imageRender: (originalNode, info) => {
                            // console.log(info.current)
                            // return (previewList[info.current])
                            return null;
                        },
                        toolbarRender: () => (null),
                        destroyOnClose: true,
                    }}
                >
                {renderThumbnailImage}
                </Image.PreviewGroup>
            </div>
        </>
    )
}
