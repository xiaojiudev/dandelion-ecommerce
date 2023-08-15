
export async function getProvinces() {
    const res = await fetch(`https://provinces.open-api.vn/api/?depth=3`)

    if (!res.ok) return undefined

    const data = await res.json()

    return data
}

