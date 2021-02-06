import './waiter-tables.css'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setTables } from "../../../redux/waiter/actions/waiter-actions";

const WaiterTables = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTables());
    });
    const tables = useSelector(s => s.waiter.tables);
    return (
        <section className="tables">
        <div className="tables__container">
            <div className="tables__row grid__col-4">
                <button className="tables__title-btn tables__active">Активные</button>
                <button className="tables__title-btn tables__free">Свободные</button>
                <button className="tables__title-btn tables__booked">Бронь</button>
            </div>
            <div className="tables__row grid__col-4">
                { tables.map(item => (
                    <NavLink key={item.id} to="/menu-categories" className="tables__table-btn tables__active">{item.name}</NavLink>
                ))}
            </div>
            <div className="tables__all">
                <div className="tables__all-btn">Все столы</div>
            </div>
        </div>
    </section>
    );
}

export default WaiterTables;