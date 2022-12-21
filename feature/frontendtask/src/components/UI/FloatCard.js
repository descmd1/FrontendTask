import React from 'react'
import {TbArrowCurveRight} from 'react-icons/tb'
import classes from './FloatCard.module.css'

const FloatCard = () => {
  return (
    <div className={classes.floatcard}>
      
        <div className={classes.turk}>
            <h3 className={classes.headings}>Turkey</h3>
            <p className={classes.turkey}>Group Ag</p>
            <p className={classes.turkey}>4.375% (02/26)</p>
        </div>
        <div >
        <p className={classes.headings}>Market Value</p>
            <div className={classes.market}>
              <span className={classes.marketvalue}>
              <p className={classes.usd}>USD</p>
            <span className={classes.value}>6, 000K</span>
            </span>
            <p className={classes.price}>Price:100</p>
            </div>
        </div>
        <div>
            <p className={classes.headings}>Change</p>
            <div className={classes.change}>
            <p>+380</p>
            <TbArrowCurveRight/>
            </div>
            
        </div>
       
    </div>
  )
}

export default FloatCard