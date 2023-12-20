'use client'
import { Category } from '@/types/types';
import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


export default function Categories({ data }: { data: Category[] }) {

    const [activeId, setActiveId] = useState<number>(0);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        const categorySearch = searchParams.get('category');
        const category = data.find(item => item.name === categorySearch);
        if (category) {
            setActiveId(category.id);
        }
    }, [searchParams]);

    const handleClick = (id: number, name: string) => {
        setActiveId(id)
        const params = new URLSearchParams(searchParams);

        params.set('page', '0');
        if (name) {
            params.set('category', name);
        } else {
            params.delete('category');
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return data && data?.map(category => (
        <button
            onClick={() => handleClick(category.id, category.name)}
            key={category.id}
            className={`inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-normal -mt-px ${activeId === category.id ? 'text-primary-500' : 'text-gray-800'} first:mt-0 focus:z-10 focus:outline-none`}
        >
            <ChevronRight size={16} strokeWidth={2.5} color='#e94b7c' className={`${activeId === category.id ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
        </button>
    ))
}
