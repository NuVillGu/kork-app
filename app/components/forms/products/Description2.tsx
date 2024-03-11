import React, {useState} from 'react';
import CardLabel from '../../CardLabel';
import CardInput from '../CardInput';


function Description2 ({className, row, value}) {

    const [description2, setDescription2] = useState(value || ''); 

    const handleChange = (event) => {
        setDescription2(event.target.value);
    }

    return (
            <div className={className}>
                <CardLabel value="DESCRIPTION 1"/>
                <CardInput name="description2" rows={row} value={description2} handle={handleChange}/>
            </div>
    );

}

export default Description2;