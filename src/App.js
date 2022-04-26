import React, { useState } from 'react'
import './App.css';
import Form from "./components/Form";
// import axios from 'axios';

const initialFormValues = {
  name: "",
  email: "",
  role: ""
}

function App() {
  // useState to add values to the form: team members and form values
  const [teamMember, setTeamMember] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    setTeamMember([formValues, ...teamMember]);
    setFormValues(initialFormValues);
    }
  
  
 
  return (
    <div>
      <h1>Team Members</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
{teamMember.map((member, idx) => {
  return (
    <div key={idx}>{member.name}, {member.email}, {member.role}</div>
  )
})}
    </div>
  );
}

export default App;
