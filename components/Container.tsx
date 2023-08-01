import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <main className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            {children}
        </main>
    )
}
