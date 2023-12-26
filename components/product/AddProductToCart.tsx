'use client'
import Link from 'next/link';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, InputNumber, message } from 'antd';

import { addProductTocart } from '@/lib/data';
import { CHECKOUT_URI } from '@/constants/baseURL';


export default function AddProductToCart({ id, availableQuantity }: { id: string, availableQuantity: number }) {

    const [userInputQuantity, setUserInputQuantity] = useState<number>(1);
    const [messageApi, contextHolder] = message.useMessage();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleQuantityChange = (value: number | null) => {
        setUserInputQuantity(value ?? 1);
    }

    const handleAddTocart = async (e: React.MouseEvent<HTMLElement, MouseEvent>, productId: string, quantity: number) => {
        e.preventDefault();
        setIsLoading(true);
        messageApi.open({
            key: productId,
            type: 'loading',
            content: 'Loading...',
        });

        try {
            const data = {
                productId,
                quantity,
            }
            await addProductTocart(data);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                messageApi.open({
                    key: productId,
                    type: 'success',
                    content: 'Add product to cart successfully',
                    duration: 1.5,
                });
                setIsLoading(false);
            }, 1000);
        }

    }

    const handlePayAsGuest = async (e: React.MouseEvent<HTMLElement, MouseEvent>, productId: string, quantity: number) => {
        e.preventDefault();
        setIsLoading(true);
        messageApi.open({
            key: productId,
            type: 'loading',
            content: 'Loading...',
        });
        try {
            const data = {
                productId,
                quantity,
            }
            await addProductTocart(data);
            console.log(`Pay as Guest product id: ${id} with quantity: ${quantity}`);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                messageApi.open({
                    key: productId,
                    type: 'success',
                    content: 'Add product to cart successfully',
                    duration: 1.5,
                });
                setIsLoading(false);
            }, 1000);
        }
    }

    const handleBuyNow = async (e: React.MouseEvent<HTMLElement, MouseEvent>, productId: string, quantity: number) => {
        e.preventDefault();
        setIsLoading(true);
        messageApi.open({
            key: productId,
            type: 'loading',
            content: 'Loading...',
        });
        try {
            const data = {
                productId,
                quantity,
            }
            await addProductTocart(data);
            console.log(`Buy Now product id: ${id} with quantity: ${quantity}`);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(async () => {
                await messageApi.open({
                    key: productId,
                    type: 'success',
                    content: 'Add product to cart successfully',
                    duration: 1.5,
                });
                setIsLoading(false);
                router.push(CHECKOUT_URI);
            }, 1000);
        }
    }


    return (
        <>
            {contextHolder}
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
                        loading={isLoading}
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
                        loading={isLoading}
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
                        loading={isLoading}
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
