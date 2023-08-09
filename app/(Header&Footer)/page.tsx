
import Image from 'next/image'


import CarouselWrapper from '@/components/global/CarouselWrapper'
import CardCustom from '@/components/global/CardCustom'
import GridCustom from '@/components/global/GridCustom'


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

                <div className='bg-white min-h-screen p-4 shadow-sm rounded mb-4'>
                    <CardCustom />

                </div>
                {/* <div className='bg-white p-4 shadow-sm rounded mb-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-y-8 md:gap-7 lg:gap-8 xl:gap-x-4 xl:gap-y-8 justify-items-center'>
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                </div> */}

                <div className='bg-white min-h-screen w-full p-4 shadow-sm rounded mb-4'>
                    <GridCustom lgCol={4} xlCol={6}>
                        <CardCustom />
                        <CardCustom />
                        <CardCustom />
                        <CardCustom />
                        <CardCustom />
                        <CardCustom />
                        <CardCustom />
                        <CardCustom />
                        <CardCustom />
                        <CardCustom />
                        <CardCustom />
                        <CardCustom />
                    </GridCustom>
                </div>
            </div>
        </div>
    )
}
