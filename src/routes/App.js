import React from "react";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import Home from "../containers/Home";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/Aeromax" component={Home}></Route>
        </Switch>
    </BrowserRouter>
);

export default App;