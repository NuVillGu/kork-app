import React from 'react';


function PopError ({message, id}) {

    return ( <div id={id} className="pop_error-validation">{message}</div> );
    
}

export default PopError;