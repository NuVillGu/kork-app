'use client'

import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
import { createProduct, updateProduct } from '@/app/lib/actions';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import { useForm } from 'react-hook-form';
export { FormContext };
import { CardSizeContext } from "../../comun/Main";


const FormContext = createContext();


function FormProduct({type, categories, family_colors, properties}) {

    const { register, handleSubmit, formState: { errors }, trigger, control } = useForm();

    const cardSize = useContext(CardSizeContext);

    const [selectedImages, setSelectedImages] = useState([]);
    const [alertDropzone, setAlertDropzone] = useState("estandar-alert");
    const [borderDropzone, setBorderDropzone] = useState("estandar-border");

    const handleDrop = (acceptedFiles) => {
        setSelectedImages(prev => [...prev, ...acceptedFiles]);
        setAlertDropzone("estandar-alert");
        setBorderDropzone("estandar-border");
    };

    const onSubmit = async (data) => {
        const formData = new FormData();
    
        if (document.getElementById("pop_error-validation_stock").style.display === "block") {
            return;
        }

        if (selectedImages.length > 0) {
            selectedImages.forEach((file) => {
                formData.append('images', file);
            });
        }
        
        if (properties) {
            formData.append('id', properties.id);
        }

        Object.entries(data).forEach(([name, value]) => {
            if (name.startsWith('stock-')) {
                const stockValue = value;
                const size = name.replace('stock-', '');
                const sizeFormatted = size.replace('_', '.');
                if (value) {
                    if (formData.has('size')) {
                        const sizesArray = JSON.parse(formData.get('size'));
                        sizesArray.push({ value: sizeFormatted, stock: stockValue });
                        formData.set('size', JSON.stringify(sizesArray));
                    } else {
                        formData.append('size', JSON.stringify([{ value: sizeFormatted, stock: stockValue }]));
                    }
                }
            } else if ( name == "category" ) {
                formData.append(name, value.value);
            } else {
                formData.append(name, value);
            }
        });
    
        try {

            if (selectedImages.length > 0) {
                await axios.post('/api/upload', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }
    
            if (type == "create") {
                await createProduct(formData);
            } else {
                await updateProduct(formData);
            }

        } catch (error) {
            console.error('Error creating or updating product:', error);
        }
    };

    return (
        <FormContext.Provider value={{ register, errors, trigger, control }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    type == "create" ? (
                        <AddProduct family_colors={family_colors} categories={categories} cardSize={cardSize} onDrop={handleDrop} selectedImages={selectedImages} setSelectedImages={setSelectedImages} alertDropzone={alertDropzone} setAlertDropzone={setAlertDropzone} borderDropzone={borderDropzone} setBorderDropzone={setBorderDropzone}/>
                    ) : (
                        <EditProduct family_colors={family_colors} properties={properties} categories={categories} cardSize={cardSize} onDrop={handleDrop} selectedImages={selectedImages} setSelectedImages={setSelectedImages} alertDropzone={alertDropzone} setAlertDropzone={setAlertDropzone} borderDropzone={borderDropzone} setBorderDropzone={setBorderDropzone}/>
                    )
                }
            </form>
        </FormContext.Provider>
    );
}

export default FormProduct;