import React, {useState} from 'react'
import papa from 'papaparse'
import DisplayReport from './DisplayReport'

const UploadFile = (props) => {

   const [fileData, setFileData] = useState([])
   const [selectedFile, setSelectedFile] = useState('')
   const [isFileSelected, setIsFileSelected] = useState(false)

    const handleFileChange =(e) => {

        setSelectedFile(e.target.files[0])
        papa.parse(e.target.files[0], {
            header:true,
            skipEmptyLines : true,
            complete:(result) => {
               //console.log(result.data)
               setFileData(result.data)
            },
            error:(err) => {
                alert(err.message)
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsFileSelected(true)
    }

    return (
        <div>
            
                <input type= 'file'  onChange={handleFileChange} accept='.csv' ></input>
                <button onClick={handleSubmit} > submit </button>
                {
                    isFileSelected && <DisplayReport selectedFile= {selectedFile} fileData = {fileData} />
                }
        </div>
    )
}

export default UploadFile