import React, {useState} from 'react';
import CardLabel from '../../CardLabel';
import CardInput from '../CardInput';


function Price ({className, value}) {

    const [price, setPrice] = useState(value || ''); 

    const handleChange = (event) => {
        setPrice(event.target.value);
    }

    return (
            <div className={className}>
                <CardLabel value="PRICE"/>
                <CardInput type="price" name="price" value={price} handle={handleChange}/>
            </div>
    );

}

export default Price;