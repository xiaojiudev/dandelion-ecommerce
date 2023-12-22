
import { SIGNIN_URI } from '@/constants/baseURL';

import Cart from './Cart';
import Notify from './Notify';
import NavbarMenu from './NavbarMenu';
import LogoSVG from '../global/LogoSVG';
import UserDropdown from './UserDropdown';
import ButtonCustom from './ButtonCustom';
import { auth } from '@/auth';



export default async function HeaderCustom() {

    const session = await auth();
    const isLogin = !!session ? true : false;
    const userInfo = session?.user;

    return (
        <header className='sticky top-0 z-50'>
            <nav className='bg-white border-gray-200 px-4 sm:px-6 lg:px-12 py-2 shadow '>
                <div className='flex flex-wrap justify-between items-center mx-auto container'>
                    {/* Logo */}
                    <LogoSVG />

                    {/* Navigation menu */}
                    <div className="justify-between items-center w-full lg:flex lg:w-auto" >
                        <NavbarMenu />
                    </div>

                    <div className="flex items-center justify-between h-12">
                        {/* Notify */}
                        <Notify className='mr-6' />

                        {/* Cart */}
                        <Cart className='mr-6' />

                        {/* Login */}
                        {isLogin ? <UserDropdown data={userInfo}/> : <ButtonCustom href={SIGNIN_URI} text='Get started' size='middle' className='text-base font-medium' />}
                    </div>
                </div>
            </nav>
        </header>
    )
}
