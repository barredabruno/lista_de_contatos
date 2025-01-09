import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);

  // Função para adicionar um novo contato
  const addContact = (contactName) => {
    setContacts([...contacts, contactName]); // Adiciona o contato ao estado
  };

  return (
    <Provider store={store}>
      <div>
        <h1>Lista de Contatos</h1>
        <ContactForm onAddContact={addContact} /> {/* Passa a função para o ContactForm */}
        <ContactList contacts={contacts} /> {/* Passa os contatos para o ContactList */}
      </div>
    </Provider>
  );
};

export default App;
