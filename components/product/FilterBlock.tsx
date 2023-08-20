'use client'
import { Select } from 'antd';
import React from 'react'

export default function FilterBlock() {


    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    }
    return (
        <>
            <Select
                defaultValue="All"
                style={{ width: 140 }}
                onChange={handleChange}
                options={[
                    { value: 'all', label: 'All reviews' },
                    { value: '5', label: '5 ★' },
                    { value: '4', label: '4 ★' },
                    { value: '3', label: '3 ★' },
                    { value: '2', label: '2 ★' },
                    { value: '1', label: '1 ★' },
                    { value: 'cmt', label: 'With comments' },
                    { value: 'media', label: 'With media' },
                ]}
                size='small'
            />
        </>
    )
}
