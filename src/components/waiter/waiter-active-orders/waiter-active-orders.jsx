import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setActiveOrdersAction, closeChequeAction } from "../../../redux/waiter/actions/waiter-actions";
import './waiter-active-orders.css';
import './waiter-order-modal.css';
import Modal from "react-modal";
import WaiterHeader from "../waiter-header/waiter-header";

const customStyles = {
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: '0',
        border: 'none'
    },
};


const WaiterActiveOrders = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [meals, setModalMeals] = useState([]);
    const [orderId, setOrderId] = useState(0);

    const openModal = (orderId, meals) => {
        setOrderId(orderId);
        setModalMeals(meals);
        setModalIsOpen(true);
    }
    const closeModal = () => setModalIsOpen(false);

    useEffect(() => {
        dispatch(setActiveOrdersAction());
    });

    const createOrder = () => {
        const order = {
            tableId: 0,
            comment: '',
            mealOrders: []
        }
        localStorage.setItem('order', JSON.stringify(order));
    }

    const closeCheque = () => {
        if (window.confirm("Закрыть счет?")) {
            dispatch(closeChequeAction(orderId));
            closeModal();
        }
    }

    const setOrderStatusColor = (status) => {
        if (status == 0)
            return '#0357A5';
        else if (status == 1)
            return '#B80505';
        else
            return '#04932C';
    }

    const setMealStatusColor = (status) => {
        if (status == 0)
            return '#0357A5';
        else if (status == 1)
            return '#04932C ';
        else
            return '#B80505';
    }

    const activeOrders = useSelector(s => s.waiter.activeOrders);
    const dispatch = useDispatch();
    return (
        <div>
            <WaiterHeader href={'/'} title={'Список активных заказов'} hasCart={false}/>
            <section className="order-list">
                <div className="order-list__btn">
                    <NavLink to="/waiter-tables" className="order-list__add-order-btn" onClick={createOrder}>Сделать новый заказ
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.0533447" width="25" height="25" rx="12.5" fill="#B80505" />
                            <path
                                d="M12.732 11.808H16.728V13.284H12.732V17.28H11.256V13.284H7.26V11.808H11.256V7.812H12.732V11.808Z"
                                fill="#FFFEFE" />
                        </svg>
                    </NavLink>
                </div>
                <h2 className="order-list__title">Лист активных заказов</h2>
                <div className="order-list__orders">
                    {activeOrders.map(item => (
                        <div key={item.id} className="order-list__order">
                            <p className="order-list__item-name"><button className="order-list__table-name" onClick={() => openModal(item.id, item.meals)}>{item.tableName}</button></p>
                            <p className="order-list__item-status" style={{ color: `${setOrderStatusColor(item.status)}` }}>{item.status}</p>
                        </div>
                    ))}
                </div>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} style={customStyles} closeTimeoutMS={300}>
                    <div className="order-popup">
                        {meals.map(item => (
                            <div className="order-popup__item">
                                <p className="order-popup__title">{item.name}</p>
                                <p className="order-popup__condition" style={{ color: `${setMealStatusColor(item.status)}` }}>
                                    {item.status}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="order-popup__buttons">
                        <button className="order-popup__btn order-popup__add-btn">Добавить</button>
                        <button className="order-popup__btn order-popup__close-bill-btn" onClick={() => closeCheque()}>Закрыть счет</button>
                    </div>
                </Modal>
            </section>
        </div>
    );
}

export default WaiterActiveOrders;