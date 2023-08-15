'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useSearchParams, useSelectedLayoutSegments } from 'next/navigation'
import Link from 'next/link';
import { Breadcrumb } from 'antd';


export default function BreadcrumbsCustom() {

    const segments = useSelectedLayoutSegments()
    const pathname = usePathname()
    console.log(pathname);

    const segmentsObj = segments.map((path) => ({
        title: (<Link href={path} key={path}>{path}</Link>)
    }))

    const items = [
        { title: 'Home' },
        ...segmentsObj
    ]

    console.log(items);



    return (
        <div>
            <Breadcrumb items={items} separator=">" />
        </div>
    )
}
