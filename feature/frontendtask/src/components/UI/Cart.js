import React from 'react'
import coatofarm from '../../assets/coatofarm.png'
import classes from './Cart.module.css'
import {BsDashCircle} from 'react-icons/bs'
import {BsPlusCircle} from 'react-icons/bs'
const Cart = () => {
  return (
    <div className={classes.cart}>
        <div className={classes.Cartcontainer}>
        <checkbox className={classes.tick}><span className={classes.marktick}>&#x2713;</span></checkbox>
        <img src={coatofarm} alt='' width={40}/>
        <div className={classes.bonddays}>
        <h4 >730 days Saving Bond</h4>
        </div>
        <button className={classes.automatic}>Automatic</button>
        <button className={classes.del}>Delete</button>
        <div className={classes.naira}>
        <p className={classes.Value}>Value(N)</p>
        <button className={classes.cash}>3000, 000.00 <span><BsDashCircle/></span> 01 <span><BsPlusCircle/></span></button>
        </div>
        </div>
    </div>
  )
}

export default Cart