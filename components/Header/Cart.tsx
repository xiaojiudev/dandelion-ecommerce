'use client'
import { Avatar, Badge, Button, List, Popover } from 'antd'
import { ShoppingCart, Trash2 } from 'lucide-react'
import React from 'react'

interface CartType {
    className?: string
}

export default function Cart({ className }: CartType) {

    //fetch and return data here!
    const dataCart = [
        {
            key: '1',
            title: 'Ant Design Title 1',
            desc: 'Ant Desc 1',
            price: '10',
            quantity: 1,
            img: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=',
        },
        {
            key: '2',
            title: 'Ant Design Title 2',
            desc: 'Ant Desc 2',
            price: '20',
            quantity: 2,
            img: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=',
        },
        {
            key: '3',
            title: 'Ant Design Title 3',
            desc: 'Ant Desc 3',
            price: '30',
            quantity: 3,
            img: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=',
        },
        {
            key: '4',
            title: 'Ant Design Title 4',
            desc: 'Ant Desc 4',
            price: '40',
            quantity: 4,
            img: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=',
        },
        {
            key: '5',
            title: 'Ant Design Title 5',
            desc: 'Ant Desc 5',
            price: '50',
            quantity: 5,
            img: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=',
        },
        {
            key: '6',
            title: 'Ant Design Title 6',
            desc: 'Ant Desc 6',
            price: '60',
            quantity: 6,
            img: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=',
        },
    ];

    //get data and return product items in cart
    const content = (
        <>
            <List
                className='h-[223px] w-[400px] overflow-y-scroll'
                itemLayout="horizontal"
                dataSource={dataCart}
                renderItem={(item, index) => (
                    <List.Item actions={
                        [
                            <div className='text-dark font-bold text-primary-400' key={item.key}>
                                <span className='text-base  font-medium'>{item.price}</span>
                                <sup className='text-xs '>$</sup>
                            </div>, <Button type="link" href='' className='bg-transparent' key={item.key} icon={<Trash2 size={16} strokeWidth={2} color='' className='stroke-slate-600' />} size='small' ></Button>
                        ]}>
                        <List.Item.Meta
                            avatar={<Avatar src={`${item.img}${index}`} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.desc}
                            className='items-center'
                        />
                        <div>{item.quantity}</div>
                    </List.Item>
                )}
            >
            </List>
            <div className='flex items-center justify-center py-3'>
                <Button type="primary" className='w-4/5' size='large'>Checkout</Button>
            </div>
        </>

    )

    return (
        <>
            <Popover content={content} placement='bottomRight' title={<div className='text-center select-none'>Your cart</div>} className={`text-center ${className}`}>
                <Badge count={5} className='flex items-center justify-center'>
                    <Button type="link" href='' className='bg-transparent' icon={<ShoppingCart size={24} strokeWidth={2} color='#9ca3af' />} size='small' ></Button>
                </Badge>
            </Popover>
        </>
    )
}
