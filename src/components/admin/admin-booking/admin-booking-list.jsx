import React, { useState, useEffect } from 'react';
import './admin-booking.css'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setBooksAction, removeBookAction } from "../../../redux/admin/actions/admin-actions";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import AdminTitle from "../admin-title/admin-title";

const AdminBookingList = () => {
    const dispatch = useDispatch();
    const books = useSelector(s => s.admin.books);

    useEffect(() => {
        dispatch(setBooksAction());
    }, []);

    const removeBook = (id) => {
        if (window.confirm("Уверены что хотите снять бронь?"))
            dispatch(removeBookAction(id));
    }

    return (
        <ReactCSSTransitionGroup
            transitionName="slide"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>

            <section className="booking">
                <div className="admin__container container section__content">
                    <NavLink to="/admin/booking" className="book-btn">Забронировать</NavLink>
                    {books.map(item => (
                        <div className="booking__form booking-list__form">
                            <div className="booking__list grid__col-4">
                                <div className="booking-list__column d-flex">
                                    <div className="booking__list-btn">{item.tableName}</div>
                                    <div className="booking__inputs">
                                        <div className="booking-list__info">
                                            <span className="booking-list__info-text booking-list__info-profile">{item.clientName}</span>
                                        </div>
                                        <div className="booking-list__info">
                                            <span className="booking-list__info-text booking-list__info-phone">{item.phoneNumber}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-list__column">
                                    <div className="booking-list__middle-part grid__col-6">
                                        <div className="booking-list__small-col">
                                            <p className="booking-list__title">Кол-во человек</p>
                                            <span className="booking__timeline-item">{item.menQuantity}</span>
                                        </div>
                                        <div className="booking-list__small-col">
                                            <p className="booking-list__title">Время</p>
                                            <span className="booking__timeline-item">{item.bookTime}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-list__column bottom-right">
                                    <button className="warn__btn book-unbook-btn" onClick={() => removeBook(item.id)}>Снять бронь</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </ReactCSSTransitionGroup>
    );
};

export default AdminBookingList;