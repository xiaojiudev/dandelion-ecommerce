import Image from 'next/image';
import React, { Suspense } from 'react';
import { List } from 'lucide-react';

import { fetchProducts } from '@/lib/data';

import CarouselWrapper from '@/components/home/CarouselWrapper';
import TitleTypography from '@/components/global/TitleTypography';
import FilterOptions from '@/components/home/FilterOptions';
import { CategoriesSkelton, ProductsCardSkeleton } from '@/components/skeletons';
import CategoryBar from '@/components/home/CategoryBar';
import ProductWrapper from '@/components/home/ProductWrapper';
import PaginationWrapper from '@/components/global/PaginationWrapper';


export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const { page = 0, size = 10, sortBy = '', sortDir = '', category = '', search } = searchParams;

    const { pageNumber, totalElements } = await fetchProducts({ ...searchParams });

    return (
        <>
            <div className='flex flex-col gap-4'>
                <div className='grid grid-cols-3 grid-rows-2 gap-1 max-h-60 w-full'>
                    <div className='col-span-2 row-span-2 rounded-sm overflow-hidden'>
                        <CarouselWrapper />
                    </div>
                    <div className='col-span-1 row-span-1 rounded-sm overflow-hidden'>
                        <Image src={"/avatar.jpg"} alt="avatar" sizes="100vw" priority quality={70} width={500} height={300} className='object-cover h-full w-full' />
                    </div>
                    <div className='col-span-1 row-span-1 rounded-sm overflow-hidden'>
                        <Image src={"/avatar.jpg"} alt="avatar" sizes="100vw" priority quality={70} width={500} height={300} className='object-cover h-full w-full' />
                    </div>
                </div>

                {/* Slider Popular Product */}
                {/* <div id='popular'>
                    <div className='p-4 py-10 shadow-none flex flex-col justify-center'>
                        <TitleTypography headingText='Seller Spotlight' descText='Unveiling Premier Selections from Trusted Partners' />
                        <SliderCustom />
                    </div>
                </div> */}

                {/* Main product */}
                <div id='product' className='p-4 py-10 w-full bg-white shadow-none rounded flex flex-col justify-center'>
                    <TitleTypography classWrapper='mb-4' headingText='Featured Finds' descText='Curated Selections for Your Shopping Delight' />
                    <div className='flex items-center justify-end mb-8'>
                        <FilterOptions />
                    </div>
                    <div className='grid grid-cols-6 gap-4'>
                        <div className='col-span-1'>
                            <div className="max-w-xs flex flex-col rounded-lg bg-white shadow">
                                <div className="inline-flex items-center border-b gap-x-3.5 py-3 px-4 text-base font-semibold text-primary-600 -mt-px  first:mt-0  focus:z-10 focus:outline-none select-none">
                                    <List size={16} />
                                    Category
                                </div>
                                <Suspense fallback={<CategoriesSkelton />}>
                                    <CategoryBar />
                                </Suspense>
                            </div>
                        </div>
                        <div className='col-span-5'>
                            {/* <Products/> */}
                            <div className='flex flex-col items-center'>
                                <Suspense fallback={<ProductsCardSkeleton />}>
                                    <ProductWrapper page={Number(page)} category={category.toString()} sortBy={sortBy.toString()} sortDir={sortDir.toString()} search={search?.toString()} />
                                </Suspense>
                            </div>
                        </div>
                        <div className='col-span-1'></div>
                        <div className='col-span-5'>
                            <div className='flex justify-center'>
                                <PaginationWrapper pageNumber={Number(pageNumber)} totalElements={Number(totalElements)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
