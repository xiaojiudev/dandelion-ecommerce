'use client'
import React from 'react'
import { ConfigProvider, Select, Space } from 'antd'

import SearchInput from '../header/SearchInput'



export default function SelectGroupCustom() {

    const handleChangeFilter = (value: string) => {
        console.log(`selected ${value}`)
    }

    const handleChangeSort = (value: string) => {
        console.log(`selected ${value}`)
    }

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
                            options={[
                                {
                                    label: 'Name',
                                    options: [
                                        { label: 'A → Z', value: 'nameasc' },
                                        { label: 'Z → A', value: 'namedesc' },
                                    ],
                                },
                                {
                                    label: 'Price',
                                    options: [
                                        { label: 'High → Low', value: 'pricedesc' },
                                        { label: 'Low → High', value: 'priceasc' },
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
