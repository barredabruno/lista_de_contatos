import React, { useState } from "react";
import { FormWrapper } from "../styles/styledcomponents";

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      onAddContact({ id: Date.now(), name, email, phone });
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome completo"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        required
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefone"
        required
      />
      <button type="submit">Adicionar Contato</button>
    </FormWrapper>
  );
};

export default ContactForm;
