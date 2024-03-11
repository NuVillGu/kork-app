import React from 'react';
import FormProduct from '@/app/components/forms/products/FormProduct';
import { fetchProductCategory, fetchProductFamilyColor } from '@/app/lib/data';


async function FormMain({type, properties}) {

    const categories = await fetchProductCategory();
    const family_colors = await fetchProductFamilyColor();

    const categoryObject = categories.map(category => { 
        return {
            label: category.name,
            value: category.category,
            sizes: JSON.parse(category.size)
        };
    });
    
    return (
            <div id="edit-product_form">
                <FormProduct properties={properties} type={type} categories={categoryObject} family_colors={family_colors}/>
            </div>
    );
}

export default FormMain;