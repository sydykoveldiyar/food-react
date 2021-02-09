import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFreeTablesAction } from "../../../redux/admin/actions/admin-actions";
import { NavLink } from "react-router-dom";
import './admin-booking.css'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import AdminDatePicker from "./admin-date-picker";

const AdminBooking = () => {
    const dispatch = useDispatch();
    const freeTables = useSelector(s => s.admin.freeTables);
    const tables = useSelector(s => s.admin.tables)
    useEffect(() => {
        dispatch(setFreeTablesAction());
    }, [tables]);

    return (
        <ReactCSSTransitionGroup
            transitionName="slide"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <>
                <section className="booking">
                    <div className="admin__container container section__content">
                        <h1 className="booking__title">Бронирование <NavLink to='/admin/booking-list'>Список</NavLink></h1>
                        <div className="booking__form">
                            <div className="booking__top-bar">
                                <div className="booking__column">
                                    <h2 className="booking__top-title booking__title">Дата брони</h2>
                                    <div className="booking__date-part">
                                        <AdminDatePicker/>
                                    </div>
                                </div>
                                <div className="booking__column">
                                    <h2 className="booking__top-title booking__title    ">Кол-во человек</h2>
                                    <div className="booking__counter grid__col-4">
                                        <button className="booking__col-btn bordered">-</button>
                                        <div className="booking__col bordered">2</div>
                                        <button className="booking__col-btn bordered">+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="booking__free-tables">
                                <h2 className="booking__middle-title booking__title">Свободные столы</h2>
                                <div className="booking__middle-grid">
                                    {freeTables.map(item => (
                                        <div key={item.id} className="booking__column">
                                            <input className="booking__pick" name="pick-table" id={item.id} type="radio" />
                                            <label className="booking__middle-item" htmlFor={item.id}>{item.name}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="booking__bot-side">
                                <div className="booking__inputs">
                                    <label className="booking__text-label booking__text-profile-icon" htmlFor="booking__text-inp1"></label>
                                    <input className="booking__text-inp" placeholder="Имя клиента" id="booking__text-inp1" required
                                        type="text" />
                                    <label className="booking__text-label booking__text-phone-icon" htmlFor="booking__text-inp2"></label>
                                    <input className="booking__text-inp" placeholder="+996" id="booking__text-inp2" required
                                        type="number" />
                                </div>
                            </div>
                            <div className="booking__bot-btn-wrapper">
                                <button className="booking__bot-btn book-unbook-btn">Забронировать</button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </ReactCSSTransitionGroup>

    );
};

export default AdminBooking;