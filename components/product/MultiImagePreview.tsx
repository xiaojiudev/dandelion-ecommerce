'use client'

import React from 'react'
import { Image } from 'antd'

export default function MultiImagePreview() {
    return (
        <div className='flex items-center gap-3'>
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}

            >
                <Image
                    width={70}
                    height={70}
                    src="/avatar.jpg"
                    className='object-cover'
                />
                <Image
                    width={70}
                    height={70}
                    src="/avatar1.jpg"
                    className='object-cover'
                />
                <Image
                    width={70}
                    height={70}
                    preview={{
                        imageRender: () => (
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/dzocv-uSYDk"
                                title="YouTube video player"
                                className='border-0'
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        ),
                        toolbarRender: () => null,
                    }}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />

                
            </Image.PreviewGroup>

        </div>
    )
}
