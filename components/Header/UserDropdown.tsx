'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Avatar, Dropdown, MenuProps, message } from 'antd';
import { GalleryVerticalEnd, Heart, LogOut, Settings, User } from 'lucide-react';

import { DEFAULT_IMG_URL, HOME_URI, USER_PROFILE_URI, USER_WISHLIST_URI } from '@/constants/baseURL';
import Image from 'next/image';


export default function UserDropdown(props: any) {

    const { name, image } = props.data;
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        messageApi.success(`Welcome back! ${name}`, 2);
    }, [])

    const avatarDropdownItems: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className='flex justify-center items-center text-sm select-none'>
                    <h6>Hi! <span className='font-semibold text-gray-900'>{name}</span></h6>
                </div>
            ),
        },
        {
            type: 'divider'
        },
        {
            key: '2',
            label: (
                <Link rel="noopener noreferrer" href={USER_WISHLIST_URI} className=' text-sm text-primary-500 font-normal'>
                    <span>My Wishlist</span>
                </Link>
            ),
            icon: <span className='text-primary-500'><Heart size={16} color='currentColor' fill='currentColor' /></span>,
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="" className='text-sm text-primary-500 font-normal'>
                    <span>My purchase</span>
                </a>
            ),
            icon: <span className='text-primary-500'><GalleryVerticalEnd size={16} color='currentColor' fill='currentColor' /></span>,
        },
        {
            type: 'divider',
        },
        {
            key: '4',
            label: (
                <a target="_blank" rel="noopener noreferrer" className='text-sm text-gray-500 font-normal' href="">
                    My profile
                </a>
            ),
            icon: <span className='text-gray-500'><User size={16} color='currentColor' fill='currentColor' /></span>
        },
        {
            key: '5',
            label: (
                <Link rel="noopener noreferrer" href={USER_PROFILE_URI} className='text-sm text-gray-500 font-normal'>
                    Account settings
                </Link>
            ),
            icon: <span className='text-gray-500'><Settings size={16} color='currentColor' fill='currentColor' /></span>
        },
        {
            type: 'divider'
        },
        {
            key: '6',
            label: (
                <Link
                    onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                    rel="noopener noreferrer"
                    href={HOME_URI}
                    className='text-center text-gray-700 font-medium'
                >
                    <span className=''>Sign out</span>
                </Link>
            ),
            icon: <span className='text-gray-700'><LogOut size={16} color='currentColor' /></span>
        },
    ]

    return (
        <>
            {contextHolder}
            <Dropdown menu={{ items: avatarDropdownItems }} placement='bottomRight' className='flex justify-center items-center' >
                <a onClick={(e) => e.preventDefault()}>
                    {/* <Avatar src={image ?? DEFAULT_IMG_URL} /> */}
                    <Image
                        src={image ?? DEFAULT_IMG_URL}
                        priority
                        height={40}
                        width={40}
                        alt={name}
                        className='w-10 h-10 rounded-full object-cover'
                    />
                </a>
            </Dropdown>
        </>
    )
}
