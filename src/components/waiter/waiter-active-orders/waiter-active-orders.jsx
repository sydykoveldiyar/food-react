import React, { useState, useEffect } from 'react'
import Modal from "react-modal";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setActiveOrders } from "../../../redux/waiter/actions/waiter-actions";
import './waiter-active-orders.css';
import './waiter-order-modal.css';

const customStyles = {
    content: {
        top: '35%',
        left: '40%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-40%, -10%)',
        padding: '0',
        border: 'none'
    },
};

const WaiterActiveOrders = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [meals, setModalMeals] = useState([]);

    const openModal = (meals) => {
        setModalMeals(meals);
        setModalIsOpen(true);
    }
    const closeModal = () => setModalIsOpen(false);

    useEffect(() => {
        dispatch(setActiveOrders());
    });

    const createOrder = () => {
        const order = {
            tableId: null,
            comment: '',
            mealOrders: []
        }
        localStorage.setItem('order', JSON.stringify(order));
    }

    const activeOrders = useSelector(s => s.waiter.activeOrders);
    const dispatch = useDispatch();
    return (
        <section classNameName="order-list">
            <div classNameName="order-list__btn">
                <NavLink to="/waiter-tables" classNameName="order-list__add-order-btn" onClick={createOrder}>Сделать новый заказ
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.0533447" width="25" height="25" rx="12.5" fill="#B80505" />
                        <path
                            d="M12.732 11.808H16.728V13.284H12.732V17.28H11.256V13.284H7.26V11.808H11.256V7.812H12.732V11.808Z"
                            fill="#FFFEFE" />
                    </svg>
                </NavLink>
            </div>
            <h2 classNameName="order-list__title">Лист активных заказов</h2>
            <div classNameName="order-list__orders">
                {activeOrders.map(item => (
                    <div key={item.id} className="order-list__order">
                        <p classNameName="order-list__item-name"><button classNameName="order-list__table-name" onClick={() => openModal(item.meals)}>{item.tableName}</button></p>
                        <p classNameName="order-list__item-status status-success">{item.status}</p>
                    </div>
                ))}
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} style={customStyles}>
                <div classNameName="order-popup">
                    {meals.map(item => (
                        <div classNameName="order-popup__item">
                            <p classNameName="order-popup__title">{item.name}</p>
                            <p classNameName="order-popup__condition">
                                <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0" />
                                </svg>
                                {item.status}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="order-popup__buttons">
                    <button className="order-popup__btn order-popup__add-btn">Добавить</button>
                    <button className="order-popup__btn order-popup__close-bill-btn">Закрыть счет</button>
                </div>
            </Modal>
        </section>
    );
}

export default WaiterActiveOrders;