import classes from './Button.module.css'

const Button = (props) => {
    
    
      return (
        <div className={classes.buttoncontainer}>
        <button className={classes.button1}>
          <span>Login</span>
        </button>
         <button className={classes.button2}>
         <span>Sign Up</span>
       </button>
       </div>
      );
    };
    
    export default Button;