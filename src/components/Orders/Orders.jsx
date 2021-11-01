import { productsAtom, getProductsAtom } from '../../store';
import { useAtom } from 'jotai';
import cls from './Orders.module.scss';
import './Orders.css';
import Cart from '../Cart/Cart';

const Orders = () => {
  const [selectedProducts] = useAtom(getProductsAtom);
  return (
    <div className={cls.main}>
      <div className={cls.left}>
        {selectedProducts.map((pd) => (
          <SingleSelectedProduct key={pd._id} product={pd} />
        ))}
      </div>
      <Cart />
    </div>
  );
};

function SingleSelectedProduct({ product }) {
  const [selectedProducts, setSelectedProducts] = useAtom(productsAtom);
  const { img, name, quantity, price, _id } = product;
  return (
    <div className={cls.wrapper}>
      <img src={img} alt='product name' />
      <div className={cls.right}>
        <p className={cls.ptag}>{name}</p>
        <p className={cls.ptag}>Quantity : {quantity}</p>
        <p className={cls.ptag}>
          Price : {price} * <span className={cls.quantity}>{quantity}</span> ={' '}
          {price * quantity}
        </p>
        <button className='icon' onClick={() => handleAdd(_id)}>
          <i className='fas fa-plus-square'></i>
        </button>
        <button className='icon' onClick={() => handleRemove(_id)}>
          <i className='fas fa-minus-square'></i>
        </button>
      </div>
    </div>
  );

  function handleAdd(id) {
    const newList = [...selectedProducts];
    for (const item of newList) {
      if (item._id === id) {
        item.quantity++;
      }
    }
    setSelectedProducts(newList);
  }
  function handleRemove(id) {
    const newList = [...selectedProducts];
    for (const item of newList) {
      if (item._id === id) {
        item.quantity--;
      }
    }
    setSelectedProducts(newList);
  }
}

export default Orders;
