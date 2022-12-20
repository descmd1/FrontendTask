import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {HiOutlinePlay} from 'react-icons/hi'
import component3 from '../../assets/Component 3.png' 
import Layout from '../Layout/Layout'
import FloatCard from './FloatCard'
import classes from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={classes.homecontainer}>
      <Layout/>
       <div className={classes.edgebtn}>
       <button className={classes.emptybtn1}></button>
       <button className={classes.emptybtn2}></button>
       </div>
       <div className={classes.homepage}>
        <div className={classes.main}>
       <div>
        <h1 className={classes.subInfo}>Subscribe to FGN <span className={classes.subInfo2}> Saving bond</span></h1>
        <p className={classes.subInfo3}>Loan and get paid with interest</p>
       </div>
       <div className={classes.getstarted}>
        <button className={classes.getstartedbtn}>Get started <span><AiOutlineArrowRight/></span></button>
        <span>
        <HiOutlinePlay className={classes.playIcon}/> <span className={classes.text}>See video</span>
        </span>
       </div>
       </div>

       <div className={classes.component3}>
       <div className={classes.splitscreen}>
       <div className={classes.floatscreen}>
       <FloatCard/> 
        </div>  
        <div className={classes.homeImg}>
        <img src={component3} alt='' width={1200} /> 
        </div>
       </div>
       </div>
       </div>
       </div>
  )
}

export default HomePage