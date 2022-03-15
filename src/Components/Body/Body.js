import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home/Home";


const Body = () => {
    return (
        <div>
            <Switch>
            <Route path="/" exact component={Home} />
            <Redirect to='/' />
            </Switch>
        </div>
    )
}


export default Body