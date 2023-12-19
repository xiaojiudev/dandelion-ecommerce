'use client'
import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import { Category } from '@/types/types';
import { ChevronRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';


export default function Categories({ data }: { data: Category[] }) {

    const [activeId, setActiveId] = useState<number>(0);

    const router = useRouter();
    const pathname = usePathname();
    const createQueryString = useCreateQueryString();


    const handleClick = (id: number, name: string) => {
        setActiveId(id)
        router.push(pathname + '?' + createQueryString('category', name, true), { scroll: false })
    }

    return data && data?.map(category => (
        <button
            onClick={(e) => handleClick(category.id, category.name)}
            key={category.id}
            className={`inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-normal -mt-px ${activeId === category.id ? 'text-primary-500' : 'text-gray-800'} first:mt-0 focus:z-10 focus:outline-none`}
        >
            <ChevronRight size={16} strokeWidth={2.5} color='#e94b7c' className={`${activeId === category.id ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
        </button>
    ))
}
