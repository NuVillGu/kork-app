import React, {useState} from 'react';
import CardLabel from '../../CardLabel';
import CardInput from '../CardInput';


function Brand ({className, value}) {

    const [brand, setBrand] = useState(value || ''); 

    const handleChange = (event) => {
        setBrand(event.target.value);
    }

    return (
            <div className={className}>
                <CardLabel value="BRAND"/>
                <CardInput name="brand" value={brand} handle={handleChange}/>
            </div>
    );

}

export default Brand;