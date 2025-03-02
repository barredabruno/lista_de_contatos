import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h1`
  text-align: center;                /* Centraliza o título */
  font-size: 2.5rem;                 /* Tamanho da fonte */
  color: #fff;                       /* Cor do texto */
  background-color: #4CAF50;         /* Cor de fundo */
  padding: 20px;                     /* Padding para dar um espaço interno */
  border-radius: 8px;                /* Bordas arredondadas */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
  font-family: 'Arial', sans-serif;  /* Família de fonte */
  text-transform: uppercase;         /* Tornar o texto maiúsculo */
  letter-spacing: 2px;               /* Espaçamento entre as letras */
  margin: 20px 0;                    /* Margem superior e inferior */
  transition: all 0.3s ease;         /* Transição suave para os efeitos */
  
  &:hover {
    background-color: #45a049;       /* Cor de fundo quando passar o mouse */
    transform: translateY(-5px);     /* Efeito de elevação */
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    background: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;

    &:hover {
      background: #45a049;
    }
  }
`;

export const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  background: #ffffff;

  p {
    margin: 5px 0;
  }

  button {
    margin-top: 5px;
    padding: 5px;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }

  button:first-of-type {
    background: #ffc107;
    color: black;
  }

  button:last-of-type {
    background: #dc3545;
    color: white;
  }

  button:hover {
    opacity: 0.8;
  }
`;
