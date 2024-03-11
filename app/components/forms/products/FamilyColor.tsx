import React, { useState, useContext } from 'react';
import CardLabel from '../../CardLabel';
import { FormContext } from './FormProduct';

function FamilyColor ({className, family_colors, value}) {
    
    const [checkedValue, setCheckedValue] = useState(value || 'white');

    const { register } = useContext(FormContext);

    const handleChange = (e) => {
        setCheckedValue(e.target.value);
    };

    return (
        <div className={className}>
            <CardLabel value="FAMILY COLOR" id="product_family-color_label"/>
            <div className="row" id="product_color-family">
                {family_colors.map((color) => (
                    <div className="col-3 product_color-family_option" key={color.color}>
                        <div className="product_color-family_option-aux">
                            <input
                                name="family-color"
                                {...register("family-color", { required: false })}
                                type="radio"
                                checked={checkedValue === color.color}
                                style={{backgroundColor: color.color}}
                                className="color-family_option_check form-check-input"
                                value={color.color}
                                onChange={handleChange}
                            />
                            <div className="color-family_option_name" style={{fontWeight: checkedValue === color.color ? 'bold' : 'normal'}}>{color.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FamilyColor;
