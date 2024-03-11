import React, { useContext } from 'react';
import CardLabel from '../../CardLabel';
import Select from "react-select";
import { Controller } from "react-hook-form";
import { FormContext } from './FormProduct';


function Category ({ className, setSizes, categories, defaultCategoryValue }) {
    const { control } = useContext(FormContext);

    const handleSelectOption = (selectedOption) => {
        const selectedCategory = categories.find((option) => option.value === selectedOption.value);
        if (selectedCategory) {
            setSizes(selectedCategory.sizes);
        }
        return selectedOption;
    };
    
    return (
        <div className={className}>
            <CardLabel value="CATEGORY"/>
            <Controller
                control={control}
                name="category"
                defaultValue={defaultCategoryValue || null}
                render={({ field }) => (
                    <Select
                        {...field}
                        classNamePrefix="react-selector"
                        id="product-category"
                        options={categories}
                        onChange={(selectedOption) => {
                            const selectedValue = handleSelectOption(selectedOption);
                            field.onChange(selectedValue);
                        }}
                    />
                )}
            />
        </div>
    );
    
}

export default Category;
