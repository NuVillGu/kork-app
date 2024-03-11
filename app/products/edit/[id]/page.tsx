import React from 'react';
import FormMain from '@/app/components/forms/FormMain';
import { fetchProductById } from '@/app/lib/data';
import Link from '@/node_modules/next/link';
import CardTitle from '@/app/components/CardTitle';
import { revalidatePath } from '@/node_modules/next/cache';

export default async function Edit({ params }: { params: { id: string } }) {
  
  revalidatePath('/products/list');

  const properties = await fetchProductById(params.id);

  const renderBreadcrumb = (
      <div className="breadcrumb">
          <Link href="/">PRODUCTS</Link>
          <div className="breadcrumb-separator">/</div>
          <Link href="/products/list">PRODUCTS LIST</Link>
          <div className="breadcrumb-separator">/</div>
          <Link href="#" className="breadcrumb-active">EDIT PRODUCT ({params.id})</Link>
      </div>
  );

  return (
    <div>
      <CardTitle title={`EDIT PRODUCT (${params.id})`} breadcrumb={renderBreadcrumb}/>
      <FormMain type="edit" properties={properties.rows[0]}/>
    </div>
  );

}