import cls from './Header.module.scss';
import logo from '../../images/logo.png';
import { totalItemAtom, searchAtom, userInfoAtom } from '../../store';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
  const [allProducts] = useAtom(totalItemAtom);
  const [search, setSearch] = useAtom(searchAtom);
  const [user] = useAtom(userInfoAtom);
  const { logOut } = useFirebase();
  return (
    <div className={cls.header}>
      <img src={logo} className={cls.logo} alt='logo' />
      <nav>
        <Link to='/shop'>Shop</Link>
        <Link to='/orders'>Orders Review</Link>
        <Link to='/inventory'>Manage Inventory</Link>
      </nav>
      <div className={cls.search_box}>
        <div className={cls.search_left}>
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
        <div>
          {user?.email ? (
            <span className={cls.display_name}>{user?.email}</span>
          ) : (
            <span></span>
          )}
          {user?.email ? (
            <button className={cls.login_button} onClick={logOut}>
              Logout
            </button>
          ) : (
            <Link to='/login'>
              <button className={cls.login_button}>Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
