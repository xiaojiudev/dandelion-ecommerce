import React, { useState } from 'react'
import Image from 'next/image';
import { Checkbox, InputNumber } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Trash2 } from 'lucide-react';

type CartItemProps = {
    id: string,
    image: string,
    name: string,
    type: string,
    unitPrice: number,
    maxQuantity: number,
    totalPrice: number,
}



export default function CartItem({ id, image, name, type, unitPrice, maxQuantity, totalPrice }: CartItemProps) {


    const [checked, setChecked] = useState(false)


    const handleCheckboxChange = (e: CheckboxChangeEvent) => {
        // console.log(`checked = ${e.target.checked}`);
        console.log(e.target.name);
        
        

    }

    const handleInputChange = (value: number | null) => {
        console.log('changed', value);
    }

    return (
        <section className='bg-white p-4 rounded shadow-sm select-none'>
            <div className='grid grid-cols-12 items-center'>
                <Checkbox onChange={handleCheckboxChange} className='col-span-5' name={id}>
                    <div className='flex items-center gap-3'>
                        <Image src={image} alt='item' sizes="100vw" priority quality={100} width={500} height={300} className='w-20 h-20 object-cover rounded-sm' />
                        <div className='flex flex-col items-start gap-2'>
                            <h1 className='text-base font-medium text-gray-800 line-clamp-1'>{name}</h1>
                            <p className='text-sm font-normal text-gray-600 line-clamp-1'>{type}</p>
                        </div>
                    </div>
                </Checkbox>
                <span className='col-span-2 '>${unitPrice}</span>
                <span className='col-span-2 '>
                    <InputNumber min={1} max={maxQuantity} defaultValue={1} onChange={handleInputChange} size='small' />
                </span>
                <span className='col-span-2 '>${totalPrice}</span>
                <button className='col-span-1 '>
                    <Trash2 size={16} strokeWidth={2} color='' className='stroke-slate-600' />
                </button>

            </div>
        </section>
    )
}
