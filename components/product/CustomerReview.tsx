import React from 'react'

export default function CustomerReview() {
    return (
        <div className='flex flex-col justify-center gap-3 divide-y divide-slate-200'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-semibold text-gray-800'>Customer Reviews</h2>
                <div>Sort by</div>
            </div>
            <div className='pt-3'>
                Comment
            </div>
            <div className='pt-3'>
                Comment
            </div>
        </div>
    )
}
