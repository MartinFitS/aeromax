import React from "react";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import Home from "../containers/Home";
import Catalogue from "../containers/Catalogue"
import Layout from "../components/Layout";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/aeromax" component={Home}></Route>
                <Route exact path="/catalogo" component={Catalogue}></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;