'use client'
import Image from 'next/image'
import { Breadcrumb, Layout } from 'antd'

// style={{ padding: '0 50px' }}
const { Content } = Layout

export default function Home() {
    return (
        <div className="" >
            <div className='my-6 max-w-screen-xl '>
                <Breadcrumb items={[{ title: 'sample' }, { title: 'list' }, { title: 'app' }]} className='mb-3' />
                <div className='bg-white min-h-screen p-4'>
                    Content
                </div>
                <div className='bg-white min-h-screen'>
                    Content
                </div>
            </div>
        </div>
    )
}
