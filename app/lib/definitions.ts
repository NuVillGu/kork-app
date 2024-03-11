export type Product = {
    id: string;
    product_code: string;
    name: string;
    description1: string;
    description2: string;
    category: string;
    size: { value: string; stock: string }[];
    color: string;
    family_color: string;
    brand: string;
    price: number;
    onsale_price: number;
    images: [];
    entry_date: string;
    update_date: string;
    review: number;
    wished: number;
    status: 'Available' | 'Unavailable';
};

export type ProductFamilyColor = {
    name: string;
    color: string;
};

export type ProductCategory = {
    name: string;
    category: string;
    size: [];
};
  