import { FormData } from "./FormData";
const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|;:'",.<>/?])([A-Za-z\d!@#$%^&*()_\-+={}[\]|;:'",.<>/?]{4,})$/;
    return passwordRegex.test(password);
  };
  
  
  const validateForm = (data: FormData): { isValid: boolean; errors: Record<string, string> } => {
    const errors: Record<string, string> = {};
  
  
    // validação do campo "firstname"
    if (!data.firstname.trim()) {
      errors.firstname = "Primeiro nome é um campo obrigatório";
    }
  
    // validação do campo "lastname"
    if (!data.lastname.trim()) {
      errors.lastname = "Sobrenome é um campo obrigatório";
    }
  
    // validação do campo "birthdate"
    if (!data.birthdate.trim()) {
      errors.birthdate = "Data de nascimento é um campo obrigatório";
    }
  
    // validação do campo "country"
    if (!data.country.trim()) {
      errors.country = "País é um campo obrigatório";
    }
  
    // validação do campo "city"
    if (!data.city.trim()) {
      errors.city = "Cidade é um campo obrigatório";
    }
  
    // validação do campo "email"
    if (!data.email.trim()) {
      errors.email = "Endereço de e-mail é um campo obrigatório";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Endereço de e-mail inválido";
    }
     // validação do campo "password"
     if (!data.password.trim()) {
        errors.password = "Senha é um campo obrigatório";
      }else if (!isValidPassword(data.password)) {
          errors.email = "Endereço de e-mail inválido";
      }
  
    // validação do campo confirmação de senha
    if (data.password !== data.conpassword) {
        alert('A confirmação de senha não é igual à senha!');
    }
    const isValid = Object.keys(errors).length === 0;
  
    return { isValid, errors };
  };
  
  const saveFormData = (data: FormData) => {
    localStorage.setItem("formData", JSON.stringify(data));
  };
  
  export { validateForm, saveFormData };
  