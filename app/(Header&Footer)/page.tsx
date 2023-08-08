
import Image from 'next/image'


import CarouselWrapper from '@/components/CarouselWrapper'


export default function Home() {

    return (
        <div className="my-8" >
            <div className=''>
                <div className='grid grid-cols-3 grid-rows-2 gap-1 mb-4 max-h-60 w-full'>
                    <div className='col-span-2 row-span-2 rounded overflow-hidden'>
                        <CarouselWrapper />
                    </div>
                    <div className='col-span-1 row-span-1 rounded overflow-hidden'>
                        <img src="/avatar.jpg" alt="avatar" className='object-cover h-full w-full' />
                    </div>
                    <div className='col-span-1 row-span-1 rounded overflow-hidden'>
                        <img src="/avatar.jpg" alt="avatar" className='object-cover h-full w-full' />
                    </div>
                </div>

                <div className='bg-white min-h-screen p-4 shadow-sm rounded mb-4'>
                    content 2
                </div>

                <div className='bg-white min-h-screen p-4 shadow-sm rounded mb-4'>
                    Content 3
                </div>
            </div>
        </div>
    )
}
