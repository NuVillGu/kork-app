import React  from "react";
import Image from "@/node_modules/next/image";


function PropertiesResponsive ( { label, array, value, type, className, resize } ) {

    if (type) {

        if (type == "price" ) {
            return (
                <div className="datatable-element_responsive">
                    <div className="datatable-element-label_responsive">{label}</div>
                    { 
                        array.onsale_price  ? (
                            <div className="properties_price_responsive">
                                <div className="properties_standar-price_responsive">{array.price}€</div>
                                <div className="properties_onsale-price_responsive">{array.onsale_price}€</div>
                            </div>
                        ) : (
                            <div>{array.price}€</div>
                        )
                    }
                </div>
            );

        } else if ( type == "color" ) {
            return (
                <div className="datatable-element_responsive">
                    <div className="datatable-element-label_responsive">{label}</div>
                    <div className={className} style={{backgroundColor: value}}></div>
                </div>
            );

        } else if ( type == "image" ) {
            return (
                <div className="properties_image-product_responsive">
                    <div><Image className="img-product_responsive" alt="Image" src={value} width={120} height={165}/></div>
                </div>
            );

        } else if ( type == "size" && resize == "mobile" ) {
            return (
                <div className={className}>
                    <div className="datatable-element-label_responsive datatable-size-label_responsive">{label}</div>
                        <div className="row datatable-size-row_responsive-mobile">
                            {
                                JSON.parse(array).map((size, index) => (
                                    size.stock > 0 ?
                                        <div key={index} className="col-2 properties_size_responsive">{size.value}</div>
                                    :
                                        <div key={index} className="col-2 properties_size_responsive size-agotada">{size.value}</div>
                                    ))
                            }
                        </div>
                </div>
            );

        } else if ( type == "size" && resize == "standar" ) {
            return (
                <div className="datatable-element_responsive">
                    <div className="datatable-element-label_responsive datatable-size-label_responsive">{label}</div>
                    {
                        JSON.parse(array).map((size, index) => (
                            size.stock > 0 ?
                                <div key={index} className="properties_size_responsive">{size.value}</div>
                            :
                                <div key={index} className="properties_size_responsive size-agotada">{size.value}</div>
                        ))
                    }
                </div>
            );
        }

    } else {
        return (
            <div className="datatable-element_responsive">
                <div className="datatable-element-label_responsive">{label}</div>
                <div>{value}</div>
            </div> 
        );
    } 
        
}

export default PropertiesResponsive;