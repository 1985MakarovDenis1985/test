import {useState, useEffect, Fragment} from 'react'
import './App.css';
import Form from "./components/Forms/Form";
import {createDB} from "./indexedDB/db";
import Items from "./components/Items/Itams";


function App() {
    const [openDb, setOpenDb] = useState(false)

    useEffect(() => {
        createDB()
            .then((data) => {
                setOpenDb(true)
            })
    })


    return (
        <div className="App">
            {
                openDb == true ?
                    <Fragment>
                        <Form/>
                        <Items/>
                    </Fragment>
                    :
                    <h5>Waiting...</h5>
            }
        </div>
    );
}

export default App;
