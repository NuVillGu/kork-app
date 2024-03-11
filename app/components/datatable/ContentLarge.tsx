import React from "react";
import PropertiesNoResponsiveProducts from "./products/PropertiesNoResponsive";


function ContentLarge ( { element, type } ) {

    if ( type == "products" ) {

        return (    
            <>
                <PropertiesNoResponsiveProducts value={element.id}/>
                <PropertiesNoResponsiveProducts value={element.product_code}/>
                <PropertiesNoResponsiveProducts value={element.name}/>
                <PropertiesNoResponsiveProducts value={element.category}/>
                <PropertiesNoResponsiveProducts value={element.size} type="size"/>
                <PropertiesNoResponsiveProducts value={element.color} type="color"/>
                <PropertiesNoResponsiveProducts value={element} type="price"/>
                <PropertiesNoResponsiveProducts value={JSON.parse(element.images)[0]} type="img"/>
                <PropertiesNoResponsiveProducts value={element.entry_date.toLocaleDateString()}/>
                <PropertiesNoResponsiveProducts value="Available"/> 
            </>
        );
    }

}

export default ContentLarge;