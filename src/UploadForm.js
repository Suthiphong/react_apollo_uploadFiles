import React from 'react'
import { useMutation, gql } from '@apollo/client'

const GET_QUERY = gql`
    mutation ($file: [UserGraphQLUpload!]) {
        testtest(file: $file)
    }
`

export default function UploadForm(){
    const [uploadFile] = useMutation(GET_QUERY, {
        onCompleted: data => console.log(data)
    }) 

    const handleFileChange = (e) => {
        let text = '' 
        //console.log(e.target.files)
        const file = e.target.files
        const obj = []
        if(file.length > 0) {
            for(let i=0;i<file.length;i++ ){
                obj.push({
                    doctype: 'AAAAA',
                    file: file[i]
                })
            }
            //console.log(obj)
        }
        if(!file) return
        uploadFile({ variables: {
            file: obj
        }})

    }
    return (
        <div>
            <h1>Uplaod File</h1>
            <input type="file" onChange={handleFileChange} multiple/>
        </div>
    )
}