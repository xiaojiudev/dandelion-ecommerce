'use client'

import React from 'react';
import { Button, Form, Input, Rate, Upload } from 'antd';
import { UploadCloud } from 'lucide-react';

import { ratingStatus } from '@/constants';

type ProductReview = {
    rate: number;
    upload: any;
    comment: string;
}



export default function Review() {

    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };


    const onFinish = (values: any) => {
        console.log('Success:', values);
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <div className='flex flex-col gap-5'>
            <h2 className='text-center text-xl font-medium text-gray-800'>Leaving your review</h2>
            <div className=''>
                <Form
                    name='product_review'
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 24 }}
                    style={{ maxWidth: '90%' }}
                    initialValues={{ rate: 5 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='horizontal'

                >
                    {/* Rating Star */}
                    <Form.Item<ProductReview>
                        name="rate"
                        label="Rate"
                        required
                        labelCol={{ offset: 0 }}
                    >
                        <Rate tooltips={ratingStatus} />
                    </Form.Item>

                    {/* Image, Video Block */}
                    <Form.Item
                        name="upload"
                        label="Upload"
                        required
                        labelCol={{ offset: 0 }}
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                    // extra="longgggggggggggggggggggggggggggggggggg"
                    >
                        <Upload name="logo" action="/upload.do" listType="picture" maxCount={5}>
                            <Button icon={<UploadCloud size={16} />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>

                    {/* Writing comment */}
                    <Form.Item<ProductReview>
                        name="comment"
                        label="Your Review"
                        labelCol={{ offset: 0 }}
                        hasFeedback
                        validateDebounce={300}
                        rules={[{ required: true, message: 'Writing at least 20-100 characters', min: 20, max: 200 }]}
                    >
                        <Input.TextArea
                            placeholder='Please share what you like about this product.'
                            style={{ height: 120, resize: 'none' }}
                            maxLength={200}
                            showCount
                        />
                    </Form.Item>

                    {/* Submit */}
                    <Form.Item className='text-center'>
                        <Button type="primary" shape='round' htmlType="submit" tabIndex={6}>
                            Send your review
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
