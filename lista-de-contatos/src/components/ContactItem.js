import React from "react";  
import { ContactItemWrapper } from "./StyledComponents";  

const ContactItem = ({ contact, onRemove, onEdit }) => {  
  return (  
    <ContactItemWrapper>  
      <p>{contact.name}</p>  
      <p>{contact.email}</p>  
      <p>{contact.phone}</p>  
      <button onClick={() => onEdit(contact)}>Editar</button>  
      <button onClick={() => onRemove(contact.id)}>Remover</button>  
    </ContactItemWrapper>  
  );  
};  

export default ContactItem;  
