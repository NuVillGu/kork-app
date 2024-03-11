import { sql } from '@vercel/postgres';
import { Product, ProductFamilyColor, ProductCategory } from './definitions';
import { formatObjectValue } from './utils';



export async function fetchProduct() {

    try {
        //AQUI HAY QUE VER COMO METER LA PROPIEDAD DE STATUS

        const data = await sql<Product>`SELECT id, product_code, name, category, size, color, price, onsale_price, images, entry_date FROM products`;

        const formattedData = data.rows.map(row => ({
            ...row,
            size: formatObjectValue(row.size)
        }));

        return formattedData;
        
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch products data.');
    }
}



export async function fetchProductById(id: string) {
    try {
        const data = await sql<Product>`
            SELECT id, product_code, name, description1, description2, category, size, color, family_color, brand, price, onsale_price, images FROM products WHERE id = ${id};
        `;

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch product.');
    }
}

export async function fetchImagesById(id: string) {

    try {

        const data = await sql<Product>`
            SELECT images FROM products WHERE id = ${id};
        `;

        return data;
        
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch images products data.');
    }
}

export async function fetchProductCategory() {
    try {
      const data = await sql<ProductCategory>`SELECT name, category, size FROM products_categories`;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch categories data.');
    }
}

export async function fetchProductFamilyColor() {
    try {
        const data = await sql<ProductFamilyColor>`SELECT * FROM products_family_colors`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch family colors data.');
    }
}

export async function fetchSizesById(id: string) {
    try {
        const data = await sql<Product>`
            SELECT size FROM products WHERE id = ${id};
        `;

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch sizes.');
    }
}