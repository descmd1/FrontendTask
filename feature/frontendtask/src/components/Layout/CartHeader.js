import Button from '../Button/Button';
import classes from './Header.module.css';
import logo from '../../assets/LOGO.png'
import {BsCart2} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import coatofarm from '../../assets/coatofarm.png'
import { BsPerson } from 'react-icons/bs';

const CartHeader = (props) => {
  return (
    <container className={classes.CartHeader}>
    <header className={classes.header}>
        <div className={classes.coat}>
        <img src={coatofarm} alt='img' width={60}/>
        <h2 className={classes.dept}>DEPT MANAGEMENT OFFICE NIGERIA</h2>
        </div>
      
      <nav>
        <ul>
        <li className={classes.heads}>
          <Link to='/main-cart-items'>
            <div className={classes.bondoffer}>
        <p >Bond Offer</p>
        </div>
        </Link>
        <p>Portfolio</p>
        <p>Notification</p>
          </li>
          <li className={classes.bsperson}>
            <BsPerson size={28}/>
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

export default CartHeader;
