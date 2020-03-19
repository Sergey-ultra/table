import React from 'react';
import './App.css';
import Choice from "./components/choice/choice";
import TableContainer from "./components/tableContainer/tableContainer"
import {BrowserRouter, Route} from "react-router-dom";


function App() {

    return (
        <BrowserRouter >
            <div className="App">
                <Route exact path='/' render={() => <Choice/>}/>
                <Route path='/table' render={() => <TableContainer/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
