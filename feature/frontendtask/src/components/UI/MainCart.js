import React from 'react'
import Cart from './Cart'
import classes from './MainCart.module.css'
const MainCart = () => {
  return (
    <div className={classes.MainCart}>
        <Cart/>
        <Cart/>
        <div className={classes.bonds}>
            <div className={classes.bond}>
            <div className={classes.fees}>
            <p>Fees + Taxes v</p>
           <p>N209</p> 
            </div>
            <div>
            <p>This is a 730 days Saving Bond, you have a fixed income</p>
            </div>
            </div>
            
        <div div className={classes.bond2}>
        <div className={classes.buys}>
            <p className={classes.totalbuy}>Total Buy</p>
           <h3>N600, 000.00</h3> 
            </div>
            
        </div>
        
        </div>
        <div className={classes.checkout}>
            <button className={classes.checkoutbtn}>Check Out</button>
            </div>
    </div>
  )
}

export default MainCart