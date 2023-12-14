import { Metadata } from 'next'


import ProductDetailInfo from '@/components/product/ProductDetailInfo'
import ProductDetailSlider from '@/components/product/ProductDetailSlider'
import TagGroup from '@/components/product/TagGroup'
import PromoCard from '@/components/product/PromoCard'
import ProgressRating from '@/components/product/ProgressRating'
import UserReview from '@/components/product/UserReview'
import FilterBlock from '@/components/product/FilterBlock'
import { Pagination } from 'antd'




type ProductPropps = {
    params: { id: string }
}

export async function generateMetadata({ params }: ProductPropps) {
    return {
        title: `Product ${params.id}`,
    }
}




export default async function Page({ params }: { params: { id: string } }) {


    return (
        <div className='flex flex-col gap-10'>
            {/* Product section */}
            <div className='bg-white rounded shadow p-4'>
                <div className='flex flex-col gap-y-8'>
                    <div className='grid gap-4 grid-cols-12'>
                        <div className='col-span-5'>
                            <ProductDetailSlider />
                        </div>
                        <div className='col-span-7'>
                            <ProductDetailInfo />
                        </div>
                    </div>

                </div>
            </div>

            {/* Product desc section - Review section - Promote section etc */}
            <div className='flex gap-3'>

                {/* Left section */}
                <div className='flex-1'>
                    <div className='flex flex-col gap-3'>

                        {/* Product Description */}
                        <div className='bg-white p-4 rounded'>
                            <div className='text-slate-800'>
                                <h1 className='bg-slate-100 p-3 rounded-sm text-lg font-medium'>Product Description</h1>
                                <div className='flex flex-col gap-4 p-4'>
                                    <p className='text-justify'>
                                        - Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nobis dicta aut nulla vero perferendis, ipsam labore dolorum veritatis, sed nam excepturi corrupti aliquam enim. Dolorum quam quos est amet.
                                        • Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ab optio beatae, vero illum pariatur necessitatibus, omnis nisi neque id voluptates adipisci sit voluptate. Incidunt eaque expedita aspernatur alias excepturi!
                                        • Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus modi, reiciendis officiis, in tenetur fugit nostrum reprehenderit voluptatem inventore quos commodi suscipit exercitationem nesciunt numquam dolore atque totam porro error.
                                        • Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt vel praesentium error omnis. Veritatis ab, voluptatum eveniet veniam minima ratione, quas, dignissimos mollitia commodi nostrum neque eum repellat quidem!
                                    </p>
                                    <div className='select-none'>
                                        <TagGroup />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Review section */}
                        <div className='bg-white p-4 rounded'>
                            <div className='grid grid-cols-12 gap-5'>

                                {/* Customer reviews column left */}
                                <div className='col-span-8'>
                                    <div className='flex flex-col gap-3 divide-y'>
                                        <div className='flex justify-between items-center px-3 py-5'>
                                            <h1 className='text-lg font-medium'>Customer Reviews</h1>
                                            <FilterBlock />
                                        </div>
                                        <div className='flex flex-col gap-3 divide-y'>
                                            <UserReview />
                                            <UserReview />
                                            <UserReview />
                                        </div>
                                        <div className='flex justify-center items-center pt-3'>
                                            <Pagination defaultCurrent={1} total={23} size='small' />
                                        </div>
                                    </div>
                                </div>

                                {/* Ratings column right */}
                                <div className='col-span-4'>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex items-center justify-between px-0 py-5'>
                                            <h1 className='text-lg font-medium'>Ratings*</h1>
                                            <span className='text-xs font-normal text-gray-600'>*Base on 1213 reviews</span>
                                        </div>
                                        <div className='flex flex-col justify-center items-start gap-2 p-4 bg-slate-50 rounded'>
                                            <ProgressRating rating={5} percent={63} />
                                            <ProgressRating rating={4} percent={10} />
                                            <ProgressRating rating={3} percent={6} />
                                            <ProgressRating rating={2} percent={12} />
                                            <ProgressRating rating={1} percent={9} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right section  */}
                <div className='flex flex-col gap-3'>

                    {/* Promote section */}
                    <div className='bg-white p-4 rounded'>
                        <div>
                            <h2 className='text-sm font-medium font-tilt text-primary-500 mb-3'>Shop Vouchers</h2>
                            <div className='flex flex-col gap-3 max-h-80 overflow-y-scroll'>
                                <PromoCard />
                                <PromoCard />
                                <PromoCard />
                                <PromoCard />
                                <PromoCard />
                            </div>
                        </div>
                    </div>

                    {/* Another section here */}

                </div>


            </div>
        </div>
    )
}
