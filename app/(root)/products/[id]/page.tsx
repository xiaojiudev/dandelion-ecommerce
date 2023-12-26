import { Pagination } from 'antd';

import { Product } from '@/types/types';
import { fetchProductById } from '@/lib/data';

import TagGroup from '@/components/product/TagGroup';
import PromoCard from '@/components/product/PromoCard';
import UserReview from '@/components/product/UserReview';
import FilterBlock from '@/components/product/FilterBlock';
import ProgressRating from '@/components/product/ProgressRating';
import ProductDetailSlider from '@/components/product/ProductDetailSlider';
import ProductRating from '@/components/product/ProductRating';
import HeartFavorite from '@/components/global/HeartFavorite';
import AddProductToCart from '@/components/product/AddProductToCart';
import ProvinceCoordinate from '@/components/product/ProvinceCoordinate';


export default async function Page({ params: { id } }: { params: { id: string } }) {

    const [product]: [Product] = await Promise.all([fetchProductById(id)]);
    // console.log(product);
    

    const mediaList = [...product.media_url];

    return (
        <div className='flex flex-col gap-10'>
            {/* Product section */}
            <div className='bg-white rounded shadow p-4'>
                <div className='flex flex-col gap-y-8'>
                    <div className='grid gap-4 grid-cols-12'>
                        <div className='col-span-5'>
                            <ProductDetailSlider data={mediaList} alt={product?.name} />
                        </div>
                        <div className='col-span-7'>
                            <div className='flex flex-col px-5 gap-5 text-gray-900 text-base'>
                                <h1 className='text-3xl font-semibold '>{product?.name}</h1>
                                <div className='flex justify-between items-center text-sm text-slate-800 select-none'>
                                    <div className='divide-x'>
                                        <ProductRating value={4.6} disabled allowHalf className='text-sm pr-4' />
                                        <span className='px-4 '>145 Reviews</span>
                                        <span className='px-4 '>289 Sold</span>
                                    </div>
                                    <div className='pl-0'>
                                        <HeartFavorite id={product?.id} />
                                    </div>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <h2 className='font-semibold text-base'>Describe:</h2>
                                    <p className='text-justify text-base text-gray-800'>{product?.description}</p>
                                </div>
                                <div className='flex items-center gap-9'>
                                    <h2 className='font-semibold text-base'>Price:</h2>
                                    <strong className='text-4xl font-bold text-red-700'>${product?.price}<span className='text-sm text-gray-800 line-through'>${(product?.price * 1.3).toFixed(2)}</span></strong>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <h2 className='font-semibold text-base'>Shipping:</h2>
                                    <ProvinceCoordinate />
                                </div>
                                <AddProductToCart id={product?.id!} availableQuantity={product?.quantity} />
                            </div>
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
                                <h1 className='bg-slate-100 p-3 rounded-sm text-lg font-medium'>Product Information</h1>
                                <div className='flex flex-col gap-4 p-4'>

                                    <p className='text-justify'>
                                        {product?.information}
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
