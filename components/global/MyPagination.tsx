'use client'
import React from 'react'
import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import { Pagination } from 'antd'
import type { PaginationProps } from 'antd';
import { usePathname, useRouter } from 'next/navigation'


export default function MyPagination({ pageNumber, totalElements }: { pageNumber: number, totalElements: number }) {

    const router = useRouter()
    const pathname = usePathname()
    const createQueryString = useCreateQueryString();

    const onChange: PaginationProps['onChange'] = (pageNumber: number) => {
        console.log('Page: ', pageNumber);
        router.push(pathname + '?' + createQueryString('page', (pageNumber - 1).toString()), { scroll: false })
    };

    return (
        <Pagination defaultCurrent={pageNumber ?? 1} total={totalElements} onChange={onChange} />
    )
}
