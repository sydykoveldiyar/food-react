import React from 'react';
import {NavLink} from "react-router-dom";
import './sidebar.css'

const Sidebar = () => {
    return (
            <section className="admin-sidebar">
                <div className="admin-sidebar__wrapper">
                    <div className="admin-sidebar__container">
                        <p className="admin-sidebar__logo">CRM Cafe</p>
                        <div className="admin-sidebar__links">
                            <NavLink to='/admin' className="admin-sidebar__link">Заказы</NavLink>
                            <NavLink to='/admin/sales' className="admin-sidebar__link">Продажи</NavLink>
                            <NavLink to='#' className="admin-sidebar__link">Кухня</NavLink>
                            <NavLink to='#' className="admin-sidebar__link">Бар</NavLink>
                            <NavLink to='#' className="admin-sidebar__link">История транзакций</NavLink>
                            <NavLink to='#' className="admin-sidebar__link">Пользователи</NavLink>
                            <NavLink to='#' className="admin-sidebar__link">Категории</NavLink>
                            <NavLink to='/admin/meals-page' className="admin-sidebar__link">Список блюд</NavLink>
                            <NavLink to='/admin/tables' className="admin-sidebar__link">Столы</NavLink>
                            <NavLink to='/admin/booking' className="admin-sidebar__link">Бронирование</NavLink>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Sidebar;