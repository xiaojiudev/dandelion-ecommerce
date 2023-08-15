import { Metadata } from 'next'

import ProductDetailInfo from '@/components/global/ProductDetailInfo'
import ProductDetailSlider from '@/components/global/ProductDetailSlider'


import { getProvinces } from '@/lib/getProvince'


interface ProductPropps {
    params: { id: string }
}

export async function generateMetadata({ params }: ProductPropps) {
    return {
        title: `Product ${params.id}`,
    }
}


export default async function Page({ params }: { params: { id: string } }) {

    const provincesData: Promise<Provinces[]> = getProvinces();

    const data = await provincesData

    console.log(data);

    const provinceData = data?.map((item) => item.name)
    

    console.log(provinceData);


    return (
        <div>
            <div className='bg-white rounded shadow my-10 p-4'>
                <div className='grid gap-4 grid-cols-12'>
                    <div className='col-span-5'>
                        <ProductDetailSlider />
                    </div>
                    <div className='col-span-7'>
                        <ProductDetailInfo />
                    </div>
                </div>
                <ul>
                    {provinceData}
                </ul>
            </div>
        </div>
    )
}
