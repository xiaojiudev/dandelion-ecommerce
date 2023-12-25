import React from 'react';
import { Menu } from 'antd';

import { navbarItems } from '@/constants';

export default function NavbarMenu() {

    return (
        <>
            <Menu
                items={navbarItems}
                disabledOverflow
                mode="horizontal"
                className='bg-inherit sm:flex-auto sm:min-w-0 [&_span]:text-base font-semibold select-none border-b-0'
            />
        </>
    );
}

