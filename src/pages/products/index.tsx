import React from 'react';
import { InferGetServerSidePropsType } from 'next';

import getAllProducts from '@/api/products/getAllProducts';

export async function getServerSideProps() {
  const products = await getAllProducts();
  return { props: { products } }
}


export default function Products(props: InferGetServerSidePropsType<any>) {
  
  return (
    <div>Products</div>
  )
}