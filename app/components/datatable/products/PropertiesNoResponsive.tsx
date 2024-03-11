import React from "react";
import Image from "@/node_modules/next/image";

function PropertiesNoResponsive ( { value, type } ) {

    if ( type == "size" ) {
        
    return (
        <td>
            <div className="row datatable-size-row_no-responsive">
                    {
                        JSON.parse(value).map((size, index) => (
                            size.stock > 0 ?
                                <div key={index} className="col-4 properties_size_no-responsive">{size.value}</div>
                            :
                                <div key={index} className="col-4 properties_size_no-responsive size-agotada">{size.value}</div>
                        ))
                    }
                </div>
        </td>
    );

    } else if ( type == "price" ) {
        return (
            <td>
                { 
                    value.onsale_price  ? (
                        <div>
                            <div className="properties_standar-price_no-responsive">{value.price}€</div>
                            <div className="properties_onsale-price_no-responsive">{value.onsale_price}€</div>
                        </div>
                    ) : (
                        <div>{value.price}€</div>
                    )
                }
            </td>
        );

    } else if ( type == "color" ) {
        return ( 
            <td>
                <div className="datatable-color_no-responsive">
                    <div className="properties_color_no-responsive" style={{backgroundColor: value}}></div>
                </div>
            </td>
        );

    } else if ( type == "img" ) {
        return ( <td><Image className="img-product_no-responsive" alt="Image" src={value} width={60} height={65}/></td> );

    } else {
        return ( <td>{value}</td> );
    }
        
}

export default PropertiesNoResponsive;