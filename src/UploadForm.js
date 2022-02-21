import React from 'react'
import { useMutation, gql } from '@apollo/client'

const GET_QUERY = gql`
  mutation ($file: [UserGraphQLUpload!]) {
    researchJournalCreate(input: {
        title: "upload file"
        journalOrConferenceName: "JINGJO"
        language: THAI
        firstAuthorKmitlId: "2528B0414"
        firstAuthorFullName: "AAA"
        creatorKmitlId: "2528B0414"
        levelGroup: {
        connect: {
            id:1
        }
        }
        level: {
        connect: {
            id:1
        }
        }
    }, file: $file){
    id
    }
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
                    doctype: 'FULL_JOURNAL',
                    file: file[i]
                })
            }
            //console.log(obj)
        }
        console.log(obj)
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

/*

mutation ($file: [UserGraphQLUpload!]) {
  researchJournalCreate(input: {
    title: "upload file"
    journalOrConferenceName: "JINGJO"
    language: THAI
    firstAuthorKmitlId: "2528B0414"
    creatorKmitlId: "2528B0414"
    levelGroup: {
      connect: {
        id:1
      }
    }
    level: {
      connect: {
        id:1
      }
    }
    files:{
      create: {
        docType: ACCEPTANCE_LETTER
        filePath: "./"
      }
    }
  }, file: $file)
}


 mutation ($file: [UserGraphQLUpload!]) {
        uploadFiles(file: $file)
    }
*/