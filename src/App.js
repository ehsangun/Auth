import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import logo from './logo.svg';
import Home from "./components/Pages/Home";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path='/' component={Signin} />
                <Route exact path='/signup' component={Signup} />
            </div>
        </Router>
    );
}

export default App;
