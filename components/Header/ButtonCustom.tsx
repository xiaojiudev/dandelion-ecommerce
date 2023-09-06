import React from 'react'
import Link from 'next/link'
import { Button } from 'antd'
import { BaseButtonProps } from 'antd/es/button/button'



interface ButtonProps {
    href?: string,
    type?: BaseButtonProps["type"],
    size?: BaseButtonProps["size"],
    className?: string
    text: string,
    icon?: React.ReactNode
    onClick?: () => void
    value?: string | number
}


export default function ButtonCustom(
    {
        href = "",
        type = "primary",
        size = "large",
        className = "",
        text = "Button",
        icon = "",
        onClick,
        value
    }: ButtonProps) {


    return (
        <>
            <Link href={href} prefetch>
                <Button type={type} size={size} className={`flex items-center rounded-md ${className}`} icon={icon}>
                    {text}
                </Button>
            </Link>
        </>
    )
}
