import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import cls from './Shop.module.scss';
import {
  getSearchTextAtom,
  apiProductsAtom,
  apiFilteredProductsAtom,
} from '../../store';
import { useAtom } from 'jotai';
import axios from 'axios';
import { useQuery } from 'react-query';

const Shop = () => {
  const [products, setProducts] = useAtom(apiProductsAtom);
  const [filteredProducts, setFilteredProducts] = useAtom(
    apiFilteredProductsAtom
  );
  const [text] = useAtom(getSearchTextAtom);
  const { isLoading, isError, data } = useQuery(
    'products',
    async () => {
      const { data } = await axios.get(
        'https://limitless-depths-38704.herokuapp.com/products'
      );
      return data;
    },
    {
      refetchOnWindowFocus: false,
      refetchInterval: 180000,
      staleTime: 300000,
    }
  );

  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
  }, [data]);

  useEffect(() => {
    const tempProducts = products.filter((pd) =>
      pd.name.toLowerCase().includes(text)
    );
    setFilteredProducts(tempProducts);
  }, [text]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;
  return (
    <section className={cls.container}>
      <div className={cls.product_box}>
        {filteredProducts.map((pd) => (
          <Product key={pd._id} product={pd} />
        ))}
      </div>
      <div className={cls.cart_box}>
        <Cart />
      </div>
    </section>
  );
};

export default Shop;
