'use client'
import { Button, InputNumber } from 'antd';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function AddProductToCart({ id, availableQuantity }: { id: string, availableQuantity: number }) {

    const [userInputQuantity, setUserInputQuantity] = useState<number>(1);

    const handleQuantityChange = (value: number | null) => {
        console.log('changed', value);
        setUserInputQuantity(value ?? 1);
    }

    const handleAddTocart = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string, quantity: number) => {
        e.preventDefault();
        console.log(`Add to cart product id: ${id} with quantity: ${quantity}`);
    }

    const handlePayAsGuest = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string, quantity: number) => {
        e.preventDefault();
        console.log(`Pay as Guest product id: ${id} with quantity: ${quantity}`);
    }

    const handleBuyNow = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string, quantity: number) => {
        e.preventDefault();
        console.log(`Buy Now product id: ${id} with quantity: ${quantity}`);
    }



    return (
        <>
            <div className='flex items-center gap-3'>
                <h2 className='font-semibold text-base'>Quantity:</h2>
                <span className='text-gray-800 flex items-center gap-2'>
                    <InputNumber
                        min={1}
                        max={availableQuantity}
                        defaultValue={1}
                        step={1}
                        disabled={availableQuantity === 0}
                        onChange={handleQuantityChange}
                        size='small'
                    />
                    <span className='text-gray-600 text-sm'>{availableQuantity} products available</span>
                </span>
            </div>
            <div className='flex items-center gap-3'>
                <Link href={'/'} prefetch>
                    <Button
                        onClick={(e) => handleAddTocart(e, id, userInputQuantity)}
                        type='default'
                        size='large'
                        className={`flex items-center rounded-md`}
                        icon={<Plus size={18} />}
                    >
                        Add to cart
                    </Button>
                </Link>
                <Link href={'/'} prefetch>
                    <Button
                        onClick={(e) => handlePayAsGuest(e, id, userInputQuantity)}
                        type='dashed'
                        size='large'
                        className={`flex items-center rounded-md`}
                        icon={<Plus size={18} />}
                    >
                        Pay as Guest*
                    </Button>
                </Link>
                <Link href={'/'} prefetch>
                    <Button
                        onClick={(e) => handleBuyNow(e, id, userInputQuantity)}
                        type='primary'
                        size='large'
                        className={`flex items-center rounded-md`}
                        icon={<Plus size={18} />}
                    >
                        Buy Now
                    </Button>
                </Link>
            </div>
        </>
    )
}
