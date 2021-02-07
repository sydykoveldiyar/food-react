import React from 'react';
import './app.css';
import './fonts.css';
import { BrowserRouter, Route } from "react-router-dom";
import Auth from "../components/auth/auth";
import PrivateRoute from "./private-route";
import Waiter from "../components/waiter/waiter";
import Admin from "../components/admin/admin";
import WaiterTables from '../components/waiter/waiter-tables/waiter-tables';
import MenuCategories from "../components/waiter/menu-categories/menu-categories";
import DishOrder from "../components/waiter/menu-meals/dish-order";
import Basket from "../components/waiter/menu-meals/basket";

const App = () => {
    const isLogged = localStorage.getItem('jwtToken') ? true : false;

    return (
        <div>
            <BrowserRouter>
                <Route path='/' component={Auth} exact />
                <PrivateRoute path='/admin' auth={isLogged} component={() => <Admin />} />
                <PrivateRoute path='/waiter' auth={isLogged} component={() => <Waiter />} />
                <PrivateRoute path='/waiter-tables' auth={isLogged} component={() => <WaiterTables />} />
                <PrivateRoute path='/menu-categories' auth={isLogged} component={() => <MenuCategories />} />
                <PrivateRoute path='/dish-order' auth={isLogged} component={() => <DishOrder />} />
                <PrivateRoute path='/basket' auth={isLogged} component={() => <Basket />} />
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