import React, {useEffect, useState} from 'react'
import './Forms.scss';

import {getNote, getAllNote, addNote, getNoteByKey, getNotesByCursors} from "../../indexedDB/db";


const Form = ({db}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let object = {
        name: name,
        email: email,
        pass: password
    }

    const getInputValue = (e) => {
        e.preventDefault()
        console.log(object.name)
    }
    const addData = (e) => {
        e.preventDefault()
        addNote(object)
    }
    const getAllData = (e) => {
        e.preventDefault()
        getAllNote()
    }
    const getDataOne = (e) => {
        e.preventDefault()
        getNote()
    }
    const getDataByKey = (e) => {
        e.preventDefault()
        // определяет индекс по имени или того path key который указан
        getNoteByKey("Denys")
    }
    const getCursor = (e) => {
        e.preventDefault()
        getNotesByCursors()
    }


    return (
        <div className="temp_form_container">
            <form className="temp_form_block">
                <img className="temp_img" src="" alt=""/>
                <input  type="file" placeholder="file" name="file"/>
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="name" name="name"/>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email" name="email"/>
                <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="password" name="password"/>
                <div className="temp_btn_block">
                    <button onClick={addData} id="temp_btn_add">ADD</button>
                    <button onClick={getAllData} id="temp_btn_remove">REMOVE</button>
                    <button onClick={getCursor} id="temp_btn_change">CHANGE</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
