import react from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout'

function app(){

    // Firebase initialization
    // React-router-dom npm install

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path={"/checkout"}>
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path={"/login"}>
                        <h1>Login</h1>
                    </Route>
                    <Route path={"/"}>
                        <Header />
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default app;