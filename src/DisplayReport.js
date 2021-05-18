import React from 'react'
import duration from 'format-duration-time'

import SearchStudents from './SearchStudents'



const DisplayReport = (props) => {
    
    const {fileData} = props 
   // console.log(fileData)

    // To find Host Name, by filtering 
        const host = fileData.filter((ele) => {
            return ele.Guest === 'No'
        }) 
        const name = host.map((e) => {
            return e['Name (Original Name)']
        })


        // To set duration
        const time = host.map((e) => {
            return e['Total Duration (Minutes)']
        })
        const totalTime = `${time}minutes (${duration(time, 'm').format('h[hours and]m[minutes]')})`


        return (
            <div> 
                <hr/>
                <h2> <b> Report </b> </h2>   <br/>
                <p>Host - {name} </p>
                <p>Total Participants - {fileData.length} </p>
                <p>Duration - {totalTime}  </p> 

                <SearchStudents fileData={fileData} />

                
            </div>
    )
}

export default DisplayReport