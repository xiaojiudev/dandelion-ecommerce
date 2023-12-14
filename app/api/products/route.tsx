export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') ?? 0;
    const size = searchParams.get('size') ?? 10;
    const sortBy = searchParams.get('sortBy') ?? '';
    const sortDir = searchParams.get('sortDir') ?? '';
    const category = searchParams.get('category') ?? '';


    const res = await fetch(`${process.env.BACKEND_PUBLIC_API_URI}/products?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}&category=${category}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        next: { revalidate: 0 },
        // cache: 'no-store',
    })
    const products = await res.json()

    return Response.json({ products })
}