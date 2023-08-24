'use client'
import CartItem from '@/components/checkout/CartItem';
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'

import { useStoreCheckbox } from '@/hooks/use-store-checkbox'

const userCartData = [
    {
        id: '1',
        image: '/avatar.jpg',
        name: 'Iphone 11 Pro',
        type: '256 Gb, Space Grey',
        unitPrice: 932,
        maxQuantity: 10,
        totalPrice: 932,
    },
    {
        id: '2',
        image: '/avatar1.jpg',
        name: 'Apple Watch 7 series',
        type: '32 Gb, Black',
        unitPrice: 399,
        maxQuantity: 15,
        totalPrice: 399,
    },
    {
        id: '3',
        image: '/thumbnail.png',
        name: 'Apple Pen',
        type: '32 Gb, Black',
        unitPrice: 199,
        maxQuantity: 132,
        totalPrice: 199,
    },
]

export default function Checkout() {

    const [cartItem, setCartItem] = useState<any>([])

    useEffect(() => {
        setCartItem(userCartData)
    }, [])

    const bears = useStoreCheckbox((state) => state.isCheckedAll)

    const checkedAll = useStoreCheckbox((state) => state.checkedAll)
    const uncheckedAll = useStoreCheckbox((state) => state.uncheckedAll)

    const onChange = (e: CheckboxChangeEvent) => {
        // console.log(`checked = ${e.target.checked}`)
        const checked = e.target.checked

        checked ? checkedAll() : uncheckedAll()

    }
    // console.log(bears);


    return (
        <div className='my-10'>
            <div className=''>
                <div className='grid grid-cols-12 gap-5'>
                    <div className="col-span-9">
                        <div className='flex flex-col flex-1 justify-center gap-3'>
                            <div className='bg-white p-4 rounded shadow-sm'>
                                <div className='grid grid-cols-12'>
                                    <Checkbox onChange={onChange} className='col-span-5'>Alll Product (10 products) </Checkbox>
                                    <span className='col-span-2'>Unit Price</span>
                                    <span className='col-span-2'>Quantity</span>
                                    <span className='col-span-2'>Total Price</span>
                                    <button className='col-span-1 flex items-center'>
                                        <Trash2 size={16} strokeWidth={2} color='' className='stroke-slate-600' />
                                    </button>
                                </div>
                            </div>

                            {/* <CartItem /> */}
                            {cartItem.map((item: any, index: number) => (
                                <CartItem id={item.id} image={item.image} name={item.name} type={item.type} unitPrice={item.unitPrice} totalPrice={item.totalPrice} maxQuantity={item.maxQuantity} key={index} />
                            ))}
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className='bg-white p-4 rounded h-[300px]'>
                            summary
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
