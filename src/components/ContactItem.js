import React, { useState } from "react";

const ContactItem = ({ contact, onEdit, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContact, setUpdatedContact] = useState(contact);

  const handleEdit = () => {
    onEdit(updatedContact); // Envia os novos dados para o Redux
    setIsEditing(false); // Sai do modo de edição
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedContact.name}
            onChange={(e) => setUpdatedContact({ ...updatedContact, name: e.target.value })}
          />
          <input
            type="email"
            value={updatedContact.email}
            onChange={(e) => setUpdatedContact({ ...updatedContact, email: e.target.value })}
          />
          <input
            type="tel"
            value={updatedContact.phone}
            onChange={(e) => setUpdatedContact({ ...updatedContact, phone: e.target.value })}
          />
          <button onClick={handleEdit}>Salvar</button>
        </>
      ) : (
        <>
          <p><strong>Nome:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Telefone:</strong> {contact.phone}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => onRemove(contact.id)}>Remover</button>
        </>
      )}
    </div>
  );
};

export default ContactItem;
