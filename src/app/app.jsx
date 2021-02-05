import React from 'react';
import './app.css';
import './fonts.css';
import { BrowserRouter, Route } from "react-router-dom";
import Auth from "../components/auth/auth";
import PrivateRoute from "./private-route";
import Waiter from "../components/waiter/waiter";
import Admin from "../components/admin/admin";
import WaiterTables from '../components/waiter/waiter-active-orders/waiter-tables/waiter-tables';

const App = () => {
    const isLogged = localStorage.getItem('jwtToken') ? true : false;

    return (
        <div>
            <BrowserRouter>
                <Route path='/' component={Auth} exact />
                <PrivateRoute path='/admin' auth={isLogged} component={() => <Admin />} />
                <PrivateRoute path='/waiter' auth={isLogged} component={() => <Waiter />} />
                <PrivateRoute path='/waiter-tables' auth={isLogged} component={() => <WaiterTables />} />
            </BrowserRouter>
        </div>
    );
}

export const getErrorMessage = (e) => {
    if (e == null)
        return null;

    let error;
    if (e.response)
        error = e.response;
    else if (e.request)
        error = e.request;
    else
        error = e;

    const data = error ? error.data : error;
    return data && data.message
        ? data.message
        : data;
}

export default App;