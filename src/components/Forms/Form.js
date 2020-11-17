import React, {useEffect, useState} from 'react'
import './Forms.scss';

import {addToDb} from "../../indexedDB/db";


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
        // console.log()
        // add({name: "jkjlkjk"})
        console.log(object.name)
    }
    const addData = (e) => {
        e.preventDefault()
        addToDb(object)
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
                    <button onClick={getInputValue} id="temp_btn_remove">REMOVE</button>
                    <button id="temp_btn_change">CHANGE</button>
                </div>

            </form>
        </div>
    )
}

export default Form;
