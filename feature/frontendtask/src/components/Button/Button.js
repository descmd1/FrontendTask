import classes from './Button.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';


const Button = (props) => {


  const [isLogin, setIslogin] = useState(true)

   const loginHandler = () => {
   setIslogin(!true)
    }

   

   const signUpHandler = () => {
   setIslogin(true)

   } 
    
      return (
        <div className={classes.buttoncontainer}>
          <Link to='/signup'>
        {isLogin && <button className={classes.button1} onClick={loginHandler}>
          <span>Login</span>
        </button>}
        </Link>
        <Link to='/signup'>
        {! isLogin && <button className={classes.button2} onClick={signUpHandler}>
         <span>Sign Up</span>
       </button>}
       </Link>
       </div>
      );
    };
    
    export default Button;