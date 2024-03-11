'use client'

import React from 'react';
import Main from './components/comun/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "./css/data-container.css";
import "./css/datatable.css";
import "./css/datatable-products.css";
import "./css/form-btn.css";


export default function Layout ({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html>
          <body>
            <Main children={children}/>
          </body>
        </html>
    );
}



