import React from 'react';
import './app.css';
import './fonts.css';

import { BrowserRouter, Route } from "react-router-dom";
import Auth from "../components/auth/auth";
import PrivateRoute from "./private-route";
import Waiter from "../components/waiter/waiter";
import Admin from "../components/admin/admin";
import AdminTitle from "../components/admin/admin-title/admin-title";
import WaiterTables from '../components/waiter/waiter-tables/waiter-tables';
import MenuCategories from "../components/waiter/menu-categories/menu-categories";
import DishOrder from "../components/waiter/menu-meals/dish-order";
import Basket from "../components/waiter/menu-meals/basket";
import './media.css';
import Sidebar from '../components/admin/sidebar/sidebar';
import SalesOverview from '../components/admin/admin-statistic/sales-overview/sales-overview';
import AdminHeader from '../components/admin/admin-header/admin-header';
import MealsPage from '../components/admin/meals-page/meals-page';
import AdminTables from '../components/admin/admin-tables/admin-tables';

const App = () => {
    const isLogged = localStorage.getItem('jwtToken') ? true : false;

    return (
        <div className="app-content">
            <BrowserRouter>
                <Route path='/' component={Auth} exact />
                <PrivateRoute path='/admin' auth={isLogged} component={() => <Sidebar />} />
                <div className="admin-content">
                    <PrivateRoute path='/admin' auth={isLogged} component={() => <AdminHeader />} />
                    <PrivateRoute path='/admin' auth={isLogged} component={() => <Admin />} exact/>
                    <PrivateRoute path='/admin/sales' auth={isLogged} component={() => <SalesOverview />} exact/>
                    <PrivateRoute path='/admin/meals-page' auth={isLogged} component={() => <MealsPage />}/>
                    <PrivateRoute path='/admin/tables' auth={isLogged} component={() => <AdminTables />}/>
                </div>
                <PrivateRoute path='/waiter' auth={isLogged} component={() => <Waiter />} exact/>
                <PrivateRoute path='/waiter-tables' auth={isLogged} component={() => <WaiterTables />} exact/>
                <PrivateRoute path='/menu-categories' auth={isLogged} component={() => <MenuCategories />} exact/>
                <PrivateRoute path='/dish-order' auth={isLogged} component={() => <DishOrder />} exact/>
                <PrivateRoute path='/basket' auth={isLogged} component={() => <Basket />} exact/>
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

export const removeElement = (array, elem) => {
    var index = array.indexOf(elem);
    if (index > -1)
        array.splice(index, 1);
}

export default App;