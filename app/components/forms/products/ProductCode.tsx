import React, {useState} from 'react';
import CardLabel from '../../CardLabel';
import CardInput from '../CardInput';
import OverlayTrigger from '@/node_modules/react-bootstrap/esm/OverlayTrigger';
import { Tooltip } from '@/node_modules/react-bootstrap/esm/index';
import Image from '@/node_modules/next/image';

function ProductCode ({className, value}) {

    const [productCode, setProductCode] = useState(value || ''); 

    const handleChange = (event) => {
        setProductCode(event.target.value);
    }

    return (
        <div className={className} id="product-code">
            <div>
                <CardLabel value="PRODUCT CODE"/>
                <CardInput type="product-code" name="product-code" value={productCode} handle={handleChange}/>
            </div>
                <OverlayTrigger placement="right" overlay={<Tooltip>Ak vknfrn  rtfkrtfkwed ekv  rek fwrwkfrwk jfwre rewf rkfkerf r frkewf wkr ferk fker fkwerf wekr fwe frwker fkw344k fd4 d</Tooltip>}>
                    <div id="product-code_help">
                        <Image src="/help.svg" alt="Help" width={13} height={15}/>
                    </div>
                </OverlayTrigger>
        </div>
    );

}

export default ProductCode;