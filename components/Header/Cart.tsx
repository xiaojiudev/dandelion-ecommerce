'use client'
import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { Avatar, Badge, Button, List, Popover } from 'antd';

import { CHECKOUT_URI, PRODUCT_URI } from '@/constants/baseURL';
import { deleteProductsFromCart } from '@/lib/data';
import { CartItem } from '@/types/types';


export default function Cart({ data, className }: { data: any, className: string }) {

    const quantity = data?.items.length ?? 0;

    //fetch and return data here!
    const dataCart = data?.items.map((item: CartItem) => {

        return {
            product_id: item.product_id,
            name: item.name,
            description: item.description,
            unit_price: item.unit_price,
            quantity: item.quantity,
            media_url: item.media_url,
        }
    })

    const handeDeleteProductFromCart = async (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => {
        e.preventDefault();
        await deleteProductsFromCart([id]);
    }

    //get data and return product items in cart
    const content = (
        <>
            <List
                className='h-[223px] w-[400px] overflow-y-scroll'
                itemLayout="horizontal"
                dataSource={dataCart}
                renderItem={(item: CartItem, index: number) => (
                    <List.Item

                        key={item.product_id}
                        actions={
                            [
                                (<div className='text-dark font-bold text-primary-400 ' key={item.product_id}>
                                    <span className='text-base font-medium'>{item.unit_price}</span>
                                    <sup className='text-xs'>$</sup>
                                </div>),
                                (<div className='w-8'>x{item.quantity}</div>),
                                (<Button key={item.product_id} type="link" onClick={(e) => handeDeleteProductFromCart(e, item.product_id)} className='bg-transparent' icon={<Trash2 size={16} strokeWidth={2} color='' className='stroke-slate-600' />} size='small' ></Button>),
                            ]}
                        className='flex items-center'
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={`${item.media_url}`} shape='square' />}
                            title={<Link href={`${PRODUCT_URI}/${item.product_id}`} className='line-clamp-1'>{item.name}</Link>}
                            description={<span className='line-clamp-1'>{item.description}</span>}
                            className='items-center hello123 flex-1'
                        />

                    </List.Item>
                )}
            >
            </List>
            <div className='flex items-center justify-center py-3'>
                <Button type="primary" href={CHECKOUT_URI} className='w-4/5' size='large'>Checkout</Button>
            </div>
        </>

    )

    return (
        <>
            <Popover content={content} placement='bottomRight' title={<div className='text-center select-none'>Your cart</div>} className={`text-center ${className}`}>
                <Badge count={quantity} className='flex items-center justify-center'>
                    <Link href={CHECKOUT_URI} className='bg-transparent'>
                        <ShoppingCart size={24} strokeWidth={2} color='#9ca3af' />
                    </Link>
                </Badge>
            </Popover>
        </>
    )
}
