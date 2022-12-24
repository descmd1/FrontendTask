import React from 'react'
import { Link } from 'react-router-dom'
import CartItems from './CartItems'
import { BsChevronRight } from 'react-icons/bs'
import classes from './MainCartItems.module.css'
import Layout from '../Layout/Layout'

const MainCartItems2 = () => {

  return (
    <div className={classes.MainCartitem}>
      <Layout/>
        <div className={classes.MainCartItemize}>
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <Link to='/Main-cart'>
        <div className={classes.chevronicon}>
        <BsChevronRight size={68}/>
        </div>
        </Link>
        </div>
    </div>
  )
}

export default MainCartItems2