import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFreeTablesAction } from "../../../redux/admin/actions/admin-actions";
import { NavLink } from "react-router-dom";
import './admin-booking.css'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import * as axios from 'axios';
import { bookAPI } from "../../api/api";

const AdminBooking = () => {
    const dispatch = useDispatch();
    const freeTables = useSelector(s => s.admin.freeTables);
    const tables = useSelector(s => s.admin.tables)
    useEffect(() => {
        dispatch(setFreeTablesAction());
    }, [tables]);

    const [menCounter, setMenCounter] = useState(0);
    const encrementCounter = () => {
        let count = menCounter + 1;
        setMenCounter(count);
    }

    const [clientInfo, setClientInfo] = useState({});
    const handleClient = (e) => setClientInfo({ ...clientInfo, [e.target.name]: e.target.value });

    const [bookDate, setBookDate] = useState(new Date());
    const [tableId, setTableId] = useState(0);

    const bookTable = async () => {
        try {
            const book = {
                tableId: tableId,
                bookDate: bookDate,
                menQuantity: menCounter,
                clientName: clientInfo.clientName,
                phoneNumber: clientInfo.phoneNumber
            };
            console.log(book);
            const { data } = await axios.post(`${bookAPI}`, book);
            window.alert(data.message);
            window.location = '/admin/booking-list';
        } catch (error) {
            console.log(error);
        }
    }

    const decrementCounter = () =>{
        if (menCounter > 0 ){
            let count = menCounter - 1;
            setMenCounter(count);
        }
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
                        <NavLink to='/admin/booking-list' className="book-list">Список</NavLink>
                        <div className="booking__form">
                            <div className="booking__top-bar">
                                <div className="booking__column">
                                    <h2 className="booking__top-title booking__title">Дата брони</h2>
                                    <div className="booking__date-part">
                                    <DatePicker selected={bookDate} showTimeSelect dateFormat="Pp" format="YYYY-MM-DD HH:MM:SS"  className="booking__date-inp" onChange={date => setBookDate(date)} />
                                    </div>
                                </div>
                                <div className="booking__column">
                                    <h2 className="booking__top-title booking__title">Кол-во человек</h2>
                                    <div className="booking__counter grid__col-4">
                                        <button className="booking__col-btn bordered" onClick={decrementCounter}>-</button>
                                        <div className="booking__col bordered">{menCounter}</div>
                                        <button className="booking__col-btn bordered" onClick={encrementCounter}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="booking__free-tables">
                                <h2 className="booking__middle-title booking__title">Свободные столы</h2>
                                <div className="booking__middle-grid">
                                    {freeTables.map(item => (
                                        <div key={item.id} className="booking__column">
                                            <input className="booking__pick" name="pick-table" id={item.id} type="radio" />
                                            <label className="booking__middle-item" htmlFor={item.id} onClick={() => setTableId(item.id)}>{item.name}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="booking__bot-side">
                                <div className="booking__inputs">
                                    <label className="booking__text-label booking__text-profile-icon" htmlFor="booking__text-inp1"></label>
                                    <input className="booking__text-inp" placeholder="Имя клиента" id="booking__text-inp1" required
                                        name="clientName" type="text" onChange={handleClient}/>
                                    <label className="booking__text-label booking__text-phone-icon" htmlFor="booking__text-inp2"></label>
                                    <input className="booking__text-inp" placeholder="+996" id="booking__text-inp2" required
                                        name="phoneNumber" type="number" onChange={handleClient} />
                                </div>
                            </div>
                            <div className="booking__bot-btn-wrapper">
                                <button className="booking__bot-btn book-unbook-btn" onClick={bookTable}>Забронировать</button>
                            </div>
                        </div>
                    </div>
                </section>
        </ReactCSSTransitionGroup>

    );
};

export default AdminBooking;