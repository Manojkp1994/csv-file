import React, { useState } from 'react' 
import DisplayTable from './DisplayTable'


const SearchStudents = (props) => {
    const {fileData} = props
    const [ participants , setParticipants ] = useState('')

    const handleChange = (e) => {
        //console.log(e.target.value)
       const value = e.target.value
       setParticipants(value)
    }

    return (
        <div>
            <input type="text"  value={participants}  onChange = {handleChange} placeholder = "search by Name / Email" />

            <DisplayTable participants = {participants} fileData={fileData} />
        </div>
    )
}
export default SearchStudents