import React from 'react';
import CardLabel from '../../CardLabel';
import ColorSelector from './ColorSelector';

function Color ({className, value}) {

    return (
        <div className={className}>
            <CardLabel value="COLOR"/>
            <ColorSelector value={value}/>
        </div>
    );

}

export default Color;