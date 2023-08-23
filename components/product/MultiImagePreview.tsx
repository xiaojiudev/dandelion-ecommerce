'use client'

import React, { useState } from 'react'
import { Image } from 'antd'

export default function MultiImagePreview() {

    const sourceList = [
        {
            type: 'img',
            src: '/avatar.jpg',
            sizeSmall: 70,
            sizeZoom: 500
        },
        {
            type: 'img',
            src: '/avatar1.jpg',
            sizeSmall: 70,
            sizeZoom: 500
        },
        {
            type: 'video',
            src: '/1.mp4',
            thumb: '/thumbnail.png',
            sizeSmall: 70,
            sizeZoom: 500
        },

    ]

    const previewList = sourceList.map((item, index) => {
        if (item.type === 'img') {
            return (
                <Image
                    width={item.sizeZoom}
                    height={item.sizeZoom}
                    src={item.src}
                    className='object-cover'
                    preview={false}
                />
            )
        }

        if (item.type === 'video') {
            return (
                <video
                    controls
                    muted
                    autoPlay
                    className='w-[560px] h-[315px] object-contain'
                >
                    <source src={item.src} type="video/mp4" />
                </video>
            )
        }

    })

    const thumbList = sourceList.map((item, index) => (
        <Image
            key={index}
            width={item.sizeSmall}
            height={item.sizeSmall}
            src={item.thumb ?? item.src}
            className='object-cover rounded-sm'
        />
    ))

    return (
        <div className='flex items-center gap-3'>
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    imageRender: (originalNode, info) => {
                        // console.log(info.current)

                        return (previewList[info.current])
                    },
                    destroyOnClose: true,

                }}
            >
                {/* <Image
                    width={70}
                    height={70}
                    src="/avatar.jpg"
                    className='object-cover rounded-sm'
                />
                <Image
                    width={70}
                    height={70}
                    src="/avatar1.jpg"
                    className='object-cover rounded-sm'
                />
                <Image
                    width={70}
                    height={70}
                    src="/thumbnail.png"
                    className='object-cover rounded-sm'
                /> */}
                {thumbList}

            </Image.PreviewGroup>

        </div>
    )
}
