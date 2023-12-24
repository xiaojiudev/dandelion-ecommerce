'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Badge, Button, Divider, List, Popover, Skeleton } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Bell } from 'lucide-react'


interface DataType {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
}

interface NotifyType {
    className?: string
}

export default function Notify({ className }: NotifyType) {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<DataType[]>([])

    const loadMoreData = () => {
        if (loading) {
            return
        }

        setLoading(true)
        fetch('https://randomuser.me/api/?results=100&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results])
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        loadMoreData()
    },[])


    //get data and return product items in cart
    const content = (
        <div id="scrollableDiv" className='h-[60vh] w-[350px] overflow-y-scroll'>

            <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={loading}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active className='flex items-center px-4' />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
                className='123'
            >
                <List

                    className='overflow-hidden'
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item key={item.email} className='bg-primary-50/50 hover:bg-[#f8f8f8] cursor-pointer border-none py-3 px-4'>
                            <List.Item.Meta
                                className='flex items-center'
                                avatar={<Image src={item.picture.large} width={40} height={40} alt={item.name.first} className='object-cover rounded-sm' />}
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description={item.email}

                            />
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>

    )

    return (
        <>
            <Popover id='notify' content={content} placement='bottomRight' title={<div className='text-center select-none mb-4'>Recently Received Notifications</div>} className={`text-center ${className}`}>
                <Badge count={5} className='flex items-center justify-center'>
                    <Button type="link" href='' className='bg-transparent' icon={<Bell size={24} strokeWidth={2} color='#9ca3af' />} size='small' ></Button>
                </Badge>
            </Popover>
        </>
    )
}
