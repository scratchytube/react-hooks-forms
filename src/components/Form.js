import React from "react";
import DisplayData from './DisplayData'

function Form( {firstName, lastName, handleFirstNameChange, handleLastNameChange} ) {
 
return (
  <form>
    <input
    type="text"
    placeholder="first"
    onChange={handleFirstNameChange}
    value={firstName}
    />
    
    <input 
    type="text"
    placeholder="last"
    onChange={handleLastNameChange}
    value={lastName}
    />
    <button type="submit" >Submit</button>
  </form>
  )

}
  
export default Form
