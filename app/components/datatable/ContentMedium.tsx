import React from "react";
import PropertiesResponsiveProducts from "./products/PropertiesResponsive";


function ContentMedium ( { cardSize, element, type } ) {

    if ( type == "products" ) {
        return (    
            <div className="datatable-properties_responsive">
                <div className="properties_image-product-aux_responsive">
                    <PropertiesResponsiveProducts type="image" value={JSON.parse(element.images)[0]}/>
                </div>
                <div className="properties-data_responsive">
                    <div className="datatable-element-group_responsive">
                        <PropertiesResponsiveProducts label="ID:" value={element.id}/>
                        <PropertiesResponsiveProducts label="CODE:" value={element.product_code}/>
                    </div>
                    <div className="datatable-element-group_responsive">
                        <PropertiesResponsiveProducts label="NAME:" value={element.name}/>
                    </div>
                    <div className="datatable-element-group_responsive">
                        <PropertiesResponsiveProducts label="CATEGORY:" value={element.category}/>
                        <PropertiesResponsiveProducts type="color" className="properties_color_responsive" label="COLOR:" value={element.color}/>
                        { cardSize > 795 &&
                            <PropertiesResponsiveProducts label="PRICE:" array={element} type="price"/>
                        }
                    </div>
                    { cardSize < 795 &&
                        <div className="datatable-element-group_responsive">
                            <PropertiesResponsiveProducts label="PRICE:" array={element} type="price"/>
                        </div>
                    }
                    <div className="datatable-element-group_responsive">
                        <PropertiesResponsiveProducts label="SIZES:" array={element.size} type="size" resize="standar"/>
                    </div>
    
                    { cardSize < 795 &&
                        <div className="datatable-element-group_responsive">
                            <PropertiesResponsiveProducts label="ENTRY DATE:" value={element.entry_date.toLocaleDateString()}/>
                        </div>
                    }
                    <div className="datatable-element-group_responsive">
                        { cardSize > 795 &&
                            <PropertiesResponsiveProducts label="ENTRY DATE:" value={element.entry_date.toLocaleDateString()}/>
                        }
                        <PropertiesResponsiveProducts label="STATUS:" value="Available"/>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ContentMedium;