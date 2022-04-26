import React, { useState, useEffect } from 'react'
import './App.css';
import Form from "./Form";
import axios from 'axios';

const initialFormValues = {
  name: "",
  email: "",
  role: ""
}

function App() {
  // useState to add values to the form
  const [teamMember, setTeamMember] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState("");
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

  if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return
    setFormError("Please enter all the info requested before hitting submit.");
    axios.post("fakeapi.com", newTeamMember)
    .then(res => {
      setTeamMember([res.data, ...teamMember])
      setFormValues(initialFormValues)
    }).catch(err => console.error(err))
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeamMember(res.data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">Team Members
      {formError && <h2>{formError}</h2>}
      </header>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

    </div>
  );
}

export default App;
