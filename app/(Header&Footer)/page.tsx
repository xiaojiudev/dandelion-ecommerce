'use client'
import Image from 'next/image'
import { Breadcrumb, Layout } from 'antd'


const { Content } = Layout

export default function Home() {
    return (
        <Content className="site-layout" style={{ padding: '0 50px' }}>
            <Breadcrumb items={[{ title: 'sample' }, { title: 'list' }, { title: 'app' }]} className='!my-4' />
            <div className='bg-white p-6 mb-6 min-h-screen'>
                Content
            </div>
        </Content>
    )
}
