import React from 'react'
import FilterResult from 'react-filter-search'
import DisplayChart from './DisplayChart'

const DisplayTable = (props) => {

    const {fileData, participants} = props
        console.log(props)
    
        return (
            <div>
                <FilterResult 

                    value = {participants}
                    data = {fileData}
                    renderResults = { results => (
                        <table>
                            <thead>
                                <tr>
                                    <th> Name </th>
                                    <th> Email </th>
                                    <th> Duration (min) </th>
                                </tr>  
                            </thead>
                            <tbody>
                                {results.map((ele,i) => {
                                    return (
                                        <tr key = {i} >
                                                <td> {ele['Name (Original Name)']} </td>
                                                <td> {ele['User Email']} </td>
                                                <td> {ele['Total Duration (Minutes)']}  </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                         </table>

                    )}
                
                />
                
                <DisplayChart fileData={fileData} />
            </div>
        )
    }

export default DisplayTable