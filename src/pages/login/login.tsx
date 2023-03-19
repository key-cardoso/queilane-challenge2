import React from 'react';
import imagem from './image1.png';
import logo from './logo.png';
import classes from './login.module.css';
import icon from './icon-user.png';
import cadeado from './Vector.png'
const login: React.FC = () => {
    
    return (
      <div className={classes.login}>
        <div className={classes.formContainer}>
          <form className={classes.form}>
            <h1 className={classes.titulo}>Wecolme,</h1>
            <h2 className={classes.sub}>To continue browsing safely, log in to the <br/> network.</h2>
            <div className={classes.content}>
              <h1 className={classes.textLogin}>Login</h1>
              <div className={classes.campo}>
                <input type="text" name="username" placeholder='user name'  />
                <img className={classes.icon} src={icon} alt="icon" />      
              </div>
              <div className={classes.campo}>
                <input type="password" name="password" placeholder='password'  />
                <img className={classes.cadeado} src={cadeado} alt="cadeado" />      
              </div>
              
            </div>
            <button className={classes.b1} type="submit">Login In</button>
          </form>
        </div>
        <div className={classes.imageContainer}>
            <img className={classes.img} src={imagem} alt="Imagem" />
            <a href="https://compass.uol/en/home/"><img className='logo' src={logo} alt="logo" /></a>
            
        </div>
        
      </div>
      
    );
  };
  
export default login;
  