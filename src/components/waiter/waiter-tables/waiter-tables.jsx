import './waiter-tables.css'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setTables } from "../../../redux/waiter/actions/waiter-actions";
import WaiterHeader from "../waiter-header/waiter-header";
import WaiterActiveOrders from "../waiter-active-orders/waiter-active-orders";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const WaiterTables = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTables());
    });
    const tables = useSelector(s => s.waiter.tables);

    const setTable = (tableId) => {
       let order = JSON.parse(localStorage.getItem('order'));
       order.tableId = tableId;
       const localOrder = JSON.stringify(order);
       localStorage.setItem('order', localOrder);
    };

    return (
        <div>
            <ReactCSSTransitionGroup
                transitionName="slide"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                <section className="tables">
                    <div className="tables__container">
                        <div className="tables__row grid__col-4">
                            <button className="tables__title-btn tables__active">Активные</button>
                            <button className="tables__title-btn tables__free">Свободные</button>
                            <button className="tables__title-btn tables__booked">Бронь</button>
                        </div>
                        <div className="tables__row grid__col-4">
                            { tables.map(item => (
                                <NavLink key={item.id} to="/menu-categories" className="tables__table-btn tables__active" onClick={() => setTable(item.id)}>{item.name}</NavLink>
                            ))}
                        </div>
                        <div className="tables__all">
                            <div className="tables__all-btn">Все столы</div>
                        </div>
                    </div>
                </section>
            </ReactCSSTransitionGroup>
        </div>

    );
}

export default WaiterTables;