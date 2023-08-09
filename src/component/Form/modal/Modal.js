import React, { useState } from "react";
import "./Modal.css";
import { API } from "../../../service/api";
import { TextField,Button,styled } from "@mui/material";

const SubmitButton = styled(Button)`
    padding:10px;
    position:bottom;
    text-transform: none;
    background: #fff;
    background-color:#0ae66b;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;


const setInitialValues = {
    name: '',
    email: '',
    project: '',
};

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [submit, setSubmit] = useState(setInitialValues);
  const [error, showError] = useState('');

  const toggleModal = () => {
    setModal(!modal);
  };
  const onInputChange = (e) => {
    setSubmit({ ...submit, [e.target.name]: e.target.value });
}
const submitUser= async()=>{
    let response= await API.userSubmit(submit);
    if (response.isSuccess) {
        showError('');
        setSubmit(setInitialValues);
        toggleModal();
    } else {
        showError('Something went wrong! please try again later');
    }
}


  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    
    <>
      <button onClick={toggleModal} className="btn-modal">
        New Project
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>New Project Form</h2>
            <form>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' fullWidth/>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter email' fullWidth/>
                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='project' label='Enter Project Name' fullWidth />

                <div className="submit-btn"><SubmitButton onClick={() => submitUser()} >Submit</SubmitButton></div>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              ❌ 
            </button>
          </div>
        </div>
      )}
    </>
  );
}