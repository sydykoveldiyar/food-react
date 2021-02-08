import './waiter-tables.css'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setTables, filterTables } from "../../../redux/waiter/actions/waiter-actions";
import WaiterHeader from "../waiter-header/waiter-header";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const WaiterTables = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTables());
    });
    const tables = useSelector(s => s.waiter.tables);
    let filtered = useSelector(s => s.waiter.filteredTables);

    const setTable = (tableId) => {
        let order = JSON.parse(localStorage.getItem('order'));
        order.tableId = tableId;
        const localOrder = JSON.stringify(order);
        localStorage.setItem('order', localOrder);
    };

    const setStatusStyle = (status) => {
        if (status == 0)
            return '#0357A5';
        else if (status == 1)
            return '#04932C';
        else
            return '#B80505';
    }
    const isDisabled = (status) => status != 0 ?  'none': null
    
    const filterByStatus = (status) => {
        const filtered = tables.filter(t => t.status == status);
        if (filtered.length === 0)
            filtered.length = 1;
        console.log(filtered);
        dispatch(filterTables(filtered));
    }

    const allTables = () => {
        filtered.length = 0;
    }

    return (
        <div>
            <WaiterHeader href="/waiter" title={'Столы'} hasCart={false}/>
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
                            <button className="tables__title-btn tables__active" onClick={() => filterByStatus(1)}>Занятые</button>
                            <button className="tables__title-btn tables__free" onClick={() => filterByStatus(0)}>Свободные</button>
                            <button className="tables__title-btn tables__booked"  onClick={() => filterByStatus(2)}>Бронь</button>
                        </div>
                        <div className="tables__row grid__col-4">
                            {filtered.length === 0 ? tables.map(item => (
                                <NavLink key={item.id} to="/menu-categories" className="tables__table-btn" style={{backgroundColor: `${setStatusStyle(item.status)}`, pointerEvents: `${isDisabled(item.status)}`}} onClick={() => setTable(item.id)}>{item.name}</NavLink>
                            )): filtered.map(item => (
                                <NavLink key={item.id} to="/menu-categories" className="tables__table-btn" style={{backgroundColor: `${setStatusStyle(item.status)}`, pointerEvents: `${isDisabled(item.status)}`}} onClick={() => setTable(item.id)}>{item.name}</NavLink>
                            ))}
                        </div>
                        <div className="tables__all">
                            <div className="tables__all-btn" onClick={allTables}>Все столы</div>
                        </div>
                    </div>
                </section>
            </ReactCSSTransitionGroup>
        </div>
    );
}

export default WaiterTables;