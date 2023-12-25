'use client'
import React from 'react';
import { Button, ConfigProvider } from 'antd';
import { addProductTocart, fetchUserCart } from '@/lib/data';

export default function ProductCart({ id }: { id: string }) {

    const handleAddToCart = async (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => {
        e.preventDefault();
        console.log('Add product to cart with id: ' + id)
        const data = {
            productId: id,
            quantity: 1,
        }
        await addProductTocart(data);
    }

    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#e8dfda'
            },
        }}>
            <Button
                className="flex flex-col-reverse mb-1 mr-4 cursor-pointer bg-[#e8dfda] w-9 h-9 rounded-full items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                onClick={async (e) => handleAddToCart(e, id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </Button>
        </ConfigProvider>
    )
}
