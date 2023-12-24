'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Image as ImgAntd } from 'antd'

export default function MultiImagePreview() {

    const sourceList = [
        {
            type: 'img',
            src: '/avatar.jpg',
            sizeSmall: 80,
            sizeLg: 500
        },
        {
            type: 'img',
            src: '/avatar1.jpg',
            sizeSmall: 80,
            sizeLg: 500
        },
        {
            type: 'video',
            src: '/1.mp4',
            thumb: '/thumbnail.png',
            sizeSmall: 80,
            sizeLg: 500
        },
        {
            type: 'img',
            src: '/avatar1.jpg',
            sizeSmall: 80,
            sizeLg: 500
        },
        {
            type: 'video',
            src: '/1.mp4',
            thumb: '/thumbnail.png',
            sizeSmall: 80,
            sizeLg: 500
        },

    ]

    const previewList = sourceList.map((item, index) => {
        if (item.type === 'img') {
            return (
                // <img src={item.src} alt="reviews" key={index} width={item.sizeLg} height={item.sizeLg} className='object-cover rounded' />
                <Image src={item.src} alt="reviews" key={index} width={item.sizeLg} height={item.sizeLg} className='object-cover rounded' />
            )
        }

        if (item.type === 'video') {
            return (
                <video
                    controls
                    muted
                    autoPlay
                    className='w-[560px] h-[315px] object-contain rounded'
                    key={index}
                >
                    <source src={item.src} type="video/mp4" />
                </video>
            )
        }

    })

    const thumbList = sourceList.map((item, index) => (
        <ImgAntd
            key={index}
            width={item.sizeSmall}
            height={item.sizeSmall}
            src={item.thumb ?? item.src}
            alt={item.type}
            className='object-cover rounded-sm'

        />
    ))

    return (
        <div className='flex items-center gap-3'>
            <ImgAntd.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    imageRender: (originalNode, info) => {
                        // console.log(info.current)
                        return (previewList[info.current])
                    },
                    toolbarRender: () => (null),
                    destroyOnClose: true,
                }}
            >
                {thumbList}
            </ImgAntd.PreviewGroup>
        </div>
    )
}
