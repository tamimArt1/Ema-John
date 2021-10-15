import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import cls from './Shop.module.scss';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./products.JSON')
      .then((res) => res.json())
      .then((data) => {
        const shuffledArray = data.sort((a, b) => 0.5 - Math.random());
        setProducts(shuffledArray);
      });
  }, []);

  return (
    <section className={cls.container}>
      <div className={cls.product_box}>
        {products.map((pd) => (
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
