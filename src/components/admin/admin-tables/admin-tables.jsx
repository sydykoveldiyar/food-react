import './admin-tables.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setTables } from "../../../redux/admin/actions/admin-actions";
import AdminHeader from "../admin-header/admin-header";
import AdminTitle from "../admin-title/admin-title";
import tableImg from '../../../static/images/table.png'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const AdminTables = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTables());
    }, []);

    const tables = useSelector(s => s.admin.tables);

    return (
        <div>
            <AdminHeader />
            <section className="admin-tables">
                <div className="admin__container container">
                    <div className="section__content">
                        <AdminTitle />
                        <div className="admin-tables__grid grid__col-4">
                            { tables.map(item => (
                                <div className="table-card">
                                <div className="table-card__head">
                                    <img src={tableImg} alt=""/>
                                </div>
                                <div className="table-card__body d-flex">
                                    <div className="table-card__name">{item.name}</div>
                                    <div className="table-card__status">{item.status}</div>
                                </div>
                                <div className="table-card__btns">
                                    <button className="table-card__btn change-btn">Изменить</button>
                                    <button className="table-card__btn delete-btn">Удалить</button>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default AdminTables;