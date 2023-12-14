'use client'
import React, { useState } from 'react'
import { ChevronRight, List } from 'lucide-react'

// import { categoryItems } from '@/constants'
import useFetch from '@/lib/useFetch'
import { usePathname, useRouter } from 'next/navigation'
import { useCreateQueryString } from '@/hooks/useCreateQueryString'
import { Spin } from 'antd'

type Category = {
    id: number;
    name: string;
}

export default function MyCategoryGroup() {
    const { data, isLoading, isError } = useFetch(`categories`);
    const [activeId, setActiveId] = useState(0);

    const router = useRouter();
    const pathname = usePathname();
    const createQueryString = useCreateQueryString();


    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, category: Category) => {
        const { id, name } = category;

        e.preventDefault()
        setActiveId(id)

        router.push(pathname + '?' + createQueryString('category', name, true), { scroll: false })
    }

    const categoryItems: Category[] = Array.isArray(data) ? [{ id: 0, name: 'All' }, ...data] : [];


    return (
        <Spin spinning={isLoading}>
            <div className="max-w-xs flex flex-col rounded-lg bg-white shadow">

                <div className="inline-flex items-center border-b gap-x-3.5 py-3 px-4 text-base font-semibold text-primary-600 -mt-px  first:mt-0  focus:z-10 focus:outline-none select-none">
                    <List size={16} />
                    Category
                </div>
                {categoryItems && (
                    categoryItems.map((category: Category) => (
                        <a
                            className={`inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-normal -mt-px ${activeId === category.id ? 'text-primary-500' : 'text-gray-800'} first:mt-0 focus:z-10 focus:outline-none`}
                            href="#"
                            onClick={(e) => handleClick(e, category)}
                            key={category.id}
                        >
                            <ChevronRight size={16} strokeWidth={2.5} color='#e94b7c' className={`${activeId === category.id ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                        </a>
                    ))
                )}
            </div>
        </Spin>
    )
}
