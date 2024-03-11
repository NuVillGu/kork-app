import React, {useState} from 'react';
import CardLabel from '../../CardLabel';
import CardInput from '../CardInput';


function SalePrice ({className, value}) {

    const [salePrice, setSalePrice] = useState(value || ''); 

    const handleChange = (event) => {
        setSalePrice(event.target.value);
    }

    return (
        <div className={className}>
            <CardLabel value="SALE PRICE"/>
            <CardInput type="sale-price" name="sale-price" value={salePrice} handle={handleChange}/>
        </div>
    );

}

export default SalePrice;