import React, { useState } from 'react';
import classes from './Form.module.css';
import { FormData } from './FormData';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [data, setData] = useState<FormData>({
    name: '',
    firstname: '',
    lastname: '',
    birthdate: '',
    country: '',
    city: '',
    email: '',
    message: '',
    password: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h1 className={classes.titulo}>Wecolme,</h1>
      <h2 className={classes.sub}>Please, register to continue</h2>
      <div className= {classes.content}>
        <div className={classes.campo}>
          <label className={classes.label}>first name:</label>
            <input type="text" name="firstname" placeholder='Your first name' value={data.firstname} onChange={handleChange} />
        </div>
        <div className={classes.campo}>
          <label className={classes.label}>last name:</label>
            <input type="text" name="lastname" placeholder='Your last name' value={data.lastname} onChange={handleChange} />
        </div>
        <div className={classes.campo}>
          <label className={classes.label}>birth date:</label>
            <input type="date" name="birthdate" placeholder='DD/MM/YYYY' value={data.birthdate} onChange={handleChange} />
        </div>  
        <div className={classes.campo}>
          <label className={classes.label}>country:</label>
            <input type="text" name="country" placeholder='Your Country' value={data.country} onChange={handleChange} />
        </div> 
        <div className={classes.campo}> 
          <label className={classes.label}>city:</label>
            <input type="text" name="city" placeholder='Your City' value={data.city} onChange={handleChange} />
        </div>
        <div className={classes.campo}>
          <label className={classes.label}>e-mail:</label>
            <input type=" e-mail" name=" e-mail" placeholder="A valid e-mail here" value={data.email} onChange={handleChange} />
        </div>
        <div className={classes.campo}>
          <label className={classes.label}>password:</label>
            <input type="password" name="password" placeholder="Your password" value={data.email} onChange={handleChange} />
        </div>
        <div className={classes.campo}>  
          <label className={classes.label}>password:</label>
            <input type="password" name="password" placeholder="Comfirm your password" value={data.email} onChange={handleChange} />
        </div>  
        <button className={classes.b1} type="submit">Register Now</button>
        <button className={classes.b2} type="submit">Login</button>
      </div>
       
    </form>
    
  );
};

export default Form;
