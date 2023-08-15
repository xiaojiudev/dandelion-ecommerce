
import ProductDetailSlider from '@/components/global/ProductDetailSlider'
import { Metadata } from 'next'


interface ProductPropps {
    params: { id: string }
}

export async function generateMetadata({ params }: ProductPropps) {
    return {
        title: `Product ${params.id}`,
    }
}


export default function Page({ params }: { params: { id: string } }) {



    return (
        <div>
            <div className='bg-white rounded my-10 p-4'>
                <div className='grid gap-4 grid-cols-12'>
                    <div className='col-span-5'>
                        <ProductDetailSlider />
                    </div>
                    <div className='col-span-7'>desc</div>
                </div>
            </div>
        </div>
    )
}
