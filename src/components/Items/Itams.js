import React, {useEffect, useState} from 'react'
import './Items.scss';
import {getAllNote, removeItem} from "../../indexedDB/db";


const Items = () => {

    const [heroes, setHeroes] = useState([])

    useEffect(()=> {
            getAllNote()
                .then(data => setHeroes(data))
    }, [])

    return (
        <div className="item_container">
            {
                heroes.map(el=>(
                    <div className='item_box' key={el.email}>
                        <p>{el.name}</p>
                        <p>{el.email}</p>
                        <button onClick={removeItem} data-name={el.name}>remove</button>
                    </div>
                ))
            }

        </div>
    )
}

export default Items;
