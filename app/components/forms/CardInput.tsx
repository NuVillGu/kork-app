import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { FormContext } from './products/FormProduct';

function CardInput({ id, name, rows, value, handle, type, className }) {
    const { register, errors } = useContext(FormContext);

    const isError = errors[name];

    if (rows) {
            return (
                <div>
                    <Form.Control {...register(name, { required: false })} className="textarea-line" name={name} id={id} as="textarea" value={value} rows={rows} onChange={handle}/>
                </div>
            );
    } else {
        if (type == "stock") {
            return (
                    <div>
                        <Form.Control {...register(name, { pattern: { value: /^\d+$/, message: "Positive integers only" }})} className={`input-line ${className} ${isError ? 'input-error' : ''}`} name={name} id={id} type="text" value={value} onChange={handle} />
                        {errors[name] && <span className="error-message">{errors[name].message}</span>}
                    </div>
                ); 
        } else if (type == "sale-price") {
            return (
                <div>
                    <Form.Control {...register(name, { pattern: { value: /^\d+\.?\d*$/, message: "Sale price only let positive numbers" }})} className={`input-line ${isError ? 'input-error' : ''}`} name={name} id={id} type="text" value={value} onChange={handle}/>
                    {errors[name] && <span className="error-message">{errors[name].message}</span>}
                </div>
            );
        } else if (type == "price") {
            return (
                <div>
                    <Form.Control {...register(name, { required: "This field is required", pattern: { value: /^\d+\.?\d*$/, message: "Price only let positive numbers" }})} className={`input-line ${isError ? 'input-error' : ''}`} name={name} id={id} type="text" value={value} onChange={handle}/>
                    {errors[name] && <span className="error-message">{errors[name].message}</span>}
                </div>
            );
        } else if (type == "product-code") {
            return (
                <div>
                    <Form.Control {...register(name, { required: "This field is required", pattern: { value: /^[A-Z]{3}\d{5}$/, message: "Product code should follow the next pattern: XXX00000 (3 upper letters with 5 numbers)" }})} className={`input-line ${isError ? 'input-error' : ''}`} name={name} id={id} type="text" value={value} onChange={handle}/>
                    {errors[name] && <span className="error-message">{errors[name].message}</span>}
                </div>
            );
        } else {
            return (
                <div id={type == "color" ? 'color-selector_data_box-input' : ''}>
                    <Form.Control {...register(name, { required: true })} className={`input-line ${isError ? 'input-error' : ''}`} name={name} id={id} type="text" value={value} onChange={handle} />
                    {errors[name] && <span className="error-message">This field is required</span>}
                </div>
            );
        }
    }
}

export default CardInput;



