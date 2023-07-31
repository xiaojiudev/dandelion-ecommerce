'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Layout, Menu, Button, Popover, Badge, Avatar, List, Skeleton, Divider, Dropdown, Space, MenuProps, } from 'antd'
import { ShoppingCart, Trash2 } from 'lucide-react'

import { avatarDropdownItems, navbarItems } from '@/constants'

const { Header } = Layout

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


export default function HeaderCustom() {

    //isLogin
    const isLogin = false

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
                <Button type="primary" className='w-4/5 bg-primary-500 ' size='large'>Checkout</Button>
            </div>
        </>

    )

    return (
        <Header className='flex items-center justify-between sticky top-0 z-50 h-16 w-full leading-[64px] bg-white text-white text-center shadow'>
            <a href="/" className="flex items-center select-none">
                <Image src="/logo.svg" width={36} height={36} quality={100} priority={true} className="mr-3 object-cover" alt="Dandelion Logo" />
                <span className="self-center text-2xl font-dancing-script font-bold whitespace-nowrap text-primary-400 tracking-wide">Dandelion</span>
            </a>
            <div className="" >
                <Menu disabledOverflow mode="horizontal" items={navbarItems} className='bg-inherit sm:flex-auto sm:min-w-0 [&_span]:text-base font-semibold select-none' />
            </div>
            <div className="flex items-center text-black">
                {/* Cart */}
                <Popover content={content} placement='bottomRight' title={<div className='text-center'>Your cart</div>} className='mr-6 text-center'>
                    <Badge count={5} className='flex items-center justify-center'>
                        <Button type="link" href='' className='bg-transparent' icon={<ShoppingCart size={24} strokeWidth={2} color='#9ca3af' />} size='small' ></Button>
                    </Badge>
                </Popover>

                {/* Login */}
                {isLogin ? (
                    <Dropdown menu={{ items: avatarDropdownItems }} placement='bottomRight' className='flex justify-center items-center' >
                        <a onClick={(e) => e.preventDefault()}>
                            <Avatar src="/avatar.jpg" />
                        </a>
                    </Dropdown>
                ) : (
                    <Link href="/product">
                        <Button type="primary" size="large" className='bg-primary-500'>
                            Get started
                        </Button>
                    </Link>
                )}
            </div>
        </Header>
    )
}
