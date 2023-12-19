'use client'
import React, { useState } from 'react'

type HeartProps = {
    id: number | string;
    className?: string,
}

export default function HeartActive({ id, className }: HeartProps) {

    const [color, setColor] = useState({ active: false, fill: 'rgba(0, 0, 0, 0.5)', stroke: '#fff' })

    const handleAddToFavorite = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, id: number | string) => {
        e.preventDefault()
        console.log("Add product to favorites with id: " + id);
        
        if (!color.active) {
            setColor({ active: true, fill: '#ff385c', stroke: '#fff' });
        } else {
            setColor({ active: false, fill: 'rgba(0, 0, 0, 0.5)', stroke: '#fff' })
        }
    }

    return (
        <p className={`p-2 cursor-pointer ${className}`} onClick={e => handleAddToFavorite(e, id)}>
            <svg
                fill={color.fill}
                stroke={color.stroke}
                className="h-6 w-6"
                style={{
                    transition: "all .2s ease",
                    WebkitTransition: "all .2s ease",
                    MozTransition: "all .2s ease"
                }}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                </path>
            </svg>
        </p>
    )
}
