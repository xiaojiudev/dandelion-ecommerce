

import UserDropdown from './UserDropdown'
import LoginButton from './LoginButton'
import NavbarMenu from './NavbarMenu'
import LogoSVG from '../LogoSVG'
import Notify from './Notify'
import Cart from './Cart'





export default function HeaderCustom() {

    //isLogin
    const isLogin = true


    return (
        <header className='sticky top-0 z-50'>
            <nav className='bg-white border-gray-200 px-4 sm:px-6 lg:px-12 py-2 leading-[64px] shadow '>
                <div className='flex flex-wrap justify-between items-center mx-auto container'>
                    {/* Logo */}
                    <LogoSVG />

                    {/* Navigation menu */}
                    <div className="justify-between items-center w-full lg:flex lg:w-auto" >
                        <NavbarMenu />
                    </div>

                    <div className="flex items-center">
                        {/* Notify */}
                        <Notify />

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
