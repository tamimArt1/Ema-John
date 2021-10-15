import { productsAtom } from '../../store';
import { useAtom } from 'jotai';
import cls from './Product.module.scss';

const Product = ({ product }) => {
  const [selectedProducts, setSelectedProducts] = useAtom(productsAtom);
  const { img, name, seller, price, stock, key } = product;
  return (
    <section className={cls.container}>
      <img src={img} alt='product image' />
      <div className={cls.product_info}>
        <h1>{name}</h1>
        <p>by: {seller}</p>
        <h2>${price}</h2>
        <p>
          only <span id={cls.stock}>{stock}</span> left in stock - order soon
        </p>
        <button className={cls.add_button} onClick={addProductHandler}>
          add to cart <i className='fas fa-shopping-cart'></i>
        </button>
      </div>
    </section>
  );

  function addProductHandler() {
    const isAddedAlready = selectedProducts.find((pd) => pd.key === key);
    if (isAddedAlready) {
      const newList = [...selectedProducts];
      for (const item of newList) {
        if (item.key === key) {
          item.quantity++;
        }
      }
      setSelectedProducts(newList);
    } else {
      const newList = [...selectedProducts, { key, price, quantity: 1 }];
      setSelectedProducts(newList);
    }
  }
};

export default Product;
