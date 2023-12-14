import Image from 'next/image'
import React, { Suspense } from 'react'

import SliderCustom from '@/components/global/SliderCustom'
import CarouselWrapper from '@/components/home/CarouselWrapper'
import TitleTypography from '@/components/global/TitleTypography'
import FilterSortByGroup from '@/components/home/FilterSortByGroup'
import ProductCard from '@/components/global/ProductCard'
import MyPagination from '@/components/global/MyPagination'
import MyCategoryGroup from '@/components/home/MyCategoryGroup'


export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const { page = 0, size = 10, sortBy = '', sortDir = '', category = '' } = searchParams;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/products?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}&category=${category}`, { next: { revalidate: 0 } });
    const data = await res.json();
    const { content, pageNumber, pageSize, totalElements, totalPages, lastPage } = data?.products;
    console.log(pageNumber);

    console.log(searchParams);



    return (
        <>
            <div className='flex flex-col gap-4'>
                <div className='grid grid-cols-3 grid-rows-2 gap-1 max-h-60 w-full'>
                    <div className='col-span-2 row-span-2 rounded-sm overflow-hidden'>
                        <CarouselWrapper />
                    </div>
                    <div className='col-span-1 row-span-1 rounded-sm overflow-hidden'>
                        <Image src={"/avatar.jpg"} alt="avatar" sizes="100vw" priority quality={100} width={500} height={300} className='object-cover h-full w-full' />
                    </div>
                    <div className='col-span-1 row-span-1 rounded-sm overflow-hidden'>
                        <Image src={"/avatar.jpg"} alt="avatar" sizes="100vw" priority quality={100} width={500} height={300} className='object-cover h-full w-full' />
                    </div>
                </div>

                {/* Slider Popular Product */}
                <div id='popular'>
                    <div className='p-4 py-10 shadow-none flex flex-col justify-center'>
                        <TitleTypography headingText='Seller Spotlight' descText='Unveiling Premier Selections from Trusted Partners' />
                        <SliderCustom />
                    </div>
                </div>

                {/* Main product */}
                <div id='product' className='p-4 py-10 w-full bg-white shadow-none rounded flex flex-col justify-center'>
                    <TitleTypography classWrapper='mb-4' headingText='Featured Finds' descText='Curated Selections for Your Shopping Delight' />
                    <div className='flex items-center justify-end mb-8'>
                        <FilterSortByGroup />
                    </div>
                    <div className='grid grid-cols-6 gap-4'>
                        <div className='col-span-1'>
                            <MyCategoryGroup />
                        </div>
                        <div className='col-span-5'>
                            {/* <ProductsPagination /> */}
                            <div className='flex flex-col items-center'>
                                <div className='w-full h-full mb-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-y-8 md:gap-7 lg:gap-6 xl:gap-x-4 xl:gap-y-6 justify-items-center'>
                                    <ProductCard data={content} />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1'></div>
                        <div className='col-span-5'>
                            <div className='flex justify-center'>
                                <MyPagination pageNumber={pageNumber + 1} totalElements={totalElements} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
