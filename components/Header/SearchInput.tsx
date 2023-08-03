import { Button, Popover } from 'antd'
import { Search } from 'lucide-react'
import React from 'react'

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

export default function SearchInput() {
    return (
        <div className='mr-6'>
            <Popover content={content} title="Title" trigger="click">
                <div className="relative text-gray-600 flex items-center border rounded-full">
                    <input type="search" name="serch" placeholder="Search" className="bg-white h-10 pl-6 pr-2 rounded-full text-sm focus:outline-none" />
                    <Button shape="circle" className='flex justify-center items-center border-none h-10 w-10 ' icon={<Search size={14} />} />
                </div>
            </Popover>
        </div>
    )
}
