import React from 'react'
import { BsHeart } from 'react-icons/bs'
import coatofarm from '../../assets/coatofarm.png'
import classes from './CartItems.module.css'

const CartItems = () => {
  return (
    <div className={classes.cartcontainer}>
        <div className={classes.headcoat}>
            <img src={coatofarm} alt='' width={60}/>
            <p className={classes.FGN}>FGN Savings Bond</p>
        </div>
        <div  className={classes.headsavings}>
            <h1 className={classes.savings}>730 days Savings Bond</h1>
             <p className={classes.due}>Due October 12, 2024</p>
        </div>
    <div className={classes.cartItems}>
        <div>
            <p>Minimum</p>
            <p>% per yeae</p>
            <p>interest payment</p>
            <p>Opening</p>
            <p>Closing Date</p>
            <p>Settlement</p>
        </div>
        <div className={classes.fig}>
            <h6>N5,000</h6>
            <h6>11.382%</h6>
            <h6>Quarterly</h6>
            <h6>Oct/04/2022</h6>
            <h6>Oct/07/2022</h6>
            <h6>Oct/07/2022</h6>
        </div>
    </div>
    <div className={classes.heartIcon}>
    <button className={classes.heartbtn}>Add to Cart</button>
    <BsHeart className={classes.heart}/>
    </div>
    </div>
  )
}

export default CartItems