import React, { useState } from 'react';
import { GetServerSideProps, InferGetStaticPropsType } from 'next';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import ReactPaginate from 'react-paginate';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

import getAllProducts, { IProductData } from '@/api/products/getAllProducts';
import { IProduct } from '@/types';

import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';

export const getStaticProps = (async () => {
  const data = await getAllProducts();
  return { props: { data } }
}) satisfies GetServerSideProps<{data: IProductData}>


export default function Products(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const { data } = props;
    
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const onPageChange = (selectedItem: { selected: number }) => {
      setPage(selectedItem.selected + 1);
    }

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    }

    const getFilteredProducts = (products: IProduct[]) => {
        return products
                .slice((page - 1) * 6, page * 6)
                .filter((product) => {
                    return product.title.toLowerCase().includes(search.toLowerCase()) ||
                           product.category.toLowerCase().includes(search.toLowerCase());
                });
    }

    return (
      <div className='py-8'>
        <Typography variant='h2' className='mb-4'>Produtos</Typography>

        <div className="flex items-center justify-between mb-8">
          <SearchBar 
            value={search}
            onChange={onSearch}
            placeholder='Pesquisar produtos'
          />
          <Button 
            size='lg'
          >
            Adicionar
          </Button>
        </div>

        <div className="flex items-center flex-wrap -mx-3">
          {getFilteredProducts(data.products).map((product: IProduct) => (
            <div 
              className="lg:w-1/3 w-1/2 px-3 mb-6"
              key={product.id}
            >
              <ProductCard 
                productId={product.id}
                title={product.title}
                description={product.description}
                thumbnail={product.thumbnail}
                price={product.price}
                discount={product.discountPercentage}
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center pt-4">
          <ReactPaginate 
            nextLabel={(
              <IconButton
                variant='text'
                className='rounded-full'
              >
                <ChevronRightIcon className='w-4 h-4'/>
              </IconButton>
            )}
            previousLabel={(
              <IconButton
                variant='text'
                className='rounded-full'
              >
                <ChevronLeftIcon className='w-4 h-4'/>
              </IconButton>
            )}
            pageLabelBuilder={(current_page) => (
              <IconButton 
                className='rounded-full'
                variant={current_page === page ? 'filled' : 'text'}
              >
                {current_page}
              </IconButton>
            )}
            pageCount={Math.floor(data.total / 6)}
            className='flex items-center gap-2'
            initialPage={page - 1}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    )
}