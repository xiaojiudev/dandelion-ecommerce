

import SliderCustom from '@/components/global/SliderCustom'
import CarouselWrapper from '@/components/global/CarouselWrapper'
import TitleTypography from '@/components/global/TitleTypography'
import SelectGroupCustom from '@/components/global/SelectGroupCustom'
import CategoryGroupCustom from '@/components/global/CategoryGroupCustom'
import ProductsPagination from '@/components/global/ProductsPagination'




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
                <div className='p-4 py-10 shadow-none mb-4 flex flex-col justify-center'>
                    <TitleTypography headingText='Seller Spotlight' descText='Unveiling Premier Selections from Trusted Partners' />
                    <SliderCustom />
                </div>

                <div className='p-4 py-10 w-full bg-white shadow-none rounded mb-4 flex flex-col justify-center'>
                    <TitleTypography classWrapper='mb-4' headingText='Featured Finds' descText='Curated Selections for Your Shopping Delight' />
                    <div className='flex items-center justify-end mb-8'>
                        <SelectGroupCustom />
                    </div>
                    <div className='grid grid-cols-6 gap-4'>
                        <div className='col-span-1'><CategoryGroupCustom /></div>
                        <div className='col-span-5'>
                            <ProductsPagination />
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}
