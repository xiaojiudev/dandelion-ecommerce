'use client'
import React from 'react'
import { ConfigProvider, Select, Space } from 'antd'

import SearchInput from '../header/SearchInput'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';



export default function FilterOptions() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleChangeFilter = (value: string) => {
        console.log(`selected ${value}`)
    }

    const handleChangeSort = (optValue: { title: string; value: string; } | undefined) => {
        // console.log(optValue);
        
        const sortBy = optValue?.title.split("_")[0].toLowerCase();
        const sortDir = optValue?.value.split("_")[1].toLowerCase();

        const params = new URLSearchParams(searchParams);
        params.set('page', '0');

        if (sortBy && sortDir) {
            params.set('sortBy', sortBy);
            params.set('sortDir', sortDir);
        } else {
            params.delete('sortBy');
            params.delete('sortDir');
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <div>
            <Space wrap>
                <SearchInput />

                <ConfigProvider theme={{
                    token: {
                        colorPrimary: '#f8a9c5',
                        colorBorder: '#fce7ef'
                    },
                }}>
                    <Space wrap>
                        <Select
                            placeholder={<div className='text-black'>Filter</div>}
                            style={{ width: 120 }}
                            size='small'
                            onChange={handleChangeFilter}
                            options={[
                                { value: 'popular', label: 'Popular' },
                                { value: 'latest', label: 'Latest' },
                                { value: 'topsale', label: 'Top Sales' },

                            ]}
                            allowClear
                            placement='bottomLeft'
                        />
                        <Select
                            placeholder={<div className='text-black'>Sort by</div>}
                            style={{ width: 140 }}
                            size='small'
                            onChange={handleChangeSort}
                            labelInValue
                            options={[
                                {
                                    key: 'Name',
                                    label: 'Name',
                                    options: [
                                        { key: 'name_asc', label: 'A → Z', title: 'name_asc', value: 'name_asc', },
                                        { key: 'name_desc', label: 'Z → A', title: 'name_desc', value: 'name_desc', },
                                    ],
                                },
                                {
                                    key: 'Price',
                                    label: 'Price',
                                    options: [
                                        { key: 'price_desc', label: 'High → Low', title: 'price', value: 'price_desc', },
                                        { key: 'price_asc', label: 'Low → High', title: 'price', value: 'price_asc', },
                                    ],
                                },
                            ]}
                            allowClear
                            placement='bottomLeft'
                        />
                    </Space>
                </ConfigProvider>
            </Space>
        </div>
    )
}
