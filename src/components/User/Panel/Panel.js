import React, { useState } from 'react'
import axios from 'axios'

const Panel = (props) => {
    const [data, setData] = useState('')

    function getData(){
        axios.get("http://171.22.25.125/api/getListPs")
        .then(response => {
            setData(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    function getDirectories() {
        axios.get("http://171.22.25.125/api/getDirectories")
        .then(response => {
            setData(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    function getFiles() {
        axios.get("http://171.22.25.125/api/getFiles")
        .then(response => {
            setData(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    function createDirectory() {
        axios.post("http://171.22.25.125/api/createDirectory",{},{
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token') //the token is a variable which holds the token
            }
           })
        .then(response => {
            setData(response.status === 201 ? 'Created Successfully' : null)
        }).catch(err => {
            console.log(err)
        })
    }

    function createFile() {
        axios.post("http://171.22.25.125/api/createFile",{},{
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token') //the token is a variable which holds the token
            }
           })
        .then(response => {
            setData(response.status === 201 ? 'Created Successfully' : null)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <a className="btn btn-success mr-2" onClick={getData}>Get All List Process</a>
            <a className="btn btn-danger mr-2" onClick={getDirectories}>get Directories</a>
            <a className="btn btn-warning mr-2" onClick={getFiles}>Get Files</a>
            <a className="btn btn-info mr-2" onClick={createDirectory}>create Directory</a>
            <a className="btn btn-primary mr-2" onClick={createFile}>create File</a>
            <div className="container">
                <div className="row">
                    {data}
                </div>
            </div>
        </div>
    )
}

export default Panel