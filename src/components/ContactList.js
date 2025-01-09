// src/components/ContactList.js
import React from 'react';
import ContactItem from './ContactItem'; // Importa o ContactItem

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.length > 0 ? (
        contacts.map((contact, index) => (
          <ContactItem key={index} contactName={contact} />
        ))
      ) : (
        <p>Nenhum contato encontrado.</p> // Exibe uma mensagem caso não haja contatos
      )}
    </div>
  );
};

export default ContactList;
