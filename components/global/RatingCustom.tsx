'use client'
import React, { useState } from 'react'
import { Rate } from 'antd'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

interface RatingProps {
    className?: string,
}

export default function RatingCustom({ className }: RatingProps) {

    const [value, setValue] = useState(3)

    return (
        <>
            <span>
                <Rate tooltips={desc} onChange={setValue} value={value} className={` ${className}`} />
            </span>
        </>
    )
}
