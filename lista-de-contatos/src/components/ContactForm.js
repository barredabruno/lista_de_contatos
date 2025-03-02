import React, { useState } from "react";  
import { useDispatch } from "react-redux";  
import { addContact } from "../redux/actions";  

const ContactForm = () => {  
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");  
  const [phone, setPhone] = useState("");  
  const dispatch = useDispatch();  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    const newContact = {  
      id: Date.now(),  
      name,  
      email,  
      phone,  
    };  
    dispatch(addContact(newContact));  
    setName("");  
    setEmail("");  
    setPhone("");  
  };  

  return (  
    <form onSubmit={handleSubmit}>  
      <input  
        type="text"  
        placeholder="Nome"  
        value={name}  
        onChange={(e) => setName(e.target.value)}  
      />  
      <input  
        type="email"  
        placeholder="E-mail"  
        value={email}  
        onChange={(e) => setEmail(e.target.value)}  
      />  
      <input  
        type="text"  
        placeholder="Telefone"  
        value={phone}  
        onChange={(e) => setPhone(e.target.value)}  
      />  
      <button type="submit">Adicionar Contato</button>  
    </form>  
  );  
};  

export default ContactForm;  
