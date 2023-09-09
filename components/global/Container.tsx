import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <main className='container max-w-screen-xl mx-auto my-10 px-4 sm:px-6 lg:px-8'>
            {children}
        </main>
    )
}
