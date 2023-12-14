'use client'
import { useCallback } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"


export function useCreateQueryString() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()!

    const createQueryString = useCallback(
        (name: string, value: string, clearParams?: boolean) => {
            let params;
            if (clearParams) {
                params = new URLSearchParams()
            } else {
                params = new URLSearchParams(searchParams)
            }
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )


    return createQueryString;
}