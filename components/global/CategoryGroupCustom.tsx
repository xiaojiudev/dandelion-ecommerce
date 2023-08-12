'use client'
import React, { useState } from 'react'
import { ChevronRight, List } from 'lucide-react'

import { categoryItems } from '@/constants'

export default function CategoryGroupCustom() {

    const [activeId, setActiveId] = useState(1)

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, key:number) => {
        e.preventDefault()
        setActiveId(key)
        
    }

    return (
        <div className="max-w-xs flex flex-col rounded-lg bg-white shadow">
            <div className="inline-flex items-center border-b gap-x-3.5 py-3 px-4 text-sm font-medium text-primary-600 -mt-px  first:mt-0  focus:z-10 focus:outline-none select-none">
                <List size={16} />
                Category
            </div>

            {categoryItems && (
                categoryItems.map((category) => (
                    <a
                        className={`inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium -mt-px ${activeId === category.key ? 'text-primary-500' : 'text-gray-800'} first:mt-0 focus:z-10 focus:outline-none`}
                        href="#"
                        onClick={(e) => handleClick(e, category.key)}
                        key={category.key}
                    >
                        <ChevronRight size={16} strokeWidth={2.5} className={`${activeId === category.key ? 'opacity-100' : 'opacity-0'} `} />
                        {category.label}
                    </a>
                ))
            )}


        </div>
    )
}
