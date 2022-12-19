import React from 'react'
import classes from './SignUpForm.module.css'

const SignUpForm = () => {
  return (
    <div>
        <form className={classes.signup}>
            <div className={classes.heads}>
                <h1>Sign Up</h1>
                <p>Stop spending, start investing</p>
            </div>
        <label>First Name <span>*</span></label>
            <div> 
                <input type='text' placeholder='Enter your First Name'/>
            </div>
            <label>First Name</label>
            <div>
                <input type='text' placeholder='Enter your First Name'/>
            </div>
            <label>First Name</label>
            <div>
                <input type='text' placeholder='Enter your First Name'/>
            </div>
            <label>First Name</label>
            <div>
                <input type='text' placeholder='Enter your First Name'/>
            </div>
            <label>First Name</label>
            <div>
                <input type='text' placeholder='Enter your First Name'/>
            </div>
            <div className={classes.box}>
                <checkbox className={classes.check}>click me</checkbox>
                <p className={classes.info}>By continuing, you agree to the <span className={classes.terms}>terms and conditions</span></p>
            </div>
            <div>
                <button className={classes.signupBtn}>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default SignUpForm