import React from 'react'
import CartItems from './CartItems'
import classes from './MainCartItems.module.css'

const MainCartItems2 = () => {

  return (
    <div className={classes.MainCartItems}>
      <div className={classes.MainCartitem}>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        </div>
    </div>
  )
}

export default MainCartItems2