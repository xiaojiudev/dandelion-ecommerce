import React from 'react'
import CardCustom from '../global/CardCustom'
import { Pagination } from 'antd'

export default function ProductsPagination() {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-full h-full mb-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-y-8 md:gap-7 lg:gap-6 xl:gap-x-4 xl:gap-y-6 justify-items-center'>
                <CardCustom />
                <CardCustom />
                <CardCustom />
                <CardCustom />
                <CardCustom />
                <CardCustom />
                <CardCustom />
                <CardCustom />
            </div>
            <div className='flex items-center justify-center'>
                <Pagination defaultCurrent={1} total={50} />
            </div>

        </div>
    )
}
