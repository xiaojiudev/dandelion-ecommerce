'use client'
import React, { useState } from 'react'
import { AutoComplete, ConfigProvider, Input } from 'antd'
import type { SelectProps } from 'antd/es/select';



interface SearchInputType {
    className?: string
}

const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
            const category = `${query}${idx}`;
            return {
                value: category,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>
                            Found {query} on{' '}
                            <a
                                href={`https://s.taobao.com/search?q=${query}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {category}
                            </a>
                        </span>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            };
        });



export default function SearchInput({ className = '' }: SearchInputType) {


    const [options, setOptions] = useState<SelectProps<object>['options']>([]);

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };

    return (
        <div className={` ${className}`}>
            <ConfigProvider theme={{
                token: {
                    colorBorder: '#fad0e0',

                },
            }}>
                <AutoComplete
                    popupMatchSelectWidth={180}
                    style={{ width: 220 }}
                    options={options}
                    onSelect={onSelect}
                    onSearch={handleSearch}
                >
                    <Input.Search
                        size="small"
                        placeholder="Search"
                        enterButton
                        allowClear
                        loading={false}

                    />
                </AutoComplete>
            </ConfigProvider>
        </div >
    )
}
