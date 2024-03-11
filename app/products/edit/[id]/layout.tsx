'use client'

import React from 'react';
import '../../../css/dropzone.css';
import '../../../css/form-btn.css';
import '../../../css/product-color-selector.css';
import '../../../css/product-carousel-images.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import '../../../css/editproductform.css';
import "../../../css/data-container.css";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <div>{children}</div>
    );
}