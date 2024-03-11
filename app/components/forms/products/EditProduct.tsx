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
import CarouselImg from './CarouselImg';
import Link from '@/node_modules/next/link';


function EditProduct({ family_colors, properties, categories, cardSize, onDrop, selectedImages, setSelectedImages, alertDropzone, setAlertDropzone, borderDropzone, setBorderDropzone}) {

    
    const matchedCategory = categories.find(category => category.value === properties.category);
    const defaultCategoryValue = {label: matchedCategory.label, value: matchedCategory.value};
    const [sizes, setSizes] = useState(matchedCategory.sizes); 

 
    const productCode = properties.product_code;
    const name = properties.name;
    const description1 = properties.description1;
    const description2 = properties.description2;
    const familyColor = properties.family_color;
    const color = properties.color;
    const brand = properties.brand;
    const price = properties.price;
    const onsalePrice = properties.onsale_price;
    const images = JSON.parse(properties.images);
    const size = JSON.parse(properties.size);

    const handleCheck = () => {
        const inputsStock = document.getElementsByClassName("stock-input_update");
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
                        <CardButton name="UPDATE" handleEvent={handleCheck}/>
                        <Link href="/products/list" className="card-button">BACK TO PRODUCTS LIST</Link>
                    </div>
                    { cardSize > 1500 ? (
                        <div>
                            <div id="edit-product_form-extra-big_aux">
                                <div id="edit-product_form-extra-big_section-1">
                                    <div id="block_properties">
                                        <Description1 value={description1} className="product-description-block form_bottom-vertical-separation" row="5"/>
                                        <Description2 value={description2} className="product-description-block" row="5"/>
                                    </div>
                                </div>
                                <div id="edit-product_form-extra-big_section-2">
                                    <CarouselImg value={images}/>
                                </div>
                                <div id="edit-product_form-extra-big_section-3">
                                    <div className="row form_bottom-vertical-separation">
                                        <ProductCode value={productCode} className="col-4"/>
                                        <Brand value={brand} className="col-8"/>
                                    </div>
                                    <Name value={name} className="col-12 form_bottom-vertical-separation"/>
                                    <div className="row form_bottom-vertical-separation">
                                        <Category defaultCategoryValue={defaultCategoryValue} categories={categories} className="col-6" setSizes={setSizes}/>
                                        <Color value={color} className="col-6"/>
                                    </div>
                                    <div className="row form_bottom-vertical-separation">
                                        <Price value={price} className="col-6"/> 
                                        <SalePrice value={onsalePrice} className="col-6"/>
                                    </div>
                                    <SizeStock values={size} className="col-12 form_bottom-vertical-separation" sizes={sizes}/>
                                    <FamilyColor value={familyColor} family_colors={family_colors} className="col-12"/>
                                </div>
                            </div>
                            <div id="edit-product_form-extra-big_dropzone">
                                <Dropzone onDrop={onDrop} selectedImages={selectedImages} setSelectedImages={setSelectedImages} alertDropzone={alertDropzone} setAlertDropzone={setAlertDropzone} borderDropzone={borderDropzone} setBorderDropzone={setBorderDropzone}/>
                            </div>
                        </div>
                    ) : (
                        cardSize > 1300 ? (
                            <div>
                                <div id="edit-product_form-big_aux">
                                    <div id="edit-product_form-big_section-1">
                                        <CarouselImg value={images}/>
                                    </div>
                                    <div id="edit-product_form-big_section-2">
                                        <div className="row form_bottom-vertical-separation">
                                            <ProductCode value={productCode} className="col-4"/>
                                            <Brand value={brand} className="col-4"/>
                                            <Name value={name} className="col-4"/>
                                        </div>
                                        <div className="row form_bottom-vertical-separation">
                                            <Category defaultCategoryValue={defaultCategoryValue} categories={categories} className="col-6" setSizes={setSizes}/>
                                            <Color value={color} className="col-6"/>
                                        </div>
                                        <div className="row form_bottom-vertical-separation">
                                            <Price value={price} className="col-6"/> 
                                            <SalePrice value={onsalePrice} className="col-6"/>
                                        </div>
                                        <SizeStock values={size} className="col-12 form_bottom-vertical-separation" sizes={sizes}/>
                                        <FamilyColor value={familyColor} family_colors={family_colors} className="col-12"/>
                                        <div className="row form_bottom-vertical-separation">
                                            <Description1 value={description1} className="col-6 product-description-line" row="5"/>
                                            <Description2 value={description2} className="col-6 product-description-line" row="5"/>
                                        </div>
                                    </div>
                                </div>
                                <div id="edit-product_form-big_dropzone">
                                    <Dropzone onDrop={onDrop} selectedImages={selectedImages} setSelectedImages={setSelectedImages} alertDropzone={alertDropzone} setAlertDropzone={setAlertDropzone} borderDropzone={borderDropzone} setBorderDropzone={setBorderDropzone}/>
                                </div>
                            </div> 
                        ):(
                            cardSize > 1050 ? (
                                <div>
                                    <div id="edit-product_form-medium_aux-1">
                                        <div id="edit-product_form-medium_section-1">
                                            <div id="block_properties">
                                                <ProductCode value={productCode} className="col-12 form_bottom-vertical-separation"/>
                                                <Brand value={brand} className="col-12 form_bottom-vertical-separation"/>
                                                <Name value={name} className="col-12 form_bottom-vertical-separation"/>
                                                <Price value={price} className="col-12 form_bottom-vertical-separation"/>
                                                <SalePrice value={onsalePrice} className="col-12 form_bottom-vertical-separation_medium"/>
                                            </div>
                                        </div>
                                        <div id="edit-product_form-medium_section-2">
                                            <CarouselImg value={images}/>
                                        </div>
                                        <div id="edit-product_form-medium_section-3">
                                            <Category defaultCategoryValue={defaultCategoryValue} categories={categories} className="col-12 form_bottom-vertical-separation" setSizes={setSizes}/>
                                            <Color value={color} className="col-12 form_bottom-vertical-separation"/>
                                            <Description1 value={description1} className="col-12 product-description-block form_bottom-vertical-separation" row="2"/>
                                            <Description2 value={description2} className="col-12 product-description-block" row="2"/>
                                        </div>
                                    </div>
                                    <div id="edit-product_form-medium_aux-2">
                                        <FamilyColor value={familyColor} family_colors={family_colors} className="col-12 form_top-vertical-separation"/>
                                        <SizeStock values={size} className="col-12 form_bottom-vertical-separation" sizes={sizes}/>
                                    </div>
                                    <div id="edit-product_form-medium_dropzone">
                                        <Dropzone onDrop={onDrop} selectedImages={selectedImages} setSelectedImages={setSelectedImages} alertDropzone={alertDropzone} setAlertDropzone={setAlertDropzone} borderDropzone={borderDropzone} setBorderDropzone={setBorderDropzone}/>
                                    </div>
                                </div>
                            ):(
                                cardSize > 580 ? (
                                    <div>
                                        <div id="edit-product_form-small_aux-1">
                                            <div id="edit-product_form-small_section-1">
                                                <div id="block_properties">
                                                    <ProductCode value={productCode} className="col-12 form_bottom-vertical-separation"/>
                                                    <Brand value={brand} className="col-12 form_bottom-vertical-separation"/>
                                                    <Name value={name} className="col-12 form_bottom-vertical-separation"/>
                                                    <Price value={price} className="col-12 form_bottom-vertical-separation"/>
                                                    <SalePrice value={onsalePrice} className="col-12 form_bottom-vertical-separation_medium"/>
                                                </div>
                                            </div>
                                            <div id="edit-product_form-small_section-2">
                                                <CarouselImg value={images}/>
                                            </div>
                                        </div>
                                        <div id="edit-product_form-small_aux-2">
                                            <FamilyColor value={familyColor} family_colors={family_colors} className="col-12 form_top-vertical-separation"/>
                                            <SizeStock values={size} className="col-12 form_bottom-vertical-separation" sizes={sizes}/>
                                            <div className="row form_bottom-vertical-separation">
                                                <Category defaultCategoryValue={defaultCategoryValue} categories={categories} className="col-6" setSizes={setSizes}/>
                                                <Color value={color} className="col-6"/>
                                            </div>
                                            <div className="row form_bottom-vertical-separation">
                                                <Description1 value={description1} className="col-6 product-description-line" row="2"/>
                                                <Description2 value={description2} className="col-6 product-description-line" row="2"/>
                                            </div>
                                        </div>
                                        <div id="edit-product_form-small_dropzone">
                                            <Dropzone onDrop={onDrop} selectedImages={selectedImages} setSelectedImages={setSelectedImages} alertDropzone={alertDropzone} setAlertDropzone={setAlertDropzone} borderDropzone={borderDropzone} setBorderDropzone={setBorderDropzone}/>
                                        </div>
                                    </div>
                                ):(
                                    cardSize > 460 ? (
                                        <div>
                                            <div id="edit-product_form-extrasmall_aux-1">
                                                <div id="edit-product_form-extraextrasmall_section">
                                                    <CarouselImg value={images}/>
                                                </div>
                                            </div>
                                            <div>
                                                <ProductCode value={productCode} className="col-12 form_bottom-vertical-separation"/>
                                                <Brand value={brand} className="col-12 form_bottom-vertical-separation"/>
                                                <Name value={name} className="col-12 form_bottom-vertical-separation"/>
                                                <div className="row form_bottom-vertical-separation">
                                                    <Price value={price} className="col-6"/> 
                                                    <SalePrice value={onsalePrice} className="col-6"/>
                                                </div>
                                                <FamilyColor value={familyColor} family_colors={family_colors} className="col-12 form_top-vertical-separation"/>
                                                <SizeStock values={size} className="col-12 form_bottom-vertical-separation" sizes={sizes}/>
                                                <div className="row form_bottom-vertical-separation">
                                                    <Category defaultCategoryValue={defaultCategoryValue} categories={categories} className="col-6" setSizes={setSizes}/>
                                                    <Color value={color} className="col-6"/>
                                                </div>
                                                <div className="row form_bottom-vertical-separation">
                                                    <Description1 value={description1} className="col-6 product-description-line" row="2"/>
                                                    <Description2 value={description2} className="col-6 product-description-line" row="2"/>
                                                </div>
                                            </div>
                                            <div id="edit-product_form-extraextrasmall_dropzone">
                                                <Dropzone onDrop={onDrop} selectedImages={selectedImages} setSelectedImages={setSelectedImages} alertDropzone={alertDropzone} setAlertDropzone={setAlertDropzone} borderDropzone={borderDropzone} setBorderDropzone={setBorderDropzone}/>
                                            </div>
                                        </div>
                                    ):(
                                        <div>
                                            <div id="edit-product_form-mobile_aux-1">
                                                <div id="edit-product_form-mobile_section">
                                                    <CarouselImg value={images}/>
                                                </div>
                                            </div>
                                            <div>
                                                <ProductCode value={productCode} className="col-12 form_bottom-vertical-separation"/>
                                                <Brand value={brand} className="col-12 form_bottom-vertical-separation"/>
                                                <Name value={name} className="col-12 form_bottom-vertical-separation"/>
                                                <Price value={price} className="col-12 form_bottom-vertical-separation"/>
                                                <SalePrice value={onsalePrice} className="col-12 form_bottom-vertical-separation"/>
                                                <FamilyColor value={familyColor} family_colors={family_colors} className="col-12 form_top-vertical-separation"/>
                                                <SizeStock values={size} className="col-12 form_bottom-vertical-separation" sizes={sizes}/>
                                                <Category defaultCategoryValue={defaultCategoryValue} categories={categories} className="col-12 form_bottom-vertical-separation" setSizes={setSizes}/>
                                                <Color value={color} className="col-12 form_bottom-vertical-separation"/>
                                                <Description1 value={description1} className="product-description-block form_bottom-vertical-separation" row="4"/>
                                                <Description2 value={description2} className="product-description-block" row="4"/>
                                            </div>
                                            <div id="edit-product_form-mobile_dropzone">
                                                <Dropzone onDrop={onDrop} selectedImages={selectedImages} setSelectedImages={setSelectedImages} alertDropzone={alertDropzone} setAlertDropzone={setAlertDropzone} borderDropzone={borderDropzone} setBorderDropzone={setBorderDropzone}/>
                                            </div>
                                        </div>
                                    )
                                )  
                            )  
                        )
                    )}
            </div>
    );

}

export default EditProduct;