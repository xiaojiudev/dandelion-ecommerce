'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Checkbox, Empty, Input, InputNumber, Modal, Spin, Tag, message } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { Trash2 } from 'lucide-react'
import { useStoreVoucher } from '@/hooks/use-store-voucher'


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

    const isDisable = useStoreVoucher((state) => state.isDisable)
    const setEnableState = useStoreVoucher((state) => state.setEnable)
    const setDisableState = useStoreVoucher((state) => state.setDisable)



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

    const handleVoucher = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        value.length > 0 ? setEnableState() : setDisableState()
    }




    return (
        <>
            <div className=''>
                <div className='grid grid-cols-12 gap-5'>

                    {/* Left bar */}
                    <div className="col-span-9">
                        <div className='flex flex-col flex-1 justify-center gap-3'>
                            <div className='bg-white p-4 rounded shadow-sm' >
                                <div className='grid grid-cols-12 select-none text-sm text-gray-800 font-normal'>

                                    {/* Checkbox for Selected all */}
                                    <Checkbox
                                        className='col-span-5 text-sm text-gray-800 font-normal'
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
                                        <div className='grid grid-cols-12 items-center text-base'>
                                            <Checkbox
                                                className='col-span-5'
                                                name={cart.id}
                                                onChange={handleChange}
                                                checked={isChecked}
                                            >
                                                <div className='flex items-center gap-3'>
                                                    <Image src={cart.imgSrc} alt='item' sizes="100vw" quality={70} width={500} height={300} className='w-20 h-20 object-cover rounded-sm' />
                                                    <div className='flex flex-col items-start gap-2'>
                                                        <h1 className='text-base font-medium text-gray-800 line-clamp-1'>{cart.title}</h1>
                                                        <p className='text-sm font-normal text-gray-600 line-clamp-1'>{cart.type}</p>
                                                    </div>
                                                </div>
                                            </Checkbox>
                                            <span className='col-span-2 font-medium text-gray-900'>${cart.unitPrice}</span>
                                            <span className='col-span-2 '>
                                                <InputNumber min={1} max={cart.maxQuantity} defaultValue={1} size='small' />
                                            </span>
                                            <span className='col-span-2 font-medium text-rose-500'>${cart.totalPrice}</span>
                                            <button className='col-span-1 '>
                                                <Trash2 onClick={() => handleDeleteCart(isChecked, cart.id)} size={16} strokeWidth={2} color='' className='stroke-slate-600' />
                                            </button>
                                        </div>
                                    </section>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right bar */}
                    <div className='col-span-3'>
                        <div className='flex flex-col gap-3'>
                            {/* Address */}
                            <div className='bg-white rounded h-fit p-4 shadow-sm'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex justify-between font-normal text-base text-gray-500'>
                                        <h3 className=''>Delivery Address</h3>
                                        <Link href='/' className='text-sm'>Change</Link>
                                    </div>
                                    <div className='flex justify-between text-sm font-semibold text-gray-900'>
                                        <p className=''>Nguyễn Thanh Trung</p>
                                        <i className='border border-gray-200 border-solid'></i>
                                        <p className=''>0919360277</p>
                                    </div>
                                    <div className='line-clamp-2'>
                                        <Tag color="rgb(239, 255, 244)" className='text-[#00ab56] font-medium text-xs rounded-full'>Home</Tag>
                                        <span className='text-gray-500 font-normal text-justify'>
                                            188/1/44 Nguyễn Văn Cừ, Phường An Hòa, Quận Ninh Kiều, Cần Thơ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Voucher */}
                            <div className='bg-white rounded h-fit p-4 shadow-sm'>
                                <div className='flex flex-col gap-3'>
                                    <div className='text-sm font-medium'>Dandelion Voucher</div>
                                    <div className='flex justify-between'>
                                        <Input defaultValue="" size='small' onChange={handleVoucher} allowClear style={{ width: '75%' }} />
                                        <Button type="primary" size='small' disabled={isDisable} >Apply</Button>
                                    </div>
                                </div>
                            </div>
                            {/* Total Fee */}
                            <div className='bg-white rounded h-fit p-4 shadow-sm'>
                                <div className='flex flex-col gap-2 text-sm text-gray-700 font-medium'>
                                    <div className='flex justify-between items-center'>
                                        <div className='font-normal text-gray-500'>Merchandise Subtotal:</div>
                                        <div className=''>$399</div>
                                    </div>
                                    {/* <div className='flex justify-between items-center'>
                                        <div className='font-normal text-gray-500'>Shipping Total:</div>
                                        <div>$1.2</div>
                                    </div> */}
                                    <div className='flex justify-between items-center pb-4'>
                                        <div className='font-normal text-gray-500'>Discount:</div>
                                        <div>$8</div>
                                    </div>
                                    <div className='flex justify-between items-center border-t pt-4'>
                                        <div className='font-normal text-gray-700'>Estimated Total:</div>
                                        <div className='text-3xl text-primary-500'>$390.8</div>
                                    </div>
                                </div>
                            </div>

                            {/* Button submit */}
                            <Button type='primary' href='/checkout/payment' size='middle' className='font-medium'>Continue</Button>
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
        </>
    )
}
