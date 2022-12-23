import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import CartItems from './CartItems'
import classes from './MainCartItems.module.css'

const MainCartItems = () => {

  return (
    <div className={classes.MainCartitem}>
        <div className={classes.MainCartItems}>
        <CartItems/> 
        <CartItems/>
        <CartItems/>   
        <CartItems/>
        <div className={classes.chevronicon}>
        <BsChevronRight size={68}/>
        </div>
       
        </div>
      
    </div>
  )
}

export default MainCartItems