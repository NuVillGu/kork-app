'use client'

import React, { useState } from 'react';
import Dropzone from '@/app/components/forms/products/Dropzone';
import CardButton from '@/app/components/CardButton';
import SalePrice from '@/app/components/forms/products/SalePrice';
import Price from '@/app/components/forms/products/Price';
import Brand from '@/app/components/forms/products/Brand';
import Description1 from '@/app/components/forms/products/Description1';
import Description2 from '@/app/components/forms/products/Description2';
import Name from '@/app/components/forms/products/Name';
import FamilyColor from '@/app/components/forms/products/FamilyColor';
import Color from '@/app/components/forms/products/Color';
import ProductCode from '@/app/components/forms/products/ProductCode';
import SizeStock from '@/app/components/forms/products/SizeStock';
import Category from '@/app/components/forms/products/Category';
import Link from '@/node_modules/next/link';


export default function AddProduct({ family_colors, categories, cardSize, onDrop, selectedImages, setSelectedImages, alertDropzone, setAlertDropzone, borderDropzone, setBorderDropzone}) {

    const [sizes, setSizes] = useState(categories[0].sizes); 
    const defaultCategoryValue = {label: categories[0].label, value: categories[0].value};

    const handleCheck = () => {
        const inputsStock = document.getElementsByClassName("stock-input_add");
        const arrayInputsStock = Array.from(inputsStock);
        const todosVacios = arrayInputsStock.every(input => input.value.trim() === '');
        if (todosVacios) {
            document.getElementById("pop_error-validation_stock").style.display = "block";
        } else {
            document.getElementById("pop_error-validation_stock").style.display = "none";
        }
    };
    
    

    return (
        <div>
                <div id="btns-edit-add">
                    <CardButton name="SAVE" handleEvent={handleCheck}/>
                    <Link href="/products/list" className="card-button">GO TO PRODUCTS LIST</Link>
                </div>
                { cardSize > 460 ? (
                    <div>
                        <div id="add-product_form-standar_aux">
                        <div className={ cardSize > 900 ? ("add-product_form-standar_section-horizontal") : ( cardSize > 680 ? ("add-product_form-small_section-horizontal") : ("add-product_form-extrasmall_section-horizontal") ) }></div>
                        <div id="add-product_form-standar_section-main">
                                { cardSize > 680 ? (
                                    <div className="row form_bottom-vertical-separation">
                                        <ProductCode className="col-4"/>
                                        <Brand className="col-8"/>
                                    </div>
                                ) : (
                                    <div className="row form_bottom-vertical-separation">
                                        <ProductCode className="col-6"/>
                                        <Brand className="col-6"/>
                                    </div>
                                )}
                                <Name className="col-12 form_bottom-vertical-separation"/>
                                <div className="row form_bottom-vertical-separation">
                                    <Category className="col-6" setSizes={setSizes} categories={categories} defaultCategoryValue={defaultCategoryValue}/>
                                    <Color className="col-6"/>
                                </div>
                                <div className="row form_bottom-vertical-separation">
                                    <Price className="col-6"/>
                                    <SalePrice className="col-6"/>
                                </div>
                                <div className="row form_bottom-vertical-separation">
                                    <Description1 className="col-6 product-description-line" row="3"/>
                                    <Description2 className="col-6 product-description-line" row="3"/>
                                </div>
                                <SizeStock className="col-12 form_bottom-vertical-separation" sizes={sizes}/>
                                <FamilyColor family_colors={family_colors} className="col-12"/>
                                { cardSize < 900 && 
                                    <div id="add-product_form-small_dropzone">
                                        <Dropzone onDrop={onDrop} selectedImages={selectedImages} setSelectedImages={setSelectedImages} alertDropzone={alertDropzone} setAlertDropzone={setAlertDropzone} borderDropzone={borderDropzone} setBorderDropzone={setBorderDropzone}/>
                                    </div>
                                }
                            </div>
                            <div className={ cardSize > 900 ? ("add-product_form-standar_section-horizontal") : ( cardSize > 680 ? ("add-product_form-small_section-horizontal") : ("add-product_form-extrasmall_section-horizontal") ) }></div>
                        </div>
                        { cardSize > 900 && 
                            <div id="add-product_form-standar_dropzone">
                                <Dropzone onDrop={onDrop} selectedImages={selectedImages} setSelectedImages={setSelectedImages} alertDropzone={alertDropzone} setAlertDropzone={setAlertDropzone} borderDropzone={borderDropzone} setBorderDropzone={setBorderDropzone}/>
                            </div>
                        }
                    </div>
                ) : (
                    <div>
                        <div>
                            <ProductCode className="col-12 form_bottom-vertical-separation"/>
                            <Brand className="col-12 form_bottom-vertical-separation"/>
                            <Name className="col-12 form_bottom-vertical-separation"/>
                            <Price className="col-12 form_bottom-vertical-separation"/>
                            <SalePrice className="col-12 form_bottom-vertical-separation"/>
                            <FamilyColor family_colors={family_colors} className="col-12 form_top-vertical-separation"/>
                            <SizeStock className="col-12 form_bottom-vertical-separation" sizes={sizes}/>
                            <Category className="col-12 form_bottom-vertical-separation" setSizes={setSizes} categories={categories} defaultCategoryValue={defaultCategoryValue}/>
                            <Color className="col-12 form_bottom-vertical-separation"/>
                            <Description1 className="product-description-block form_bottom-vertical-separation" row="4"/>
                            <Description2 className="product-description-block" row="4"/>
                        </div>
                        <div id="edit-product_form-mobile_dropzone">
                            <Dropzone onDrop={onDrop} selectedImages={selectedImages} setSelectedImages={setSelectedImages} alertDropzone={alertDropzone} setAlertDropzone={setAlertDropzone} borderDropzone={borderDropzone} setBorderDropzone={setBorderDropzone}/>
                        </div>
                    </div>
                )}
        </div>
    );
}