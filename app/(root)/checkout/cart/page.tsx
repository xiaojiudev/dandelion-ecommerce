'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button, Checkbox, ConfigProvider, Empty, InputNumber, Modal, Skeleton, Spin, message } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { Loader2, Trash2 } from 'lucide-react'


type userCartDataProps = {
    id: string,
    imgSrc: string,
    title: string,
    type: string,
    unitPrice: number,
    maxQuantity: number,
    totalPrice: number,
    isChecked?: boolean
}

const userCartData = [
    {
        id: '1',
        imgSrc: '/avatar.jpg',
        title: 'Iphone 11 Pro',
        type: '256 Gb, Space Grey',
        unitPrice: 932,
        maxQuantity: 10,
        totalPrice: 932,
    },
    {
        id: '2',
        imgSrc: '/avatar1.jpg',
        title: 'Apple Watch 7 series',
        type: '32 Gb, Black',
        unitPrice: 399,
        maxQuantity: 15,
        totalPrice: 399,
    },
    {
        id: '3',
        imgSrc: '/thumbnail.png',
        title: 'Apple Pen',
        type: '32 Gb, Black',
        unitPrice: 199,
        maxQuantity: 132,
        totalPrice: 199,
    },
]


export default function Checkout() {

    const [carts, setCarts] = useState<userCartDataProps[]>([])
    const [loading, setLoading] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [messageApi, contextHolder] = message.useMessage()

    useEffect(() => {
        setCarts(userCartData)
        setLoading(false)
    }, [])

    const isCheckedAll = !loading && carts.length > 0 && carts.filter(cart => cart?.isChecked === true).length === carts.length

    const handleChange = (e: CheckboxChangeEvent) => {
        const { name, checked } = e.target

        if (name === 'allSelect') {
            let temCart = carts.map(cart => { return { ...cart, isChecked: checked } })
            setCarts(temCart)
        } else {
            let tempCart = carts.map(cart => cart.id === name ? { ...cart, isChecked: checked } : cart)
            setCarts(tempCart)
        }
    }


    const handleDeleteCart = (isChecked: boolean, id: string) => {
        if (isChecked) {
            let temCart = carts.filter(cart => cart.id !== id)
            setCarts(temCart)
        } else {
            warning()
        }
    }


    const handleDelteCartAll = (isCheckedAll: boolean) => {

        let tempCart = carts.filter(cart => cart.isChecked !== true)

        if (tempCart.length === carts.length && !isCheckedAll) {
            warning()
        } else {
            setCarts(tempCart)
        }

    }


    const showModal = () => {
        setOpenModal(true)
    }

    const handleOk = () => {
        setOpenModal(false)
    }

    const handleCancel = () => {
        setOpenModal(false)
    }



    const warning = () => {

        messageApi.open({
            key: 'warning',
            type: 'warning',
            content: 'Please select the product to delete',
            style: {
                marginTop: '7vh',
            }
        })
    }




    return (
        <div className='my-10'>
            <div className=''>
                <div className='grid grid-cols-12 gap-5'>
                    <div className="col-span-9">
                        <div className='flex flex-col flex-1 justify-center gap-3'>
                            <div className='bg-white p-4 rounded shadow-sm'>
                                <div className='grid grid-cols-12 select-none'>

                                    {/* Checkbox for Selected all */}
                                    <Checkbox
                                        className='col-span-5'
                                        name='allSelect'
                                        onChange={handleChange}
                                        checked={isCheckedAll}
                                        disabled={carts.length === 0}
                                    >
                                        Alll Product ({carts.length} products)
                                    </Checkbox>
                                    <span className='col-span-2'>Unit Price</span>
                                    <span className='col-span-2'>Quantity</span>
                                    <span className='col-span-2'>Total Price</span>
                                    <button className='col-span-1 flex items-center'>
                                        <Trash2 onClick={() => handleDelteCartAll(isCheckedAll)} size={16} strokeWidth={2} color='' className='stroke-slate-600' />
                                    </button>
                                </div>
                            </div>

                            {/*Cart Skeleton */}
                            {loading && (<>
                                <section className='bg-white p-4 rounded shadow-sm select-none'>
                                    <div className='flex flex-row flex-1 justify-center items-center gap-3 h-[242px]'>
                                        <Spin />
                                    </div>
                                </section>
                            </>)}

                            {/* User Cart = 0 */}
                            {(!loading && carts.length === 0) && (
                                <div className='flex flex-1 items-center justify-center p-4 bg-white shadow'>
                                    <Empty
                                        description={
                                            <span className='text-base'>There are no products in your shopping cart.</span>
                                        }
                                    >
                                        <Button type='primary' size='middle' href='/product'>Continue Shopping</Button>
                                    </Empty>
                                </div>
                            )}

                            {/* User Cart Item */}
                            {carts.map((cart: userCartDataProps) => {
                                const isChecked = cart?.isChecked || false

                                return (
                                    <section className='bg-white p-4 rounded shadow select-none' key={cart.id}>
                                        <div className='grid grid-cols-12 items-center'>
                                            <Checkbox
                                                className='col-span-5'
                                                name={cart.id}
                                                onChange={handleChange}
                                                checked={isChecked}
                                            >
                                                <div className='flex items-center gap-3'>
                                                    <Image src={cart.imgSrc} alt='item' sizes="100vw" priority quality={100} width={500} height={300} className='w-20 h-20 object-cover rounded-sm' />
                                                    <div className='flex flex-col items-start gap-2'>
                                                        <h1 className='text-base font-medium text-gray-800 line-clamp-1'>{cart.title}</h1>
                                                        <p className='text-sm font-normal text-gray-600 line-clamp-1'>{cart.type}</p>
                                                    </div>
                                                </div>
                                            </Checkbox>
                                            <span className='col-span-2 '>${cart.unitPrice}</span>
                                            <span className='col-span-2 '>
                                                <InputNumber min={1} max={cart.maxQuantity} defaultValue={1} size='small' />
                                            </span>
                                            <span className='col-span-2 '>${cart.totalPrice}</span>
                                            <button className='col-span-1 '>
                                                <Trash2 onClick={() => handleDeleteCart(isChecked, cart.id)} size={16} strokeWidth={2} color='' className='stroke-slate-600' />
                                            </button>
                                        </div>
                                    </section>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className='bg-white p-4 rounded h-[300px]'>
                            summary
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <Modal
                title="Title"
                centered
                open={openModal}
                onOk={handleOk}
                onCancel={handleCancel}

            >
                <p>{'modalText'}</p>
            </Modal>


            {/* Message notify */}
            {contextHolder}
        </div>
    )
}
