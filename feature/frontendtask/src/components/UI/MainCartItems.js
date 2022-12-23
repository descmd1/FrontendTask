import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import CartItems from './CartItems'
import classes from './MainCartItems.module.css'

const MainCartItems = () => {

  return (
    <div className={classes.MainCartitem}>
      <Layout/>
        <div className={classes.MainCartItems}>
        <CartItems/> 
        <CartItems/>
        <CartItems/>   
        <CartItems/>
        <Link to='/main-cart2'>
        <div className={classes.chevronicon}>
          
        <BsChevronRight size={68}/>
      
        </div>
        </Link>
        </div>
      
    </div>
  )
}

export default MainCartItems