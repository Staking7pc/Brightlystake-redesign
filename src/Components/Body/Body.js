import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import Cards1 from "./Home/Cards/Cards1";


const Body = () => {
    return (
        <div>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/More" exact component={Cards1} />
            <Redirect to='/' />
            </Switch>
        </div>
    )
}


export default Body