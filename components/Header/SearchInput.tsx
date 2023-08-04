'use client'
import React, { useState } from 'react'
import { AutoComplete, Input } from 'antd'
import { X, XCircle } from 'lucide-react'


interface SearchInputType {
    className?: string
}


const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
});

export default function SearchInput({ className }: SearchInputType) {

    const [value, setValue] = useState('')
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);

    const getPanelValue = (searchText: string) =>
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

    const onSelect = (data: string) => {
        console.log('onSelect', data);
    };

    const onChange = (data: string) => {
        setValue(data);
    };

    return (
        <div className={` ${className}`}>
            <AutoComplete
                value={value}
                options={anotherOptions}
                style={{ width: 200 }}
                onSelect={onSelect}
                onSearch={(text) => setAnotherOptions(getPanelValue(text))}
                onChange={onChange}
                className='[&>.ant-select-selector]:rounded-full'
                allowClear={{ clearIcon: <X width={14} height={14} /> }}
            >
            </AutoComplete>
        </div >
    )
}
