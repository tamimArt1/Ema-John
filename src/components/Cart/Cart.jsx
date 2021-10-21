import { getProductsAtom, totalItemAtom } from '../../store';
import { useAtom } from 'jotai';
import cls from './Cart.module.scss';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [selectedProducts] = useAtom(getProductsAtom);
  const [totalItem] = useAtom(totalItemAtom);
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Order Summary</h1>
        <h3>Items Ordered : {totalItem}</h3>
      </div>
      <p className={cls.cart_p}>Items : ${getBasePrice()}</p>
      <p className={cls.cart_p}>Shopping & Handling : ${getDelivaryCharge()}</p>
      <p className={cls.cart_p}>Total Before Tax : ${totalBeforeTax()}</p>
      <p className={cls.cart_p}>Estimated Tax : ${getTax()}</p>
      <p className={cls.total}>Order Total : ${grandTotal()}</p>
      <Link to='/orders'>
        <button className={cls.review_button}>Review Order</button>
      </Link>
    </div>
  );

  function getBasePrice() {
    let basePrice = 0;
    for (const item of selectedProducts) {
      basePrice += item.price * item.quantity;
    }
    return basePrice.toFixed(2);
  }

  function getDelivaryCharge() {
    const base = parseFloat(getBasePrice());
    let charge = 0.0;
    if (base > 0) {
      if (base > 1000) {
        charge = 39.99;
      } else if (base > 500) {
        charge = 29.99;
      } else {
        charge = 19.99;
      }
    }
    return charge.toFixed(2);
  }

  function totalBeforeTax() {
    const baseWithDelivary =
      parseFloat(getBasePrice()) + parseFloat(getDelivaryCharge());
    return baseWithDelivary.toFixed(2);
  }

  function getTax() {
    const price = parseFloat(totalBeforeTax());
    let tax = 0.0;
    if (price > 0) {
      tax = 0.15 * price; // 15% tax
    }
    return tax.toFixed(2);
  }

  function grandTotal() {
    let total = 0;
    total = parseFloat(totalBeforeTax()) + parseFloat(getTax());
    return total.toFixed(2);
  }
};

export default Cart;
