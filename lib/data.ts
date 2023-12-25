'use server'
import { auth } from "@/authOptions";
import { revalidatePath } from "next/cache";


export async function addProductTocart(data: { productId: string, quantity: number }) {
    const { productId, quantity } = data;

    const session = await auth();
    const token = session?.accessToken;

    let url = new URL(`${process.env.BACKEND_PUBLIC_API_URI}/carts`);

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            product_id: productId,
            quantity: quantity ?? 1,
        }),
    })

    if (!res.ok) {
        return null;
    }
    revalidatePath("/");
    return res.json();
}

export async function deleteProductFromCart(id: string) {
    const session = await auth();
    const token = session?.accessToken;

    let url = new URL(`${process.env.BACKEND_PUBLIC_API_URI}/carts`);

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            product_id: id,
            // quantity: quantity ?? 1,
        }),
    })

    if (!res.ok) {
        return null;
    }
    revalidatePath("/");
    return res.json();
}

export async function fetchUserCart() {

    const session = await auth();
    const token = session?.accessToken;
    let url = new URL(`${process.env.BACKEND_PUBLIC_API_URI}/carts`);

    const res = await fetch(url, {
        next: {
            revalidate: 0,
        },
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export async function fetchProducts({ page = 0, size = 10, sortBy = '', sortDir = '', category = 'All', search = '' }) {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    let inputUrl = new URL(`${process.env.BACKEND_PUBLIC_API_URI}/products`);

    inputUrl.searchParams.set('page', page.toString());
    inputUrl.searchParams.set('size', size.toString());
    inputUrl.searchParams.set('sortBy', sortBy);
    inputUrl.searchParams.set('sortDir', sortDir);
    inputUrl.searchParams.set('category', category);
    inputUrl.searchParams.set('search', search);

    const url = inputUrl.href.replace(/[^=&]+=(&|$)/g, "").replace(/&$/, "");

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

export async function fetchProductById(id: string) {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(`http://localhost:8080/api/v1/products/${id}`, {
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
    const res = await fetch('http://localhost:8080/api/v1/categories');

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json();
}