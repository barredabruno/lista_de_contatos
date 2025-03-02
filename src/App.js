import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { addContact, editContact, removeContact } from "./redux/actions";
import { Title } from "./styles/styledcomponents";  // Corrigido o caminho

const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleEditContact = (updatedContact) => {
    dispatch(editContact(updatedContact));
  };

  const handleRemoveContact = (contactId) => {
    dispatch(removeContact(contactId));
  };

  return (
    <div>
      {/* Aplicando o Title estilizado */}
      <Title>Lista de Contatos</Title>
      <ContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} onEdit={handleEditContact} onRemove={handleRemoveContact} />
    </div>
  );
};

export default App;
