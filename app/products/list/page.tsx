import React from 'react';
import Datatable from '@/app/components/datatable/Datatable';
import { fetchProduct } from '@/app/lib/data';
import { revalidatePath } from '@/node_modules/next/cache';
import CardTitle from '@/app/components/CardTitle';
import Link from '@/node_modules/next/link';

export default async function ProductsList() {

  revalidatePath('/products/list');

  const products = await fetchProduct();

  const columns = [   {sortable:true, key:"id", value:"ID"},  {sortable:true, key:"code", value:"CODE"}, 
                        {sortable:true, key:"name", value:"NAME"}, {sortable:true, key:"category", value:"CATEGORY"},
                        {sortable:false, key:"sizes", value:"SIZES"}, {sortable:false, key:"color", value:"COLOR"}, 
                        {sortable:true, key:"price", value:"PRICE"}, {sortable:false, key:"image", value:"IMAGE"},
                        {sortable:true, key:"entrydate", value:"ENTRY DATE"}, {sortable:false, key:"status", value:"STATUS"}
                  ];     
                  
  const renderBreadcrumb = (
      <div className="breadcrumb">
          <Link href="/">PRODUCTS</Link>
          <div className="breadcrumb-separator">/</div>
          <Link href="#" className="breadcrumb-active">PRODUCTS LIST</Link>
      </div>
  );
    
  return (
      <div>
        <CardTitle title="PRODUCTS LIST" breadcrumb={renderBreadcrumb}/>
        <Datatable items={products} columns={columns} type="products"/>
      </div>
  );

}
