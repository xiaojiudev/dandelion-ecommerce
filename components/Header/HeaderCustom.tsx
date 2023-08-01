
import Image from 'next/image'
import Link from 'next/link'
import { Layout, Menu, Button, Popover, Badge, Avatar, List, Skeleton, Divider, Dropdown, Space, MenuProps, } from 'antd'
import { ShoppingCart, Trash2 } from 'lucide-react'

import { avatarDropdownItems, navbarItems } from '@/constants'
import Cart from './Cart'
import UserDropdown from './UserDropdown'
import LoginButton from './LoginButton'
import NavbarMenu from './NavbarMenu'

const { Header } = Layout



export default function HeaderCustom() {

    //isLogin
    const isLogin = true


    return (
        <header className='sticky top-0 z-50'>
            <nav className='bg-white border-gray-200 px-12 py-2 leading-[64px] shadow'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <a href="/" className="flex items-center select-none">
                        <Image src="/logo.svg" width={36} height={36} quality={100} priority={true} className="mr-3 object-cover" alt="Dandelion Logo" />
                        <span className="self-center text-2xl font-dancing-script font-bold whitespace-nowrap text-primary-400 tracking-wide">Dandelion</span>
                    </a>
                    <div className="justify-between items-center w-full lg:flex lg:w-auto" >
                        <NavbarMenu />
                    </div>
                    <div className="flex items-center">
                        {/* Cart */}
                        <Cart />

                        {/* Login */}
                        {isLogin ? <UserDropdown /> : <LoginButton />}
                    </div>
                </div>
            </nav>
        </header>
    )
}
