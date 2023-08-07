'use client'

import React from 'react'
import { FloatButton } from 'antd'
import { HelpCircle, MessageCircle } from 'lucide-react'

export default function FloatButtonGroup() {
    return (
        <>
            <FloatButton.Group shape="circle" >
                <FloatButton.BackTop />
                <FloatButton icon={<MessageCircle size={18} strokeWidth={1.9} />} badge={{ count: 3, overflowCount: 999 }} tooltip={<div>Chat</div>}/>
                <FloatButton icon={<HelpCircle size={18} strokeWidth={1.9} />} badge={{ dot: true }} tooltip={<div>Help</div>} />
            </FloatButton.Group>
        </>
    )
}
