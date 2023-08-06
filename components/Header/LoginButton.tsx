import React from 'react'
import Link from 'next/link'
import { Button } from 'antd'

export default function LoginButton() {
    return (
        <>
            <Link href="/product">
                <Button type="primary" size="large" className=''>
                    Get started
                </Button>
            </Link>
        </>
    )
}
