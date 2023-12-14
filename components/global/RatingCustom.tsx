'use client'
import React, { useState } from 'react'
import { Rate } from 'antd'

import { ratingDescArr } from '@/constants'

type RatingProps = {
    className?: string,
    allowHalf?: boolean,
    disabled?: boolean,
    value: number,
}

export default function RatingCustom({ value, className, allowHalf, disabled }: RatingProps) {

    const [initValue, setInitValue] = useState(value)

    return (
        <>
            <span>
                <Rate tooltips={ratingDescArr} allowHalf={allowHalf} disabled={disabled} onChange={setInitValue} value={initValue} className={` ${className}`} />
            </span>
        </>
    )
}
