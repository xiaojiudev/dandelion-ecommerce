'use client'
import React from 'react'
import ButtonCustom from '../header/ButtonCustom'
import { ShoppingCart } from 'lucide-react'
import RatingCustom from './RatingCustom'
import HeartActive from './HeartActive'
import ProvinceCoordinate from './ProvinceCoordinate'



export default function ProductDetailInfo() {
    return (
        <div className='flex flex-col px-5 gap-3'>
            <h1 className='text-2xl font-medium text-slate-700'>Apple Watch Series 7</h1>
            <div className='flex justify-between items-center text-sm text-slate-800 select-none'>
                <div className='divide-x'>
                    <RatingCustom className='text-sm pr-4' />
                    <span className='px-4 '>145 Reviews</span>
                    <span className='px-4 '>289 Sold</span>
                </div>
                <div className='pl-0'><HeartActive /></div>
            </div>
            <p className='text-justify text-base text-slate-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aut suscipit possimus maiores pariatur veritatis, laboriosam, perspiciatis culpa quae sint tempora atque asperiores dolorem rem quasi, voluptas officia delectus reprehenderit?</p>
            <div className='flex items-center gap-3'>
                <h4 className='font-semibold text-base text-slate-700'>Price:</h4>
                <strong className='text-3xl font-bold text-red-700'>$85<span className='text-sm text-gray-700 line-through'>$119</span></strong>
            </div>
            <div className='flex items-center gap-3'>
                <h4 className='font-semibold text-base text-slate-700'>Shipping:</h4>
                <ProvinceCoordinate  />
            </div>
            <div>Quantity</div>
            <div className='flex'>
                <ButtonCustom href='' type='default' text='Add to cart' icon={<ShoppingCart />} className='bg-primary-50 text-primary-400' />
                <ButtonCustom href='' text='Buy Now' />
            </div>
        </div>
    )
}
