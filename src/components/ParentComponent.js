import React, {useState} from 'react'
import DisplayData from './DisplayData'
import Form from './Form'

const ParentComponent = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleFirstNameChange = event => {
        setFirstName(event.target.value)
      }

      const handleLastNameChange = event => {
        setLastName(event.target.value)
        // console.log(event.target.value)
      }

      return(
          <div>
            <Form 
                firstName = {firstName}
                lastName = {lastName}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
            />
            <DisplayData 
                firstName={firstName} 
                lastName={lastName}
                />
          </div>
      )

}

export default ParentComponent