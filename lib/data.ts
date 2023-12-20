
export async function fetchProducts({page = 0, size = 10, sortBy = '', sortDir = '', category = 'All'}) {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(`${process.env.BACKEND_PUBLIC_API_URI}/products?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}&category=${category}`, {
        next: {
            revalidate: 0,
        }
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

export async function fetchCategories() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch('http://localhost:8080/api/v1/categories');

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json();
}