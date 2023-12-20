import React from 'react'
import Image from 'next/image'
import { Avatar } from 'antd'
import { ThumbsDown, ThumbsUp } from 'lucide-react'

import RatingCustom from '../global/RatingCustom'
import MultiImagePreview from './MultiImagePreview'

export default function UserReview() {
    return (
        <>
            <div className='p-3'>
                <div className='flex flex-row'>
                    <div className='basis-1/6'>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <Avatar src={<Image src="/avatar.jpg" alt="avatar" sizes="100vw" quality={70} width={50} height={50}/>} size={46} />
                            <div className='font-medium text-gray-800'>Tessa Jacob</div>
                        </div>
                    </div>
                    <div className='basis-5/6'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-sm font-semibold text-gray-700'>Amazing color</h2>
                            <div className='flex justify-between items-center'>
                                <RatingCustom value={4} disabled className='text-sm' />
                                <span className='text-xs font-normal text-gray-600'>June 22, 2023</span>
                            </div>

                            {/* User Comment */}
                            <p className='text-sm font-normal text-gray-600'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus facere qui laborum? Deserunt cumque maxime, est id ipsum obcaecati itaque, beatae aut officiis sapiente nobis adipisci ullam molestiae illum!
                            </p>

                            {/* Reviews: Image & Video */}
                            <MultiImagePreview />
                            
                            {/* Like - Dislike */}
                            <div className='flex flex-row gap-5 justify-items-start items-center mt-5'>
                                <div className='text-sm font-medium text-gray-700'>Was this helpful?</div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className='flex flex-row items-center gap-1'>
                                        <ThumbsUp size={12} className='cursor-pointer' />
                                        <span>12</span>
                                    </div>
                                    <div className='flex flex-row items-center gap-1'>
                                        <ThumbsDown size={12} className='cursor-pointer' />
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
