'use client'
import { useStoreVoucher } from '@/hooks/use-store-voucher'
import { Button, Input, RadioChangeEvent, Tag, Radio, Space, Tooltip } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'



export default function Payment() {

    const isDisable = useStoreVoucher((state) => state.isDisable)
    const setEnableState = useStoreVoucher((state) => state.setEnable)
    const setDisableState = useStoreVoucher((state) => state.setDisable)

    const handleVoucher = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        value.length > 0 ? setEnableState() : setDisableState()
    }


    const [paymentValue, setPaymentValue] = useState(1)
    const [shipValue, setShipValue] = useState(1)

    const handlePaymentChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setPaymentValue(e.target.value);
    };

    const handleShippingChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setShipValue(e.target.value);
    };

    return (
        <>
            <div className='grid grid-cols-12 gap-5'>
                {/* Left bar */}
                <div className="col-span-9">
                    <div className='flex flex-col flex-1 justify-center gap-3'>
                        <div className='bg-white p-4 rounded shadow-sm' >
                            <h3 className='text-xl font-semibold text-gray-800 mb-6'>Choose payment method</h3>
                            <Radio.Group onChange={handlePaymentChange} value={paymentValue}>
                                <Space direction="vertical" size={25}>
                                    <Radio value={1} defaultChecked>
                                        <div className='flex items-center gap-2 text-base font-normal text-gray-700'>
                                            <Image src='/assets/img/cod.png' sizes='100vw' width={32} height={32} quality={100} alt='COD' className='object-cover'></Image>
                                            <span className='select-none'>Cash on Delivery (COD)</span>
                                        </div>
                                    </Radio>
                                    <Radio value={2}>
                                        <div className='flex items-center gap-2 text-base font-normal text-gray-700'>
                                            <Image src='/assets/img/stripe.png' sizes='100vw' width={32} height={32} quality={100} alt='COD' className='object-cover'></Image>
                                            <span className='select-none'>Stripe</span>
                                        </div>
                                    </Radio>
                                    <Radio value={3} disabled>
                                        <div className='flex items-center gap-2 text-base font-normal text-gray-700'>
                                            <Image src='/assets/img/viettelpay.png' sizes='100vw' width={32} height={32} quality={100} alt='COD' className='object-cover'></Image>
                                            <span className='select-none'>Viettel Money</span>
                                        </div>
                                    </Radio>
                                    <Radio value={4} disabled>
                                        <div className='flex items-center gap-2 text-base font-normal text-gray-700'>
                                            <Image src='/assets/img/momo.jpg' sizes='100vw' width={32} height={32} quality={100} alt='COD' className='object-cover'></Image>
                                            <span className='select-none'>Momo</span>
                                        </div>
                                    </Radio>
                                    <Radio value={5} disabled>
                                        <div className='flex items-center gap-2 text-base font-normal text-gray-700'>
                                            <Image src='/assets/img/zalopay.png' sizes='100vw' width={32} height={32} quality={100} alt='COD' className='object-cover'></Image>
                                            <span className='select-none'>ZaloPay</span>
                                        </div>
                                    </Radio>
                                    <Radio value={6} disabled>
                                        <div className='flex items-center gap-2 text-base font-normal text-gray-700'>
                                            <Image src='/assets/img/vnpay.png' sizes='100vw' width={32} height={32} quality={100} alt='COD' className='object-cover'></Image>
                                            <span className='select-none'>VNPAY</span>
                                        </div>
                                    </Radio>
                                    <Radio value={7} disabled>
                                        <div className='flex items-center gap-2 text-base font-normal text-gray-700'>
                                            <Image src='/assets/img/visa.png' sizes='100vw' width={32} height={32} quality={100} alt='COD' className='object-cover'></Image>
                                            <span className='select-none'>Credit or Debit Card</span>
                                        </div>
                                    </Radio>
                                    <Radio value={8} disabled>
                                        <div className='flex items-center gap-2 text-base font-normal text-gray-700'>
                                            <Image src='/assets/img/atm.png' sizes='100vw' width={32} height={32} quality={100} alt='COD' className='object-cover'></Image>
                                            <span className='select-none'>ATM (Internet Banking)</span>
                                        </div>
                                    </Radio>
                                </Space>
                            </Radio.Group>
                        </div>
                    </div>
                </div>

                {/* Right bar */}
                <div className="col-span-3">
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

                        {/* Shipping method */}
                        <div className='bg-white rounded h-fit p-4 shadow-sm'>
                            <div className='flex flex-col gap-3'>
                                <div className='text-sm font-medium'>Select shipping option</div>
                                <Radio.Group onChange={handleShippingChange} value={shipValue} className=''>
                                    <Space direction="vertical" size={12}>
                                        <div className=''>
                                            <Tooltip placement="right" title={'Received by 4 Sep - 7 Sep'}>
                                                <div className='p-2 bg-primary-50/50 border border-primary-300/60 border-dashed rounded-lg'>
                                                    <Radio value={1} className=''>
                                                        <div className='flex flex-1 justify-between items-center gap-2 select-none text-sm'>
                                                            <span className='w-100'>Fast Express</span>
                                                            <Tag color="#fff" className='text-[#00ab56] font-medium text-sm rounded-full'>3$</Tag>
                                                        </div>
                                                    </Radio>
                                                </div>
                                            </Tooltip>
                                        </div>
                                        <div className=''>
                                            <Tooltip placement="right" title={'Received by 8 Sep - 12 Sep'}>
                                                <div className='p-2 bg-primary-50/50 border border-primary-300/60 border-dashed rounded-lg'>
                                                    <Radio value={2} className=''>
                                                        <div className='flex flex-1 justify-between items-center gap-2 select-none text-sm'>
                                                            <span className='w-100'>Standard Express</span>
                                                            <Tag color="#fff" className='text-[#00ab56] font-medium text-sm rounded-full'>2.8$</Tag>
                                                        </div>
                                                    </Radio>
                                                </div>
                                            </Tooltip>
                                        </div>
                                        <div className=''>
                                            <Tooltip placement="right" title={'Received by 9 Sep - 15 Sep'}>
                                                <div className='p-2 bg-primary-50/50 border border-primary-300/60 border-dashed rounded-lg'>
                                                    <Radio value={3} className=''>
                                                        <div className='flex flex-1 justify-between items-center gap-2 select-none text-sm'>
                                                            <span className='w-100'>J&T Express</span>
                                                            <Tag color="#fff" className='text-[#00ab56] font-medium text-sm rounded-full'>2$</Tag>
                                                        </div>
                                                    </Radio>
                                                </div>
                                            </Tooltip>
                                        </div>
                                    </Space>
                                </Radio.Group>
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
                                <div className='flex justify-between items-center border-b pb-4'>
                                    <div className='text-base'>Order</div>
                                    <Link href='/' className='text-sm font-normal'>Change</Link>
                                </div>
                                <div className='flex justify-between items-center pt-4'>
                                    <div className='font-normal text-gray-500'>Merchandise Subtotal:</div>
                                    <div className=''>$399</div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='font-normal text-gray-500'>Shipping Total:</div>
                                    <div>$1.2</div>
                                </div>
                                <div className='flex justify-between items-center pb-4'>
                                    <div className='font-normal text-gray-500'>Discount:</div>
                                    <div>$8</div>
                                </div>
                                <div className='flex justify-between items-center border-t pt-4'>
                                    <div className='font-normal text-gray-700'>Total:</div>
                                    <div className='text-3xl text-primary-500'>$390.8</div>
                                </div>
                            </div>
                        </div>

                        {/* Button submit */}
                        <Button type='primary' href='/checkout/payment/success?order_code=759723694' size='middle' className='font-medium'>Order</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
