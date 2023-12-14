import { Products } from "@/types/types"


export async function getProductsData(
  page: number = 0,
  size: number = 8,
  sortBy: string = '',
  sortDir: string = ''): Promise<Products> {

  const res = await fetch(`http://localhost:8080/api/v1/products?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}`)

  if (!res.ok) throw new Error('Failed to fetch data')

  return res.json()

}
