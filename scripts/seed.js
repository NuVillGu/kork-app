const { db } = require('@vercel/postgres');
const { products, family_colors, categories } = require('../app/lib/default-data.js');

async function seedProducts(client) {
    try {

        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                product_code VARCHAR(10) NOT NULL,
                name VARCHAR(100) NOT NULL,
                description1 TEXT,
                description2 TEXT,
                category VARCHAR(10) NOT NULL,
                size TEXT NOT NULL,
                color VARCHAR(15) NOT NULL,
                family_color VARCHAR(15) NOT NULL,
                brand VARCHAR(100),
                price FLOAT NOT NULL,
                onsale_price FLOAT,
                images TEXT NOT NULL,
                entry_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                update_date TIMESTAMP,
                review FLOAT,
                wished INT
            );
        `;

        console.log(`Created "products" table`);

        const insertedProducts = await Promise.all(
            products.map(async (product) => {
                const sizeJson = JSON.stringify(product.size);
                const imagesJson = JSON.stringify(product.images);
                return client.sql`
                    INSERT INTO products (product_code, name, description1, description2, brand, category, size, price, onsale_price, color, family_color, images)
                    VALUES (${product.product_code}, ${product.name}, ${product.description1}, ${product.description2}, ${product.brand}, ${product.category}, ${sizeJson}, ${product.price}, ${product.onsale_price}, ${product.color}, ${product.family_color}, ${imagesJson})
                `;
            })
        );

        console.log(`Seeded ${insertedProducts.length} products`);

        return { createTable, products: insertedProducts };

    } catch (error) {
            console.error('Error seeding products:', error);
            throw error;
    }
}


async function seedFamilyColors(client) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS products_family_colors (
                name VARCHAR(50) NOT NULL,
                color VARCHAR(15) NOT NULL,
                PRIMARY KEY (name, color)
            );
        `;
    
        console.log(`Created "products_family_colors" table`);
    
        const seedFamilyColors = await Promise.all(
            family_colors.map(async (family_color) => {
                return client.sql`
                    INSERT INTO products_family_colors (name, color) VALUES (${family_color.name}, ${family_color.color})
                `;
            })
        );
    
        console.log(`Seeded ${seedFamilyColors.length} family_colors`);
    
        return { createTable, family_colors: seedFamilyColors };

    } catch (error) {
        console.error('Error seeding products_family_colors:', error);
        throw error;
    }
}


async function seedCategories(client) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS products_categories (
                name VARCHAR(50) NOT NULL,
                category VARCHAR(10) NOT NULL,
                size TEXT NOT NULL,
                PRIMARY KEY (name, category)
            );
        `;
    
        console.log(`Created "products_categories" table`);
    
        const seedCategories = await Promise.all(
            categories.map(async (category) => {
                const sizesJson = JSON.stringify(category.size);
                return client.sql`
                    INSERT INTO products_categories (name, category, size) VALUES (${category.name}, ${category.category}, ${sizesJson})
                `;
            })
        );
    
        console.log(`Seeded ${seedCategories.length} categories`);
    
        return { createTable, categories: seedCategories };

    } catch (error) {
        console.error('Error seeding products_categories:', error);
        throw error;
    }
}




async function main() {
    const client = await db.connect();

    await seedProducts(client);
    await seedFamilyColors(client);
    await seedCategories(client);

    await client.end();
}

main().catch((err) => {
    console.error( 'An error occurred while attempting to seed the database:', err );
});
