import React from 'react'
import Layout from './Layout/Layout'
import Card from './UI/Card'
import classes from './SignUpForm.module.css'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
  return (
    <Card>
    <Layout>        
        <div className={classes.formbg}>
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
                <checkbox className={classes.check}><span className={classes.mark}>&#x2713;</span></checkbox>
                <p className={classes.info}>By continuing, you agree to the <span className={classes.terms}>terms and conditions</span></p>
            </div>
            <div>
                <Link to='/'>
                <button className={classes.signupBtn}>Sign Up</button>
                </Link>
            </div>
        </form>
        </div>
        </Layout>

    </Card>
  )
}

export default SignUpForm