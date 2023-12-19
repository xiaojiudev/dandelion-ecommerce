import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/types/types';
import { fetchProducts } from '@/lib/data';
import HeartActive from '@/components/global/HeartActive';
import ProductCart from '../global/ProductCart';

export default async function ProductWrapper() {

    const res = await fetchProducts();
    const { content } = res;
    console.log(content);


    return res && (
        <ProductCard data={content} />
    )

}

export function ProductCard({ data }: { data: Product[] }) {
    return data && data?.map(product => (
        <Link
            href={`/products/${product?.id}`}
            key={`${product?.id}`}
            target=''
            className="relative min-w-[180px] max-w-[200px] h-[285px] block bg-white text-gray-900 shadow-md rounded-2xl p-2 cursor-pointer hover:-translate-y-1 transition-all select-none">
            <div className="rounded-md relative overflow-hidden">
                <span className="absolute left-2 top-2 mt-2 z-10 rounded-full bg-primary-700 px-2 text-center text-sm font-medium text-white select-none">-39%</span>
                <Image src={`${product?.media_url}`} alt={`${product?.name}`} priority quality={100} sizes="100vw" width={500} height={300} className='h-44 rounded-sm w-full object-cover hover:scale-105 transition duration-500' />
                <HeartActive id={product?.id} className='absolute right-2 top-2' />
            </div>
            <div className="my-4 pl-2 mb-2 flex flex-col justify-between items-stretch">
                <div className=''>
                    <p className="text-sm text-center tracking-tight font-medium line-clamp-1 text-gray-900 mb-0">{product?.name}</p>
                </div>
                <div className='flex justify-between items-center pt-2'>
                    <span className="text-2xl font-bold text-slate-900">${product?.price}</span>
                    <div className='text-xs text-[#0000008a]'>2.6k sold</div>
                </div>
            </div>
            <ProductCart id={product?.id} />
        </Link>

    ))
}
