
import Image from 'next/image'
import { Select } from 'antd'


import CardCustom from '@/components/global/CardCustom'
import SliderCustom from '@/components/global/SliderCustom'
import CarouselWrapper from '@/components/global/CarouselWrapper'
import TitleTypography from '@/components/global/TitleTypography'
import SelectGroupCustom from '@/components/global/SelectGroupCustom'
import CategoryGroupCustom from '@/components/global/CategoryGroupCustom'
import SearchInput from '@/components/header/SearchInput'




export default function Home() {



    return (
        <div className="my-8" >
            <div className=''>
                <div className='grid grid-cols-3 grid-rows-2 gap-1 mb-4 max-h-60 w-full'>
                    <div className='col-span-2 row-span-2 rounded-sm overflow-hidden'>
                        <CarouselWrapper />
                    </div>
                    <div className='col-span-1 row-span-1 rounded-sm overflow-hidden'>
                        <img src="/avatar.jpg" alt="avatar" className='object-cover h-full w-full' />
                    </div>
                    <div className='col-span-1 row-span-1 rounded-sm overflow-hidden'>
                        <img src="/avatar.jpg" alt="avatar" className='object-cover h-full w-full' />
                    </div>
                </div>

                {/* Slider */}
                <div className='bg-white p-4 py-8 shadow-sm rounded mb-4 flex flex-col justify-center'>
                    <TitleTypography headingText='Seller Spotlight' descText='Unveiling Premier Selections from Trusted Partners' />
                    <SliderCustom />
                </div>

                <div className='p-4 py-8 w-full shadow-none rounded mb-4 flex flex-col justify-center'>
                    <TitleTypography classWrapper='mb-4' headingText='Featured Finds' descText='Curated Selections for Your Shopping Delight' />
                    <div className='flex items-center justify-between'>
                        <div className='flex-1 text-center'>
                            <SearchInput />
                        </div>
                        <div className=''>
                            <SelectGroupCustom />
                        </div>
                    </div>
                    <div className='grid grid-cols-6 gap-4'>
                        <div className='col-span-1'><CategoryGroupCustom /></div>
                        <div className='col-span-5'>products</div>

                    </div>

                    {/* <div className='w-full h-full'>
                        <div className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-y-8 md:gap-7 lg:gap-8 xl:gap-x-4 xl:gap-y-8 justify-items-center'>
                            <CardCustom />
                            <CardCustom />
                            <CardCustom />
                            <CardCustom />
                            <CardCustom />
                            <CardCustom />
                            <CardCustom />
                            <CardCustom />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
