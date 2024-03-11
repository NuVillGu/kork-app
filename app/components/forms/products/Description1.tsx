import React, {useState} from 'react';
import CardLabel from '../../CardLabel';
import CardInput from '../CardInput';


function Description1 ({className, row, value}) {

    const [description1, setDescription1] = useState(value || ''); 

    const handleChange = (event) => {
        setDescription1(event.target.value);
    }

    return (
            <div className={className}>
                <CardLabel value="DESCRIPTION 1"/>
                <CardInput name="description1" rows={row} value={description1} handle={handleChange}/>
            </div>
    );

}

export default Description1;