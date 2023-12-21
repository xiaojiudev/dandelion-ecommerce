'use client'
import React from 'react'
import { Rate } from 'antd'

import { ratingStatus } from '@/constants'

type RatingProps = {
    className?: string;
    allowHalf?: boolean;
    disabled?: boolean;
    value: number;
}

export default function ProductRating({ value, className, allowHalf, disabled }: RatingProps) {

    return (
        <span>
            <Rate tooltips={ratingStatus} allowHalf={allowHalf} disabled={disabled} value={value} className={` ${className}`} />
        </span>
    )
}
