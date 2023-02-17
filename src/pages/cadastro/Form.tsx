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
      <label>
        first name:
        <input type="text" name="firstname" placeholder='Your first name' value={data.firstname} onChange={handleChange} />
      </label>
      <label>
        last name:
        <input type="text" name="lastname" placeholder='Your last name' value={data.lastname} onChange={handleChange} />
      </label>
      <label>
        birth date:
        <input type="date" name="birthdate" placeholder='DD/MM/YYYY' value={data.birthdate} onChange={handleChange} />
      </label>
      <label>
        country:
        <input type="text" name="country" placeholder='Your Country' value={data.country} onChange={handleChange} />
      </label>
      <label>
        city:
        <input type="text" name="city" placeholder='Your City' value={data.city} onChange={handleChange} />
      </label>
      <label>
        e-mail:
        <input type=" e-mail" name=" e-mail" placeholder="A valid e-mail here" value={data.email} onChange={handleChange} />
      </label>
      <label>
        password:
        <input type="password" name="password" placeholder="Your password" value={data.email} onChange={handleChange} />
      </label>
      <label>
        password:
        <input type="password" name="password" placeholder="Comfirm your password" value={data.email} onChange={handleChange} />
      </label>
      
      <button type="submit">Register Now</button>
      <button type="submit">Login</button>
    </form>
    
  );
};

export default Form;
