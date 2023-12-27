'use client'
import React from 'react';
import { Button, ConfigProvider, message } from 'antd';
import { addProductTocart } from '@/lib/data';

export default function ProductCart({ id }: { id: string }) {

    const [messageApi, contextHolder] = message.useMessage();


    const handleAddToCart = async (e: React.MouseEvent<HTMLElement, MouseEvent>, productId: string) => {
        e.preventDefault();
        console.log('Add product to cart with id: ' + productId)
        try {
            const data = {
                productId,
                quantity: 0,
            }
            await addProductTocart(data);
        } catch (error) {
            console.log(error);
        } finally {
            messageApi.open({
                key: productId,
                type: 'success',
                content: 'Add product to cart successfully',
                duration: 1.5,
            });
        }
    }

    return (

        <ConfigProvider theme={{
            token: {
                colorPrimary: '#e8dfda'
            },
        }
        }>{contextHolder}
            <Button
                onClick={async (e) => handleAddToCart(e, id)}
                className="flex flex-col-reverse mb-1 mr-4 cursor-pointer bg-[#e8dfda] w-9 h-9 rounded-full items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </Button>
        </ConfigProvider >
    )
}
