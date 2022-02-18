import React from 'react'
import { useMutation, gql } from '@apollo/client'

const GET_QUERY = gql`
    mutation ($file: [Upload!]!) {
        uploadFiles(file: $file)
    }
`

export default function UploadForm(){
    const [uploadFile] = useMutation(GET_QUERY, {
        onCompleted: data => console.log(data)
    }) 

    const handleFileChange = (e) => {
        //console.log(e.target.files)
        const file = e.target.files
        if(!file) return
        uploadFile({ variables: {file }})

    }
    return (
        <div>
            <h1>Uplaod File</h1>
            <input type="file" onChange={handleFileChange} multiple/>
        </div>
    )
}