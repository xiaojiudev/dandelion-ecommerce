import React from 'react'

import { Star } from 'lucide-react'
import { Progress } from 'antd'

type RatingValue = 1 | 2 | 3 | 4 | 5

type ProgressRatingProps = {
    rating: RatingValue,
    percent: number
}

export default function ProgressRating({ rating, percent }: ProgressRatingProps) {
    return (
        <>
            <div className='flex items-center gap-3 w-4/5 h-[22px] select-none'>
                <div className='font-normal text-base inline-flex gap-1'>
                    <span>{rating}</span>
                    <span>★</span>
                </div>
                <Progress percent={percent} showInfo={false} strokeColor={'#fadb14'} className='m-0' size={[180, 10]} />
                <div className='font-normal text-sm text-gray-600'>{percent}%</div>
            </div>
        </>
    )
}
