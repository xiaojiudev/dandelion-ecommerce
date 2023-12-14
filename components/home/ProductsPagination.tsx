'use client'

import React, { useState, useEffect } from 'react'
import CardCustom from '../global/CardCustom'
import { Pagination, PaginationProps } from 'antd'

import axios from 'axios'


export default function ProductsPagination() {


    const [page, setPage] = useState(1)
    const [size, setSize] = useState(8)
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:8080/api/v1/products?page=${page-1}&size=${size}`,
            );

            setData(result.data);
        };

        fetchData();
    }, [page, size]);



    const pageChange: PaginationProps['onChange'] = (page, pageNumber) => {
        console.log('page: ', page);
        console.log('page: ', pageNumber);
        setPage(page)
        setSize(pageNumber)
    };

    const sizeChange:PaginationProps['onShowSizeChange'] = (current, size) => {
        console.log('size: ', size)
        setSize(size)
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='w-full h-full mb-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-y-8 md:gap-7 lg:gap-6 xl:gap-x-4 xl:gap-y-6 justify-items-center'>
                <CardCustom data={data?.content} loading={false} />
            </div>
            <div className='flex items-center justify-center'>
                <Pagination defaultCurrent={1} current={page} defaultPageSize={8} total={data?.totalElements} pageSizeOptions={[8, 16, 32, 64]} onChange={pageChange} onShowSizeChange={sizeChange}	 size='default' />
            </div>
        </div>
    )
}
