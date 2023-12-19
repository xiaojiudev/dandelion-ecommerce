import React from 'react'

import Categories from './Categories';
import { Category } from '@/types/types'
import { fetchCategories } from '@/lib/data'

export default async function CategoryBar() {
    const data = await fetchCategories();

    const categoryItems: Category[] = Array.isArray(data) ? [{ id: 0, name: 'All' }, ...data] : [];

    return (
        <>
            {categoryItems && (
                <Categories data={categoryItems} />
            )}
        </>
    )
}
