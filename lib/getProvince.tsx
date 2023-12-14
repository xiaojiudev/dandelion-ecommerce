import { Provinces } from "@/types/types"

export async function getProvincesAPI(): Promise<Provinces[]> {
    const res = await fetch('https://provinces.open-api.vn/api/?depth=3')

    if (!res.ok) throw new Error('Failed to fetch data')

    return res.json()

}


