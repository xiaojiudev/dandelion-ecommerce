import React from 'react'

interface TitleTypographyProps {
    headingText: string
    headingClass?: string
    descText?: string
    descClass?: string
    classWrapper?: string
}

export default function TitleTypography({ headingText, headingClass = '', descText, descClass = '', classWrapper = '' }: TitleTypographyProps) {
    return (
        <div className={`${classWrapper}`}>
            <h1 className={`mb-2 text-center text-3xl font-medium leading-none tracking-tight text-gray-800 select-none ${headingClass}`}>{headingText}</h1>
            {descText && (
                <p className={`mb-3 text-center text-base text-gray-500 font-normal select-none ${descClass}`}>{descText}</p>
            )}
        </div>
    )
}
