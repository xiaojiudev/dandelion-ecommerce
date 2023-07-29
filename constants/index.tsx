import { MenuProps } from 'antd'
import Link from 'next/link'

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