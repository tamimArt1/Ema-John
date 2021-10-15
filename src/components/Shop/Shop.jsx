import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import cls from './Shop.module.scss';
import { getSearchTextAtom } from '../../store';
import { useAtom } from 'jotai';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [text] = useAtom(getSearchTextAtom);

  useEffect(() => {
    fetch('./products.JSON')
      .then((res) => res.json())
      .then((data) => {
        const shuffledArray = data.sort((a, b) => 0.5 - Math.random());
        setProducts(shuffledArray);
        setFilteredProducts(shuffledArray);
      });
  }, []);

  useEffect(() => {
    const tempProducts = products.filter((pd) =>
      pd.name.toLowerCase().includes(text)
    );
    setFilteredProducts(tempProducts);
  }, [text]);

  return (
    <section className={cls.container}>
      <div className={cls.product_box}>
        {filteredProducts.map((pd) => (
          <Product key={pd.key} product={pd} />
        ))}
      </div>
      <div className={cls.cart_box}>
        <Cart />
      </div>
    </section>
  );
};

export default Shop;
