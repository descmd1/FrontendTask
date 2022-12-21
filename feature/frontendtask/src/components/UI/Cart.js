import React from 'react'
import coatofarm from '../../assets/coatofarm.png'
import classes from './Cart.module.css'

const Cart = () => {
  return (
    <div className={classes.cart}>
        <div className={classes.Cartcontainer}>
        <checkbox className={classes.tick}><span className={classes.marktick}>&#x2713;</span></checkbox>
        <img src={coatofarm} alt='' width={60}/>
        <h4>730 days Saving Bond</h4>
        <button className={classes.automatic}>Automatic</button>
        <button className={classes.del}>Delete</button>
        <div className={classes.naira}>
        <p className={classes.Value}>Value(N)</p>
        <button className={classes.cash}>3000, 000.00 - 01 +</button>
        </div>
        </div>
    </div>
  )
}

export default Cart