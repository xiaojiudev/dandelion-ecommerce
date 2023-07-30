import Link from 'next/link'
import type { MenuProps } from 'antd'
import { GalleryVerticalEnd, Heart, } from 'lucide-react';

export const navbarItems: MenuProps['items'] = [
    {
        label: (
            <Link href="/">Home</Link>
        ),
        key: 'home',
        icon: '',
    },
    {
        label: 'Popular',
        key: 'popular',
        icon: '',
    },
    {
        label: 'Products',
        key: 'product',
        icon: '',
    },
    {
        label: 'About',
        key: 'SubMenu',
        icon: '',
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                        children: [
                            {
                                label: 'Option 1',
                                key: 'subsetting:1',
                            },
                            {
                                label: 'Option 2',
                                key: 'subsetting:2',
                            },
                        ],
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Contact</a>
        ),
        key: 'alipay',
    },
]

export const avatarDropdownItems: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <div className='flex justify-center items-center text-sm'>
                <h6>Hi <span className='font-semibold '>XiaoJiu</span></h6>
            </div>
        ),
    },
    {
        type: 'divider'
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" className='text-sm !text-[#6b7280] text-primary-600' href="">
                <span className='text-primary-700' style={{color:'#6b7280'}}>My profile</span>
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                Account settings
            </a>
        ),
    },
    {
        type: 'divider',
    },
    {
        key: '4',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                My likes
            </a>
        ),
        icon: <Heart />,
    },
    {
        key: '5',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                Collections
            </a>
        ),
        icon: <GalleryVerticalEnd />,
    },
    {
        type: 'divider'
    },
    {
        key: '6',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                Sign out
            </a>
        ),
    },
];