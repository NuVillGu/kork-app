'use server'

import { sql } from '@vercel/postgres';
import { revalidatePath } from '@/node_modules/next/cache';
import { redirect } from '@/node_modules/next/dist/client/components/redirect';
import { fetchImagesById, fetchSizesById } from './data';


export async function createProduct(formData) {

    const images = formData.getAll('images').map(file => `/images/products/${file.name}`);
    const imagesArray = `[${images.map(image => `"${image}"`).join(',')}]`;

    const data = {
        product_code: formData.get('product-code'),
        brand: formData.get('brand'),
        name: formData.get('name'),
        price: parseFloat(formData.get('price')),
        onsale_price: parseFloat(formData.get('sale-price')),
        family_color: formData.get('family-color'),
        color: formData.get('color'),
        size: formData.get('size'),
        description1: formData.get('description1'),
        category: formData.get('category'),
        description2: formData.get('description2'),
        images: imagesArray
    };

    console.log('Data:', data);

    await sql`
        INSERT INTO products (product_code, name, description1, description2, brand, category, size, price, onsale_price, color, family_color, images)
        VALUES (${data.product_code}, ${data.name}, ${data.description1}, ${data.description2}, ${data.brand}, ${data.category}, ${data.size}, ${data.price}, ${data.onsale_price}, ${data.color}, ${data.family_color}, ${data.images})
    `;

    revalidatePath('/products/list');
    redirect('/products/list');
}



export async function updateProduct(formData) {

    let updateImages = '';

    const actualImages = await fetchImagesById(formData.get('id'));

    const actualImagesFormatted = actualImages.rows[0].images.replace(/[\[\]"]+/g, '').split(',');
    const newImages = formData.getAll('images').map(file => `/images/products/${file.name}`);

    if (actualImages && newImages) {
        updateImages = actualImagesFormatted.concat(newImages);
    } else if (actualImages && !newImages) {
        updateImages = actualImages;
    } else if (!actualImages && newImages) {
        updateImages = newImages;
    }

    const updateImagesArray = `[${updateImages.map(image => `"${image}"`).join(',')}]`;


    const actualSizes = await fetchSizesById(formData.get('id'));
    const actualSizesFormatted = JSON.parse(actualSizes.rows[0].size);
    const newSize = JSON.parse(formData.get('size'));

    console.log(actualSizesFormatted);
    console.log(newSize);
    
    const newSizeFormatted = newSize.filter(item => {
        return !actualSizesFormatted.some(actualItem => {
            return actualItem.value === item.value && actualItem.stock === item.stock;
        });
    });


    const size = JSON.stringify(newSizeFormatted);

    const data = {
        product_code: formData.get('product-code'),
        brand: formData.get('brand'),
        name: formData.get('name'),
        price: parseFloat(formData.get('price')),
        onsale_price: parseFloat(formData.get('sale-price')),
        family_color: formData.get('family-color'),
        color: formData.get('color'),
        size: size,
        description1: formData.get('description1'),
        category: formData.get('category'),
        description2: formData.get('description2'),
        images: updateImagesArray
    };

    console.log('Data:', data);

    await sql`
        UPDATE products
        SET name = ${data.name}, description1 = ${data.description1}, description2 = ${data.description2}, brand = ${data.brand}, category = ${data.category}, size = ${data.size}, price = ${data.price}, onsale_price = ${data.onsale_price}, color = ${data.color}, family_color = ${data.family_color}, images = ${data.images}
        WHERE id = ${formData.get('id')};
    `;

    revalidatePath('/products/list');
    redirect('/products/list');
}



export async function deleteProduct(id) {

    let idArray;

    if (typeof id === 'string') {
        idArray = id.split(',');

        for (let i = 0; i < idArray.length; i++) {
            idArray[i] = parseInt(idArray[i]);
        }

        for (const id of idArray) {
            await sql`DELETE FROM products WHERE id = ${id}`;
        }
    } else {
        await sql`DELETE FROM products WHERE id = ${id}`;
    }

    revalidatePath('/products/list');
    redirect('/products/list');
}

