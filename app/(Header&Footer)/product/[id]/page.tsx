import { Metadata } from 'next'

import ProductDetailInfo from '@/components/product/ProductDetailInfo'
import ProductDetailSlider from '@/components/product/ProductDetailSlider'
import { Tag } from 'antd'
import TagGroup from '@/components/product/TagGroup'



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
        <div>
            <div className='bg-white rounded shadow my-10 p-4'>
                <div className='flex flex-col gap-y-8'>
                    <div className='grid gap-4 grid-cols-12'>
                        <div className='col-span-5'>
                            <ProductDetailSlider />
                        </div>
                        <div className='col-span-7'>
                            <ProductDetailInfo />
                        </div>
                    </div>

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

            </div>
        </div>
    )
}
