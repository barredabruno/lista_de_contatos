import styled from "styled-components";  

export const ContactItemWrapper = styled.li`  
  display: flex;  
  justify-content: space-between;  
  margin: 10px;  
  padding: 10px;  
  background-color: #f1f1f1;  
  border: 1px solid #ccc;  
`;  

export const FormWrapper = styled.form`  
  display: flex;  
  flex-direction: column;  
  width: 300px;  
  margin-bottom: 20px;  

  input {  
    margin: 5px 0;  
    padding: 8px;  
    border: 1px solid #ccc;  
  }  

  button {  
    padding: 8px;  
    background-color: #4caf50;  
    color: white;  
    border: none;  
    cursor: pointer;  
  }  
`;  
