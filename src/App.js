import {useState, useEffect} from 'react'
import './App.css';
import Form from "./components/Forms/Form";
import {createDB} from "./indexedDB/db";


function App() {
    const [open, setOpen] = useState("true")




  return (
    <div className="App">
        {/*{(db) && <Form_1/>}*/}
        <Form db="ipoioii"/>
    </div>
  );
}

export default App;
