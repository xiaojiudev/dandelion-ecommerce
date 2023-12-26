'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Input, InputNumber, Tag, Tooltip, message } from 'antd'
import { Trash2 } from 'lucide-react'
import { deleteProductsFromCart, fetchUserCart } from '@/lib/data'
import Table, { ColumnsType } from 'antd/es/table'
import { CartItem, UserCart } from '@/types/types'
import { DEFAULT_IMG_URL } from '@/constants/baseURL'


type DataType = {
    key: React.Key;
} & CartItem;



export default function Checkout() {


    const [messageApi, contextHolder] = message.useMessage();
    const [userCartData, setUserCartData] = useState<UserCart>();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const handleGetUserCart = async () => {
            const userCartData = await fetchUserCart();
            const cartItems = userCartData?.items?.map((item: CartItem) => {
                return {
                    key: item.product_id,
                    product_id: item.product_id,
                    name: item.name,
                    quantity: item.quantity,
                    available_quantity: item.available_quantity,
                    unit_price: item.unit_price,
                    description: item.description,
                    information: item.information,
                    media_url: item.media_url,
                    item_sub_total: item.item_sub_total,
                };
            })

            setUserCartData(userCartData);
            setCartItems(cartItems);

        }

        handleGetUserCart();
    }, [])

    const columns: ColumnsType<DataType> = [
        {
            title: `All products (${cartItems?.length ?? 0} products)`,
            dataIndex: 'name',
            width: '40%',
            render: (name: string, record: any) => {

                return (
                    <div className='flex items-center gap-3'>
                        <Image src={record?.media_url.length > 0 ? record?.media_url : DEFAULT_IMG_URL} alt='item' sizes="100vw" quality={70} width={500} height={300} className='w-16 h-16 object-cover rounded-sm' />
                        <div className='flex flex-col items-start gap-2'>
                            <h1 className='text-base font-medium text-gray-800 line-clamp-1'>{name}</h1>
                            <p className='text-sm font-normal text-gray-600 line-clamp-1'>{record?.description}</p>
                        </div>
                    </div>);
            },
        },
        {
            title: 'Unit price',
            dataIndex: 'unit_price',
            render: (unit_price: number) => {
                return (
                    <span className='col-span-2 font-medium text-gray-900'>${unit_price}</span>
                );
            }
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            render: (quantity: number, record: any) => {
                return (
                    <Tooltip title={`${record?.available_quantity} products available`}>
                        <div>
                            <InputNumber
                                // onChange={}
                                min={1}
                                max={record?.available_quantity}
                                defaultValue={quantity ?? 1}
                                size='small'
                            />
                        </div>
                    </Tooltip>
                );
            }
        },
        {
            title: 'Total price',
            dataIndex: 'item_sub_total',
            render: (total_price: number) => {
                return (
                    <span className='col-span-2 font-medium text-rose-500'>${total_price}</span>
                );
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (text: string, record: any) => {
                return (
                    <div className='flex items-center justify-center cursor-pointer' onClick={() => handleDeleteProduct(record?.product_id)}>
                        <Trash2 size={16} strokeWidth={2} color='' className='stroke-slate-600' />
                    </div>
                );
            }
        },
    ];



    const rowSelection = {
        onChange: async (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            // await deleteProductsFromCart([selectedRowKeys.toString()]);
            // const newData = cartItems.filter((item: any) => ![selectedRowKeys].includes(item.product_id));
            // setCartItems(newData);
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    const handleDeleteProduct = async (productId: string) => {
        await deleteProductsFromCart([productId]);
        const newData = cartItems.filter((item: any) => item.product_id !== productId);
        setCartItems(newData);
    }

    return (
        <>
            <div className=''>
                <div className='grid grid-cols-12 gap-5'>

                    {/* Left bar */}
                    <div className='col-span-9'>
                        <Table
                            rowSelection={{
                                type: 'checkbox',
                                ...rowSelection,
                            }}
                            columns={columns}
                            dataSource={[...cartItems]}
                            loading={userCartData ? false : true}
                            pagination={false}
                        />
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
                                        <Input defaultValue="" size='small' onChange={() => { }} allowClear style={{ width: '75%' }} />
                                        <Button type="primary" size='small' disabled={false} >Apply</Button>
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


            {/* Message notify */}
            {contextHolder}
        </>
    )
}
