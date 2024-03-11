import React, {useState} from 'react';
import CardLabel from '../../CardLabel';
import CardInput from '../CardInput';


function Name ({className, value}) {

    const [name, setName] = useState(value || ''); 

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
            <div className={className}>
                <CardLabel value="NAME"/>
                <CardInput name="name" value={name} handle={handleChange}/>
            </div>
    );

}

export default Name;