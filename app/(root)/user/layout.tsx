'use client'
import Link from 'next/link';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import {
    Bell,
    CreditCard,
    FileHeart,
    MapPin,
    Settings,
    ShieldCheck,
    ShoppingBag,
    Star,
    Ticket,
    User2
} from 'lucide-react';

import theme from '@/theme/themeConfig';
import { USER_PAYMENT_URI, USER_PROFILE_URI, USER_REVIEW_URI, USER_WISHLIST_URI } from '@/constants/baseURL';

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const menuConfig = {
    fontSize: 14,
    itemHeight: 32,
    iconSize: 14,
    groupTitleFontSize: 14,
    groupTitleLineHeight: 1,
    algorithm: true,
}

const { iconSize } = menuConfig

const items: MenuProps['items'] = [
    getItem('Account', 'sub1', <Settings size={iconSize} />, [
        getItem(<Link href={USER_PROFILE_URI} prefetch>Profile</Link>, '1', <User2 size={iconSize} />),
        getItem(<Link href={USER_PAYMENT_URI} prefetch>Bank & Cards</Link>, '2', <CreditCard size={iconSize} />),
        getItem('Addresses', '3', <MapPin size={iconSize} />),
        getItem('Change Password', '4', <ShieldCheck size={iconSize} />),
        getItem('Notification Settings', '5', <Bell size={iconSize} />),
    ]),

    getItem('Purchase', 'sub2', <ShoppingBag size={iconSize} />),

    getItem(<Link href={USER_REVIEW_URI} prefetch>Reviews</Link>, 'sub3', <Star size={iconSize} />),

    getItem(<Link href={USER_WISHLIST_URI} prefetch>Wishlist</Link>, 'sub4', <FileHeart size={iconSize} />),

    getItem('Vouchers', 'sub5', <Ticket size={iconSize} />),
]

export default function UserLayout({ children, }: { children: React.ReactNode }) {

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e)
    }

    return (
        <div className="flex flex-row gap-5 min-h-[80vh]">
            <section className='w-[256px]'>
                <ConfigProvider theme={{
                    ...theme,
                    components: {
                        Menu: menuConfig,
                    },
                }}>
                    <Menu
                        onClick={onClick}
                        style={{ width: '100%' }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={items}
                        className='rounded-xl select-none'

                    />
                </ConfigProvider>
            </section>
            <section className='flex-1 bg-white p-8 rounded-xl shadow-sm'>{children}</section>
        </div>
    )
}