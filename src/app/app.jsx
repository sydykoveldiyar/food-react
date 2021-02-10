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
import './media.css';
import Sidebar from '../components/admin/sidebar/sidebar';
import SalesOverview from '../components/admin/admin-statistic/sales-overview/sales-overview';
import AdminHeader from '../components/admin/admin-header/admin-header';
import AdminMeals from '../components/admin/admin-meals/admin-meals';
import AdminTables from '../components/admin/admin-tables/admin-tables';
import AdminBooking from "../components/admin/admin-booking/admin-booking";
import AdminBookingList from "../components/admin/admin-booking/admin-booking-list";
import Users from '../components/admin/users/users';
import AdminCategories from "../components/admin/admin-categories/admin-categories";

const App = () => {
    const isLogged = localStorage.getItem('jwtToken') ? true : false;
    const isAdmin = isLogged && localStorage.getItem('role') === '1' ? true : false;;
    return (
        <div className="app-content">
            <BrowserRouter>
                <Route path='/' component={Auth} exact />
                <PrivateRoute path='/admin' auth={isLogged} component={() => <Sidebar />} />
                { isAdmin ? (
                    <div className="admin-content">
                    <PrivateRoute path='/admin' auth={isLogged} component={() => <AdminHeader />} />
                    <PrivateRoute path='/admin' auth={isLogged} component={() => <Admin />} exact/>
                    <PrivateRoute path='/admin/sales' auth={isLogged} component={() => <SalesOverview />} exact/>
                    <PrivateRoute path='/admin/meals' auth={isLogged} component={() => <AdminMeals />}/>
                    <PrivateRoute path='/admin/tables' auth={isLogged} component={() => <AdminTables />}/>
                    <PrivateRoute path='/admin/users' auth={isLogged} component={() => <Users />}/>
					<PrivateRoute path='/admin/booking' auth={isLogged} component={() => <AdminBooking />}/>
                    <PrivateRoute path='/admin/booking-list' auth={isLogged} component={() => <AdminBookingList />}/>
                    <PrivateRoute path='/admin/categories' auth={isLogged} component={() => <AdminCategories/>}/>
                </div>
                ) : null }
                { !isAdmin ? (
                    <div className="waiter-content">
                    <PrivateRoute path='/waiter' auth={isLogged} component={() => <Waiter />} exact />
                    <PrivateRoute path='/waiter-tables' auth={isLogged} component={() => <WaiterTables />} exact />
                    <PrivateRoute path='/menu-categories' auth={isLogged} component={() => <MenuCategories />} exact />
                    <PrivateRoute path='/dish-order' auth={isLogged} component={() => <DishOrder />} exact />
                    <PrivateRoute path='/basket' auth={isLogged} component={() => <Basket />} exact />
                </div>
                ) : null }
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