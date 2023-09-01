import { Button } from 'antd'
import Image from 'next/image'
import React from 'react'

export default function page() {

    const temp = (<div className='relative h-[112px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-t-lg'>
        <div className='absolute z-10 bg-img-confetti w-full h-full'>
        </div>
    </div>
    )

    return (
        <div className='my-10'>
            <div className='flex flex-wrap gap-4 min-h-[calc(100vh-260px)] max-w-5xl m-auto'>
                <div className='basis-8/12'>
                    <div className='flex relative min-h-[500px] bg-white p-10 rounded-lg overflow-hidden z-0'>
                        <div className='absolute top-0 left-0 w-full h-[112px] bg-gradient-to-r from-sky-400 via-rose-400 to-primary-400 z-10'>
                        </div>
                        <div className='absolute top-0 left-0 w-full h-[112px] bg-img-confetti z-20'>
                        </div>
                        <div className='z-20 w-full'>
                            <div className='flex'>
                                <Image src="/assets/img/congrat.svg" width={150} height={150} sizes='100vw' alt='congrat' className='w-[150px] h-[150px] object-cover mr-8 mt-9' />
                                <div className='flex-1'>
                                    <div className='flex flex-col gap-5'>
                                        <div className='text-white mb-5 line-clamp-2'>
                                            <h1 className='text-2xl font-medium mb-1'>Yay, order successful!</h1>
                                            <h3 className='text-lg'>Your order will be delivered to you soon (&gt;‿◠)✌</h3>
                                        </div>
                                        <div className='text-gray-600 text-sm'>
                                            <div className='flex items-center justify-between py-4 border-b'>
                                                <div>Payment methods</div>
                                                <div className='text-gray-900 font-bold'>COD</div>
                                            </div>
                                            <div className='flex items-center justify-between py-4'>
                                                <div>Total</div>
                                                <div className='text-gray-900 text-lg font-bold'>$162</div>
                                            </div>
                                            <p className='text-xs text-end'>(Including VAT if any)</p>
                                        </div>
                                        <Button type='default' block>Return to Home</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='flex flex-col gap-3'>
                        <div className='bg-white rounded'>
                            <div className='flex items-center justify-between p-4'>
                                <h4 className='font-bold'>Order code: 759723694</h4>
                                <a href="">View orders</a>
                            </div>
                            <div className='border-b'></div>
                            <div className='p-4'>
                                <h4 className='mb-2 text-gray-900 font-medium'>Delivered Saturday, September 9</h4>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex items-center gap-2'>
                                        <Image src={`https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg`} alt='Card' sizes="100vw" width={48} height={48} className='h-12 w-12 rounded-sm object-cover' />
                                        <span className='text-sm text-gray-600 line-clamp-2'>Men's Sports Shoes with Air Cushion for Comfortable, Breathable Foot Support</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Image src={`https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg`} alt='Card' sizes="100vw" width={48} height={48} className='h-12 w-12 rounded-sm object-cover' />
                                        <span className='text-sm text-gray-600 line-clamp-2'>Men's Sports Shoes with Air Cushion for Comfortable, Breathable Foot Support</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Image src={`https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg`} alt='Card' sizes="100vw" width={48} height={48} className='h-12 w-12 rounded-sm object-cover' />
                                        <span className='text-sm text-gray-600 line-clamp-2'>Men's Sports Shoes with Air Cushion for Comfortable, Breathable Foot Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
