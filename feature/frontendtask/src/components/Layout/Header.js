import Button from '../Button/Button';
import classes from './Header.module.css';
import logo from '../../assets/LOGO.png'
import {BsCart2} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <container className={classes.container}>
    <header className={classes.header}>
      <img src={logo} alt='img' />
      <nav>
        <ul>
        <li className={classes.heads}>
          <Link to='/main-cart-items'>
            <div>
        <h4>Bond Offer</h4>
        </div>
        </Link>
        <h4>DMO</h4>
        <h4>Features</h4>
          </li>
          <li>
            <Button />
          </li>
          <li className={classes.carticon}>
           <span className={classes.cart}><BsCart2 size={32}/></span> 
            <span className={classes.badge}>2</span>
          </li>
        </ul>
      </nav>
    </header>
    </container>
  );
};

export default Header;
