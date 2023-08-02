import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <main className='container mx-auto flex px-4 sm:px-6 lg:px-8'>
            <div className='flex-1'>
                {children}
            </div>
        </main>
    )
}
