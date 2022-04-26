import React from 'react'

export default function Form(props){
    const {values, update, submit} = props;
    
  const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    update(name, value);
  }
    
  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }
  
  return(
<form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
      
        <label>Name
         
              <input 
              type="text"
              name="name"
              placeholder="Type a name"
              value={values.name}
              onChange={onChange}
              maxLength="30"
            />
        </label>

        <label>Email
          
          <input 
              type="email"
              name="email"
              placeholder="Enter their email"
              value={values.email}
              onChange={onChange}
            />
        </label>

       
        <label>Role
         
          <select value={values.role} name="role" onChange={onChange}>
          <option value="">--Select a role--</option>
          <option value="Designer">Designer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Front End Developer">Front End Developer</option>
          <option value="Back End Developer">Back End Developer</option>
          </select>
        </label>

        <div className='submit'>
          <button disabled ={!values.name || !values.email || !values.role}>Submit</button>
        </div>
      </div>
    </form>
  )
}