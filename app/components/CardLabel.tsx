import React from 'react';
import { Form } from '@/node_modules/react-bootstrap/esm/index';


function CardLabel ({ value, id }) {

    return ( <Form.Label id={id} className="edit-form_label">{value}</Form.Label> );
    
}

export default CardLabel;