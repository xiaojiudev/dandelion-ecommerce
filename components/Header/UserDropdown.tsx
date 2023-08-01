'use client'
import React from 'react'
import { Avatar, Dropdown } from 'antd'

import { avatarDropdownItems } from '@/constants'

export default function UserDropdown() {
    return (
        <>
            <Dropdown menu={{ items: avatarDropdownItems }} placement='bottomRight' className='flex justify-center items-center' >
                <a onClick={(e) => e.preventDefault()}>
                    <Avatar src="/avatar.jpg" />
                </a>
            </Dropdown>
        </>
    )
}
