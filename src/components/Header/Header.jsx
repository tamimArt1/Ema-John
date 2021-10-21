import cls from './Header.module.scss';
import logo from '../../images/logo.png';
import { totalItemAtom, searchAtom } from '../../store';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';

const Header = () => {
  const [allProducts] = useAtom(totalItemAtom);
  const [search, setSearch] = useAtom(searchAtom);
  return (
    <div className={cls.header}>
      <img src={logo} className={cls.logo} alt='logo' />
      <nav>
        <Link to='/shop'>Shop</Link>
        <Link to='/orders'>Orders Review</Link>
        <Link to='/inventory'>Manage Inventory</Link>
      </nav>
      <div className={cls.search_box}>
        <input
          type='text'
          placeholder='Search items'
          value={search}
          className={cls.search_input}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className='fas fa-shopping-cart'></i>
        <h1>{allProducts}</h1>
      </div>
    </div>
  );
};

export default Header;
