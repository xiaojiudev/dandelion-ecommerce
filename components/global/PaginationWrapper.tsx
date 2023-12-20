'use client'
import React from 'react'
import { Pagination } from 'antd'
import type { PaginationProps } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function PaginationWrapper({ pageNumber, totalElements }: { pageNumber: number, totalElements: number }) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const onChange: PaginationProps['onChange'] = (pageValue: number) => {
        const params = new URLSearchParams(searchParams);
        if (pageValue) {
            params.set('page', (pageValue - 1).toString());
        } else {
            params.delete('page');
        }

        replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const currentPageNumber = pageNumber >= 0 ? (pageNumber + 1) : 1;

    return (
        <Pagination
            defaultCurrent={1}
            current={currentPageNumber}
            total={totalElements}
            onChange={onChange}
            disabled={totalElements === 0}
        />
    )
}
