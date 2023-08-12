
import Image from 'next/image'


import CarouselWrapper from '@/components/global/CarouselWrapper'
import CardCustom from '@/components/global/CardCustom'
import SliderCustom from '@/components/global/SliderCustom'




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
                    <h1 className='mb-2 text-center text-3xl font-medium leading-none tracking-tight text-gray-800 select-none'>Seller Spotlight</h1>
                    <p className='mb-3 text-center text-base text-gray-500 font-normal select-none'>Unveiling Premier Selections from Trusted Partners</p>
                    <SliderCustom />

                </div>

                <div className='bg-white min-h-screen w-full p-4 shadow-sm rounded mb-4'>
                    <div className='w-full h-full'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
