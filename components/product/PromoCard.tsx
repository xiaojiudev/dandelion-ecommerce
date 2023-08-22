import React from 'react'

import ButtonCustom from '../header/ButtonCustom'

export default function PromoCard() {
    return (
        <>
            <div className='h-24 w-full flex divide-x divide-slate-200 bg-primary-50 border-zigzag border-y border-r rounded-r-sm'>
                <div className='flex flex-col items-start justify-center gap-3 p-3 basis-2/3 text-xs select-none'>
                    <div className='text-primary-500'>
                        <div className='font-medium text-sm'><span>$2</span> off</div>
                        <div>Min. Spend <span>$30</span></div>
                    </div>
                    <div className='text-gray-400'>Valid Till: <span>15.09.2023</span></div>
                </div>
                <div className='basis-1/3 flex items-center justify-center'>
                    <ButtonCustom href='#' text='Claim' size='small' className='text-xs' />
                </div>
            </div>
        </>
    )
}
