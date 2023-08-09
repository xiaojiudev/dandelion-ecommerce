import React from 'react'

interface GridCustomProps {
    smCol?: number,
    mdCol?: number,
    lgCol: number,
    xlCol: number,
    children: React.ReactNode
}

export default function GridCustom({ smCol = 2, mdCol = 3, lgCol = 4, xlCol = 6, children }: GridCustomProps) {
    return (
        <div className='w-full h-full'>
            <div className={`grid sm:grid-cols-${smCol} md:grid-cols-${mdCol} lg:grid-cols-${lgCol} xl:grid-cols-${xlCol} sm:gap-y-8 md:gap-7 lg:gap-8 xl:gap-x-4 xl:gap-y-8 justify-items-center`}>
                {children}
            </div>
        </div>
    )
}
