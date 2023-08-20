'use client'
import React from 'react'
import { InputNumber } from 'antd'
import { Plus, ShoppingCart } from 'lucide-react'

import RatingCustom from '../global/RatingCustom'
import HeartActive from '../global/HeartActive'
import ProvinceCoordinate from './ProvinceCoordinate'
import ButtonCustom from '../header/ButtonCustom'




export default function ProductDetailInfo() {

    const handleInputChange = (value: number | null) => {
        console.log('changed', value);
    }

    return (
        <div className='flex flex-col px-5 gap-5 text-gray-900 text-base'>
            <h1 className='text-3xl font-semibold '>Apple Watch Series 7</h1>
            <div className='flex justify-between items-center text-sm text-slate-800 select-none'>
                <div className='divide-x'>
                    <RatingCustom value={4.6} disabled allowHalf className='text-sm pr-4' />
                    <span className='px-4 '>145 Reviews</span>
                    <span className='px-4 '>289 Sold</span>
                </div>
                <div className='pl-0'><HeartActive /></div>
            </div>
            <div className='flex items-start gap-3'>
                <h2 className='font-semibold text-base'>Describe:</h2>
                <p className='text-justify text-base text-gray-800'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aut suscipit possimus maiores pariatur veritatis, laboriosam, perspiciatis culpa quae sint tempora atque asperiores dolorem rem quasi, voluptas officia delectus reprehenderit?
                </p>
            </div>
            <div className='flex items-center gap-9'>
                <h2 className='font-semibold text-base'>Price:</h2>
                <strong className='text-4xl font-bold text-red-700'>$85<span className='text-sm text-gray-800 line-through'>$119</span></strong>
            </div>
            <div className='flex items-center gap-3'>
                <h2 className='font-semibold text-base'>Shipping:</h2>
                <ProvinceCoordinate />
            </div>
            <div className='flex items-center gap-3'>
                <h2 className='font-semibold text-base'>Quantity:</h2>
                <span className='text-gray-800 flex items-center gap-2'>
                    <InputNumber min={1} max={10} defaultValue={1} onChange={handleInputChange} size='small' />
                    <span className='text-gray-600 text-sm'>10 products available</span>
                </span>
            </div>
            <div className='flex items-center gap-3'>
                <ButtonCustom href='' type='default' text='Add to cart' icon={<Plus size={18} />} className='bg-white text-primary-400' />
                <ButtonCustom href='' type='dashed' text='Pay as Guest*' icon={<ShoppingCart size={18} />} className='bg-primary-50 text-primary-400' />
                <ButtonCustom href='' text='Buy Now' />
            </div>
        </div>
    )
}
