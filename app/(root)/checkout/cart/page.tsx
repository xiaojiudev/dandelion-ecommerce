'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import Table, { ColumnsType } from 'antd/es/table';
import { Button, Input, InputNumber, Popconfirm, Tag, Tooltip, message } from 'antd';

import { CartItem, UserCart } from '@/types/types';
import { DEFAULT_IMG_URL } from '@/constants/baseURL';
import { addProductTocart, deleteProductsFromCart, fetchUserCart } from '@/lib/data';
import { revalidatePath } from 'next/cache';


type DataType = {
    key: React.Key;
} & CartItem;


export default function Checkout() {


    const [messageApi, contextHolder] = message.useMessage();
    const [userCartData, setUserCartData] = useState<UserCart>();
    const [cartItems, setCartItems] = useState([]);
    const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);

    const fetchAndUpdateCart = async () => {
        const updatedUserCartData = await fetchUserCart();
        setUserCartData(updatedUserCartData);
        const updatedCartItems = updatedUserCartData?.items?.map((item: CartItem) => {
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
        });
        setCartItems(updatedCartItems);
    };

    useEffect(() => {
        console.log('component rendered');
        fetchAndUpdateCart();
    }, []);

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
                                onChange={(valueChange) => updateProductQuantityInCart(valueChange, record?.available_quantity, record?.product_id)}
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
            render: (text: string, record: { product_id: string }) => {
                return (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDeleteProduct(record?.product_id)}>
                        <div className='flex items-center justify-center cursor-pointer' >
                            <Trash2 size={16} strokeWidth={2} color='' className='stroke-slate-600' />
                        </div>
                    </Popconfirm>
                );
            }
        },
    ];



    const rowSelection = {
        selectedRowIds,
        onChange: async (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            setSelectedRowIds(selectedRowKeys as string[]);
        },
        selections: [
            {
                key: 'delete_all',
                text: 'Delete all products',
                onSelect: async () => {
                    if (selectedRowIds.length > 0 && selectedRowIds.length === cartItems.length) {
                        const newData = cartItems.filter((item: any) => !selectedRowIds.includes(item.key));
                        setCartItems(newData);
                        await deleteProductsFromCart(selectedRowIds);
                    }
                },
            },
        ],
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    const updateProductQuantityInCart = useCallback(async (valueChange: number, maxQuantity: number, productId: string) => {
        if (valueChange <= maxQuantity) {
            await addProductTocart({ productId, quantity: valueChange ?? 1 });
            fetchAndUpdateCart();
        }
    }, [])

    const handleDeleteProduct = async (productId: string) => {
        if (selectedRowIds.includes(productId)) {
            await deleteProductsFromCart([productId]);
            const newData = cartItems.filter((item: any) => item.product_id !== productId);
            setCartItems(newData);
        } else {
            messageApi.open({
                key: productId,
                type: 'warning',
                content: 'Please select the product to delete',
                duration: 1.5,
            });
        };
    }

    return (
        <>
            {/* Message notify */}
            {contextHolder}

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
                                        <div className=''>${userCartData?.merchandise_total}</div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div className='font-normal text-gray-500'>Shipping Total:</div>
                                        <div>${userCartData?.shippingFee}</div>
                                    </div>
                                    <div className='flex justify-between items-center pb-4'>
                                        <div className='font-normal text-gray-500'>Discount:</div>
                                        <div>$0</div>
                                    </div>
                                    <div className='flex justify-between items-center border-t pt-4'>
                                        <div className='font-normal text-gray-700'>Estimated Total:</div>
                                        <div className='text-3xl text-primary-500'>${userCartData?.total}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Button submit */}
                            <Link href='/checkout/payment'>
                                <Button
                                    type='primary'
                                    size='middle'
                                    className='font-medium w-full'
                                    disabled={cartItems?.length > 0 ? false : true}
                                >
                                    Continue
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}

        </>
    )
}
