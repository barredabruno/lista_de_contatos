import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onEdit, onRemove }) => {
  return (
    <div>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onEdit={onEdit} onRemove={onRemove} />
        ))
      ) : (
        <p>Nenhum contato encontrado.</p>
      )}
    </div>
  );
};

export default ContactList;
