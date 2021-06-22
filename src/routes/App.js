import React from "react";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import Home from "../containers/Home";
import Catalogue from "../containers/Catalogue"
import Layout from "../components/Layout";
import NotFound from "../containers/NotFound";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/aeromax/" component={Home}></Route>
                <Route exact path="/aeromax/catalogo" component={Catalogue}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;