
export async function fetchProducts({page = 0, size = 10, sortBy = '', sortDir = '', category = 'All', search = ''}) {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    let inputUrl = new URL(`${process.env.BACKEND_PUBLIC_API_URI}/products`);
    
    inputUrl.searchParams.set('page', page.toString());
    inputUrl.searchParams.set('size', size.toString());
    inputUrl.searchParams.set('sortBy', sortBy);
    inputUrl.searchParams.set('sortDir', sortDir);
    inputUrl.searchParams.set('category', category);
    inputUrl.searchParams.set('search', search);
    
    const url = inputUrl.href.replace(/[^=&]+=(&|$)/g,"").replace(/&$/,"");

    const res = await fetch(url, {
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