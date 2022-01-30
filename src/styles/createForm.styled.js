import styled from "styled-components";

export const StyledForm = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;600;700&display=swap");
  
  
  color: #000;
  font-family: "Manrope", sans-serif;
  padding: 4rem;

  .form-header h1 {
    color: #000;
    font-size: 55px;
    font-weight: 600;
  }

  .file-input-field {
    border: 1px dashed #494343;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .file-input-field:hover{
    border: 1px dashed #ffc30b;
  }
  input[type="file" i] {
    display: none;
  }
  .file-custom-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 0.5rem 4rem;
    cursor: pointer;
    background: #494343;
    color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  .file-custom-upload:hover{
      background: #ffc30b;
  } 

  .select-input-field {
    border: 1px dashed #494343;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .select-input-field:hover, .select-input-field:focus{
    border: 1px dashed #ffc30b;
  }

  .select-input-field input {
    width: 95%;
    padding: 0.4rem;
    border: none;
    outline: none;
  }
  .select-input-field > div {
    color: #939292;
  }

  .submit-btn {
    margin-top: 2rem;
    text-align: center;
  }

  .submit-btn button {
    padding: 1.5rem;
    background: #494343;
    color: #fff;
    border: none;
    outline: none;
    width: 35%;
  }
  .submit-btn button:hover{
      background: #ffc30b;
  }

  .form-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  .form-container{
      width: 50%;
  }

  .preview img {
    width: 400px;
    object-fit contain;
  }

  @media(max-width: 1024px){

    padding: 1rem;
    .form-header h1 {
        font-size: 35px;
    }

    .form-container{
        width: 100%;
    }
    .preview img {
        width: 100%;
    }
    .file-custom-upload{
        font-size: 10px;
    }

    .submit-btn button{ width: 55%}
  }
`;
