export type CartItem = {
    product_id: string;
    name: string;
    quantity: number;
    available_quantity: number;
    unit_price: number;
    description: string;
    information: string;
    media_url: string;
    item_sub_total: number;
}

export type UserCart = {
    items: CartItem[];
    merchandise_total: number;
    shippingFee: number | null;
    total: number;
    status: boolean;
    cart_id: string;
    user_id: string;
}


export type Category = {
    id: number;
    name: string;
}

export type Product = {
    id: string;
    name: string;
    weight: number;
    quantity: number;
    price: number;
    description: string;
    information: string;
    tag: string;
    category: string;
    media_url: string[];
}

export type Products = {
    content: ProductDetails[],
    lastPage: boolean,
    pageNumber: number,
    pageSize: number,
    totalElements: number,
    totalPages: number,
}

export type Wards = {
    name: string,
    code: number,
    codename: string,
    division_type: string,
    short_codename: string,
}

export type Districts = {
    name: string,
    code: number,
    codename: string,
    division_type: string,
    short_codename: string,
    wards: Wards[],
}

export type Provinces = {
    name: string,
    code: number,
    division_type: string,
    codename: string,
    phone_code: number,
    districts: Districts[],
};



