// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [contactName, setContactName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactName) {
      onAddContact(contactName);  // Chama a função passada por props
      setContactName(''); // Limpa o campo após adicionar
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
        placeholder="Digite o nome do contato"
        required
      />
      <button type="submit">Adicionar Contato</button>
    </form>
  );
};

export default ContactForm;
