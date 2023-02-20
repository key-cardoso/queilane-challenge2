import React, { useState } from 'react';
import { validateForm, saveFormData } from "./FormValidation";
import classes from './Form.module.css';
import { FormData } from './FormData';
import { useHistory } from 'react-router-dom';



interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const history = useHistory();
   const [data, setData] = useState<FormData>({
    
    firstname: "",
    lastname: "",
    birthdate: "",
    country: "",
    city: "",
    email: "",
    password: "",
    conpassword: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // valida o formulário
    const { isValid, errors } = validateForm(data);
    setFormErrors(errors);

    if (isValid) {
      // salva os dados no localStorage
      saveFormData(data);

      // chama a função de callback
      

      history.push('/src/pages/login/Login.tsx');
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
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
            {formErrors.firstname && <span>{formErrors.firstname}</span>}
        </div>
        <div className={classes.campo}>
          <label className={classes.label}>last name:</label>
            <input type="text" name="lastname" placeholder='Your last name' value={data.lastname} onChange={handleChange} />
            {formErrors.lastname && <span>{formErrors.lastname}</span>}       
        </div>
        <div className={classes.campo}>
          <label className={classes.label}>birth date:</label>
            <input type="date" name="birthdate" placeholder='DD/MM/YYYY' value={data.birthdate} onChange={handleChange} />
            {formErrors.birthdate && <span>{formErrors.birthdate}</span>}
        </div>  
        <div className={classes.campo}>
          <label className={classes.label}>country:</label>
            <input type="text" name="country" placeholder='Your Country' value={data.country} onChange={handleChange} />
            {formErrors.country && <span>{formErrors.country}</span>}
        </div> 
        <div className={classes.campo}> 
          <label className={classes.label}>city:</label>
            <input type="text" name="city" placeholder='Your City' value={data.city} onChange={handleChange} />
            {formErrors.city && <span>{formErrors.city}</span>}
        </div>
        <div className={classes.campo}>
          <label className={classes.label}>e-mail:</label>
            <input type="text" name="email" placeholder="A valid e-mail here" value={data.email} onChange={handleChange} />
            {formErrors.email && <span>{formErrors.email}</span>}        
        </div>
        <div className={classes.campo}>
          <label className={classes.label}>password:</label>
            <input type="password" name="password" placeholder="Your password" value={data.password} onChange={handleChange} />
            {formErrors.password && <span>{formErrors.password}</span>}
        </div>
        <div className={classes.campo}>  
          <label className={classes.label}>password:</label>
            <input type="password" name="conpassword" placeholder="Comfirm your password" value={data.conpassword} onChange={handleChange} />
            {formErrors.conpassword && <span>{formErrors.conpassword}</span>}       
        </div>  
        <button className={classes.b1} type="submit">Register Now</button>
        <button className={classes.b2} type="submit">Login</button>
      </div>
       
    </form>
    
  );
};

export default Form;
