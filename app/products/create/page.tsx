import React from 'react';
import FormMain from '@/app/components/forms/FormMain';
import Link from '@/node_modules/next/link';
import CardTitle from '@/app/components/CardTitle';

export default async function Create() {

  const renderBreadcrumb = (
    <div className="breadcrumb">
        <Link href="/">PRODUCTS</Link>
        <div className="breadcrumb-separator">/</div>
        <Link href="#" className="breadcrumb-active">ADD PRODUCT</Link>
    </div>
  );
  
  return (
    <div>
      <CardTitle title="ADD PRODUCT" breadcrumb={renderBreadcrumb}/>
      <FormMain type="create"/>
    </div>
  );
}




