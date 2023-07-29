'use client'
import { use, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Layout, Menu, Button, Popover, Badge, Avatar, List, Skeleton, Divider } from 'antd'
import { ShoppingCart, Trash2 } from 'lucide-react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { navbarItems } from '@/constants'

const { Header } = Layout


export default function HeaderCustom() {

    //fetch and return data here!
    const data = [
        {
            key: '1',
            title: 'Ant Design Title 1',
            desc: 'Ant Desc 1',
            price: '10',
            img:'https://xsgames.co/randomusers/avatar.php?g=pixel&key=',
        },
        {
            key: '2',
            title: 'Ant Design Title 2',
            desc: 'Ant Desc 2',
            price: '20',
            img:'https://xsgames.co/randomusers/avatar.php?g=pixel&key=',
        }, {
            key: '3',
            title: 'Ant Design Title 3',
            desc: 'Ant Desc 3',
            price: '30',
            img:'https://xsgames.co/randomusers/avatar.php?g=pixel&key=',
        }, {
            key: '4',
            title: 'Ant Design Title 4',
            desc: 'Ant Desc 4',
            price: '40',
            img:'https://xsgames.co/randomusers/avatar.php?g=pixel&key=',
        }, {
            key: '5',
            title: 'Ant Design Title 5',
            desc: 'Ant Desc 5',
            price: '50',
            img:'https://xsgames.co/randomusers/avatar.php?g=pixel&key=',
        }, {
            key: '6',
            title: 'Ant Design Title 6',
            desc: 'Ant Desc 6',
            price: '60',
            img:'https://xsgames.co/randomusers/avatar.php?g=pixel&key=',
        },
    ];

    //get data and return product items in cart
    const content = (
        <>
            <List
                className='h-[223px] w-[400px] overflow-y-scroll'
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`${item.img}${index}`} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.desc}
                            className='items-center'
                        />
                        <div className='flex flex-col justify-between items-end'>
                            <div className='text-dark font-bold'>
                                <span className='text-base'>{item.price}</span>
                                <sup className='text-xs'>$</sup>
                            </div>
                            <Button type="link" href='' className='bg-transparent' icon={<Trash2 size={16} strokeWidth={2} color='#f27373' />} size='small' ></Button>
                        </div>
                    </List.Item>
                )}
            >
            </List>
            <div className='flex items-center justify-center py-3'>
                <Button type="primary" className='w-4/5 bg-primary-700' size='large'>Checkout</Button>
            </div>
        </>

    )

    return (
        <Header className='flex items-center justify-between sticky top-0 z-50 h-16 w-full leading-[64px] bg-white text-white text-center shadow'>
            <a href="/" className="flex items-center select-none">
                <Image src="/logo.svg" width={36} height={36} quality={100} priority={true} className="mr-3 object-cover" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-[#20C997]">Dandelion</span>
            </a>
            <div className="" >
                <Menu disabledOverflow mode="horizontal" items={navbarItems} className='bg-inherit sm:flex-auto sm:min-w-0 [&_span]:text-base font-semibold select-none [&_li.ant-menu-item-selected::after]:border-b-indigo-500 [&_li.ant-menu-submenu-selected::after]:border-b-indigo-500 [&_li.ant-menu-item:hover::after]:border-b-indigo-500 [&_li.ant-menu-submenu:hover::after]:border-b-indigo-500' />
            </div>
            <div className="flex items-center text-black">
                {/* Cart */}
                <Popover content={content} placement='bottomRight' title={<div className='text-center'>Your cart</div>} className='mr-6 text-center'>
                    <Badge count={5}>
                        <Button type="link" href='' className='bg-transparent' icon={<ShoppingCart size={24} strokeWidth={2} color='#9ca3af' />} size='small' ></Button>
                    </Badge>
                </Popover>

                {/* Login */}
                <Button type="primary" size="large" className='bg-primary-700'>
                    <Link href="/product">Get started</Link>
                </Button>
            </div>
        </Header>
    )
}
