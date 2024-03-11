import React, { useState } from 'react';
import CardLabel from '../../CardLabel';
import CardInput from '../CardInput';
import PopError from '../PopError';

function SizeStock({ className, sizes, values }) {

    const [siz, setSiz] = useState({});

    const handleChange = (size, event) => {
        const newValue = { ...siz, [size]: event.target.value };
        setSiz(newValue);
    }

    return (
        <div className={className}>
            <CardLabel value="SIZE AND STOCK" id="product_size-category_label"/>
            <div className="row" id="product_size-category">
                {sizes.map((size) => {
                    const sizeName = size.replace('.', '_'); /** El register de react hook no permite . en el name */
                    if (values) {
                        const valueObj = values.find(val => val.value === size);
                        const initialStock = valueObj ? valueObj.stock : '';
                        const stockValue = siz[size] !== undefined ? siz[size] : initialStock;
                        return (
                            <div className="col-2 product_size-category_option" key={size}>
                                <div className="product_size-category_option_size">
                                    <div className="option_size-label">{size}</div>
                                </div>
                                <CardInput className="stock-input_update" type="stock" name={`stock-${sizeName}`} value={stockValue} handle={(event) => handleChange(size, event)}/>
                            </div>
                        );
                    } else {
                        return (
                            <div className="col-2 product_size-category_option" key={size}>
                                <div className="product_size-category_option_size">
                                    <div className="option_size-label">{size}</div>
                                </div>
                                <CardInput className="stock-input_add" type="stock" name={`stock-${sizeName}`}/>
                            </div>
                        );
                    }
                })}
            </div>
            <PopError id="pop_error-validation_stock" message="You must have stock for at least one size"/>
        </div>
    );

}

export default SizeStock;





