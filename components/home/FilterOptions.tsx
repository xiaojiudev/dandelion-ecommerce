'use client'
import React from 'react'
import { ConfigProvider, Select, Input } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SearchProps } from 'antd/es/input';

const { Search } = Input;

export default function FilterOptions() {


    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const isSearching = !!searchParams.get('search');

    const handleChangeFilter = (value: string) => {
        console.log(`selected ${value}`)
    }
    

    const handleSearchProduct: SearchProps['onSearch'] = (value, _e, info) => {
        
        const params = new URLSearchParams(searchParams);
        params.set('page', '0');

        if (value.length > 0 && info?.source === 'input') {
            params.set('search', value.toString());
            replace(`${pathname}?${params.toString()}`, { scroll: false });
        } else if (info?.source === 'clear' && isSearching) {
            params.delete('search');
            replace(`${pathname}?${params.toString()}`, { scroll: false });
        }
    };

    const handleChangeSort = (optValue: { value: string; } | undefined) => {
        // console.log(optValue);

        const sortBy = optValue?.value.split("_")[0].toLowerCase();
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
        <div className='flex flex-row justify-between items-center min-w-[500px] max-w-[550px]'>
            <ConfigProvider theme={{
                token: {
                    colorBorder: '#fce7ef',
                    colorPrimary: '#e94b7c',
                },
            }}>
                <Search
                    placeholder="Type to search"
                    onSearch={handleSearchProduct}
                    style={{ width: 200 }}
                    size='small'
                    enterButton
                    allowClear
                    maxLength={100}

                />

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
            </ConfigProvider>
        </div>
    )
}
