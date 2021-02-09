import React from 'react';
import {NavLink} from "react-router-dom";
import './admin-booking.css'

const AdminBooking = () => {
    return (
        <div>
            <section className="booking">
                <div className="admin__container container section__content">
                    <h1 className="booking__title">Бронирование <NavLink to='/admin/booking-list'>Список</NavLink></h1>
                    <div className="booking__form">
                        <div className="booking__top-bar">
                            <div className="booking__column">
                                <h2 className="booking__top-title booking__title">Дата брони</h2>
                                <div className="booking__date-part">
                                    <input className="booking__date-inp" type="text" id="datepicker2" value="05-Feb-2021"/>
                                    <label className="booking__calendar" htmlFor="datepicker2"></label>
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
                        <div className="booking__timeline">
                            <div className="booking__column">
                                <input className="booking__pick" name="pick-time" id="choice1" type="radio"/>
                                <label className="booking__timeline-item" htmlFor="choice1">15:00</label>
                            </div>
                            <div className="booking__column">
                                <input className="booking__pick" name="pick-time" id="choice2" type="radio"/>
                                <label className="booking__timeline-item" htmlFor="choice2">15:00</label>
                            </div>
                            <div className="booking__column">
                                <input className="booking__pick" name="pick-time" id="choice3" type="radio"/>
                                <label className="booking__timeline-item" htmlFor="choice3">15:00</label>
                            </div>
                            <div className="booking__column">
                                <input className="booking__pick" name="pick-time" id="choice4" type="radio"/>
                                <label className="booking__timeline-item" htmlFor="choice4">15:00</label>
                            </div>
                            <div className="booking__column">
                                <input className="booking__pick" name="pick-time" id="choice5" type="radio"/>
                                <label className="booking__timeline-item" htmlFor="choice5">15:00</label>
                            </div>
                            <div className="booking__column">
                                <input className="booking__pick" name="pick-time" id="choice6" type="radio"/>
                                <label className="booking__timeline-item" htmlFor="choice6">15:00</label>
                            </div>
                            <div className="booking__column">
                                <input className="booking__pick" name="pick-time" id="choice7" type="radio"/>
                                <label className="booking__timeline-item" htmlFor="choice7">15:00</label>
                            </div>
                            <div className="booking__column">
                                <input className="booking__pick" name="pick-time" id="choice8" type="radio"/>
                                <label className="booking__timeline-item" htmlFor="choice8">15:00</label>
                            </div>
                            <div className="booking__column">
                                <input className="booking__pick" name="pick-time" id="choice9" type="radio"/>
                                <label className="booking__timeline-item" htmlFor="choice9">15:00</label>
                            </div>
                            <div className="booking__column">
                                <input className="booking__pick" name="pick-time" id="choice10" type="radio"/>
                                <label className="booking__timeline-item" htmlFor="choice10">15:00</label>
                            </div>
                        </div>
                        <div className="booking__free-tables">
                            <h2 className="booking__middle-title booking__title">Свободные столы</h2>
                            <div className="booking__middle-grid">
                                <div className="booking__column">
                                    <input className="booking__pick" name="pick-table" id="pick1" type="radio"/>
                                    <label className="booking__middle-item" htmlFor="pick1">1</label>
                                </div>
                                <div className="booking__column">
                                    <input className="booking__pick" name="pick-table" id="pick2" type="radio"/>
                                    <label className="booking__middle-item" htmlFor="pick2">2</label>
                                </div>
                                <div className="booking__column">
                                    <input className="booking__pick" name="pick-table" id="pick3" type="radio"/>
                                    <label className="booking__middle-item" htmlFor="pick3">3</label>
                                </div>
                                <div className="booking__column">
                                    <input className="booking__pick" name="pick-table" id="pick4" type="radio"/>
                                    <label className="booking__middle-item" htmlFor="pick4">4</label>
                                </div>
                                <div className="booking__column">
                                    <input className="booking__pick" name="pick-table" id="pick5" type="radio"/>
                                    <label className="booking__middle-item" htmlFor="pick5">5</label>
                                </div>
                                <div className="booking__column">
                                    <input className="booking__pick" name="pick-table" id="pick6" type="radio"/>
                                    <label className="booking__middle-item" htmlFor="pick6">6</label>
                                </div>
                                <div className="booking__column">
                                    <input className="booking__pick" name="pick-table" id="pick7" type="radio"/>
                                    <label className="booking__middle-item" htmlFor="pick7">7</label>
                                </div>
                                <div className="booking__column">
                                    <input className="booking__pick" name="pick-table" id="pick8" type="radio"/>
                                    <label className="booking__middle-item" htmlFor="pick8">8</label>
                                </div>
                                <div className="booking__column">
                                    <input className="booking__pick" name="pick-table" id="pick9" type="radio"/>
                                    <label className="booking__middle-item" htmlFor="pick9">9</label>
                                </div>
                            </div>
                        </div>
                        <div className="booking__bot-side">
                            <div className="booking__inputs">
                                <label className="booking__text-label booking__text-profile-icon" htmlFor="booking__text-inp1"></label>
                                <input className="booking__text-inp" placeholder="Имя клиента" id="booking__text-inp1" required
                                       type="text"/>
                                <label className="booking__text-label booking__text-phone-icon" htmlFor="booking__text-inp2"></label>
                                <input className="booking__text-inp" placeholder="+996" id="booking__text-inp2" required
                                       type="number"/>
                            </div>
                        </div>
                        <div className="booking__bot-btn-wrapper">
                            <button className="booking__bot-btn book-unbook-btn">Забронировать</button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default AdminBooking;