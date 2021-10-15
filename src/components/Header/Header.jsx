import cls from './Header.module.scss';
import logo from '../../images/logo.png';
import { totalItemAtom } from '../../store';
import { useAtom } from 'jotai';

const Header = () => {
  const [allProducts] = useAtom(totalItemAtom);
  return (
    <div className={cls.header}>
      <img src={logo} className={cls.logo} alt='logo' />
      <nav>
        <a href='/shop'>Shop</a>
        <a href='/orders'>Orders Review</a>
        <a href='/inventory'>Manage Inventory</a>
      </nav>
      <div className={cls.search_box}>
        <input
          type='text'
          placeholder='Search items'
          className={cls.search_input}
        />
        <i className='fas fa-shopping-cart'></i>
        <h1>{allProducts}</h1>
      </div>
    </div>
  );
};

export default Header;
