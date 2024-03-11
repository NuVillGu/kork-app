import React from "react";
import PropertiesResponsiveProducts from "./products/PropertiesResponsive";


function ContentSmall ( { cardSize, element, type } ) {
    
    if ( type == "products" ) {
        return (    
            <div className="properties-data_responsive">
                <PropertiesResponsiveProducts type="image" value={JSON.parse(element.images)[0]}/>
                { cardSize > 260 &&
                    <div className="datatable-element-group_responsive">
                        <PropertiesResponsiveProducts label="ID" value={element.id}/>
                        <PropertiesResponsiveProducts label="CODE" value={element.product_code}/>
                    </div>
                }
                { cardSize <= 260 && <PropertiesResponsiveProducts label="ID" value={element.id}/> }
                { cardSize <= 260 && <PropertiesResponsiveProducts label="CODE" value={element.product_code}/> }
                <PropertiesResponsiveProducts label="NAME" value={element.name}/>
                { cardSize > 260 &&
                    <div className="datatable-element-group_responsive">
                        <PropertiesResponsiveProducts label="CATEGORY" value={element.category}/>
                        <PropertiesResponsiveProducts type="color" className="properties_color_responsive-mobile" label="COLOR" value={element.color}/>
                        { cardSize > 455 &&
                            <PropertiesResponsiveProducts label="PRICE" array={element} type="price"/>
                        }
                    </div>
                }
                { cardSize <= 260 && <PropertiesResponsiveProducts label="CATEGORY" value={element.category}/> }
                { cardSize <= 260 && <PropertiesResponsiveProducts type="color" className="properties_color_responsive-mobile" label="COLOR" value={element.color}/> }
                { cardSize <= 455 && <PropertiesResponsiveProducts label="PRICE" array={element} type="price"/> }
                <PropertiesResponsiveProducts className={`datatable-element_responsive ${cardSize <= 455 && cardSize > 260 ? 'datatable-size_responsive-mobile' : ''}`} label="SIZES" array={element.size} type="size" resize="mobile"/>
                { cardSize > 260 &&
                    <div className="datatable-element-group_responsive">
                        <PropertiesResponsiveProducts label="ENTRY DATE" value={element.entry_date.toLocaleDateString()}/>
                        <PropertiesResponsiveProducts label="STATUS" value="Available"/>
                    </div>
                }
                { cardSize <= 260 &&  <PropertiesResponsiveProducts label="ENTRY DATE" value={element.entry_date.toLocaleDateString()}/> }
                { cardSize <= 260 && <PropertiesResponsiveProducts label="STATUS" value="Available"/> }
    
            </div>
        );
    }
    
}

export default ContentSmall;