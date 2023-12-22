'use client'
import React from 'react';
import Link from 'next/link';
import { Button, Form, Input } from 'antd';
import { ChevronLeft } from 'lucide-react';

import { regexEmail } from '@/constants/regex';
import { SIGNIN_URI } from '@/constants/baseURL';

type ForgotType = {
    email: string
}


export default function ForgetPW() {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <>
            <div className='w-full max-w-[416px] flex flex-col gap-10'>
                <h2 className='font-bold text-center text-2xl text-gray-900'>Forgot Password?</h2>
                <div className='flex flex-col gap-5 text-sm text-gray-900 text-justify'>
                    <p>
                        Enter the email address you used when you joined and we&apos;ll send you instructions to reset your password.
                    </p>
                    <p>
                        For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.
                    </p>
                </div>
                <div>
                    <Form
                        name="forgotpw"
                        className=''
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 24 }}
                        style={{ maxWidth: 600 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete='off'
                        layout='vertical'
                    >
                        <Form.Item<ForgotType>
                            label={<span className='font-semibold text-[15px]'>Email Address</span>}
                            name="email"
                            required
                            hasFeedback
                            validateDebounce={1000}
                            rules={[{ required: true, type: "email", message: 'Email invalid!', pattern: new RegExp(regexEmail) }]}
                        >
                            <Input tabIndex={1} allowClear/>
                        </Form.Item>

                        {/* Submit */}
                        <Form.Item className='flex justify-center'>
                            <Button type="primary" block shape='round' htmlType="submit" tabIndex={6}>
                                Send Reset Instructions
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <Link href={SIGNIN_URI}>
                <button className='absolute top-10 left-10 w-10 h-10 border hover:border-[#dbdbde] rounded-full flex justify-center items-center'>
                    <ChevronLeft size={18} />
                </button>
            </Link>
        </>
    )
}
