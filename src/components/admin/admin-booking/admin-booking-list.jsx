import React from 'react';
import './admin-booking.css'

const AdminBookingList = () => {
    return (
            <section className="booking">
                <div className="admin__container container section__content">
                    <div className="booking__form booking-list__form">
                        <div className="booking__date-part booking-list-date">
                            <input className="booking__date-inp" type="text" id="datepicker2" value="05-Feb-2021"/>
                            <label className="booking__calendar" htmlFor="datepicker2"></label>
                        </div>
                        <div className="booking__list grid__col-4">
                            <div className="booking-list__column d-flex">
                                <div className="booking__list-btn">1</div>
                                <div className="booking__inputs">
                                    <div className="booking-list__info">
                                        <span className="booking-list__info-text booking-list__info-profile">Медина</span>
                                    </div>
                                    <div className="booking-list__info">
                                        <span className="booking-list__info-text booking-list__info-phone">+996702345634</span>
                                    </div>
                                </div>
                            </div>
                            <div className="booking-list__column">
                                <div className="booking-list__middle-part grid__col-6">
                                    <div className="booking-list__small-col">
                                        <p className="booking-list__title">Кол-во человек</p>
                                        <span className="booking__timeline-item">2</span>
                                    </div>
                                    <div className="booking-list__small-col">
                                        <p className="booking-list__title">Время</p>
                                        <span className="booking__timeline-item">15:00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="booking-list__column bottom-right">
                                <button className="warn__btn book-unbook-btn">Снять бронь</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default AdminBookingList;