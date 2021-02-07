import React, { useState, useEffect } from 'react';
import './dish-list.css'
import { NavLink } from "react-router-dom";
import { setBasket, createOrder } from "../../../redux/waiter/actions/waiter-actions";
import { useDispatch, useSelector } from 'react-redux';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Basket = () => {

    const dispatch = useDispatch();
    const [mealOrders, setMealOrders] = useState([]);

    useEffect(async () => {
        const basket = await JSON.parse(localStorage.getItem('order'));
        dispatch(setBasket(basket));
        setMealOrders(basket?.mealOrders);
    }, []);

    useEffect(() => {
        getTotalPrice();
    });

    let order = useSelector(s => s.waiter.basket);

    const createNewOrder = async () => {
        try {
            let order = JSON.parse(localStorage.getItem('order'));
            if (order.mealOrders.length <= 0) {
                window.alert("Корзина пуста");
                return;
            }
            if (window.confirm("Подтвердите заказ")) {
                await dispatch(createOrder(order));
                window.alert("Заказ был создан");
                order.mealOrders = [];
                localStorage.setItem('order', JSON.stringify(order));
                setMealOrders([]);
                window.location.href = '/waiter';
            }
        } catch (error) {
            console.log(error);
            window.alert(error);
        }
    };

    const clearBasket = () => {
        if (window.confirm("Подтвердите действие")){
            let order = JSON.parse(localStorage.getItem('order'));
            order.mealOrders = [];
            localStorage.setItem('order', JSON.stringify(order));
            setMealOrders([]);
        }
    }

    const [totalPrice, setTotalPrice] = useState(0);
    const getTotalPrice = () => {
        let sum = 0;
        for (let i = 0; i < mealOrders.length; i++)
            sum += mealOrders[i].price * mealOrders[i].orderedQuantity;
        setTotalPrice(sum);
    }

    return (
        <div>
            <ReactCSSTransitionGroup
                transitionName="slide"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                <section className="dish-list">
                    {mealOrders.length > 0 ? mealOrders.map(item => (
                        <div key={item.id} className="dish-list-item basket-item">
                            <h3 className="dish-list-item__title">{item.name}</h3>
                            <div className="dish-list-item__bottom-side basket-item__bottom-side">
                                <div className="dish-list-item__left-side">
                                    <div className="dish-list-item__price justify-align"><p>{item.price * item.orderedQuantity}</p></div>
                                    <button className="dish-list-item__plus-minus justify-align"><span>-</span></button>
                                    <div className="dish-list-item__count justify-align"><p>{item.orderedQuantity}</p></div>
                                    <button className="dish-list-item__plus-minus justify-align">+</button>
                                </div>
                                <div className="dish-list__btn-wrapper">
                                    <button className="dish-list__delete-btn">Удалить</button>
                                </div>
                            </div>
                        </div>
                    )) : <div className="basket-empty">
                            Корзина пуста
                    </div>}
                    <div>
                        <div className="dish-list-item basket-item basket-item__result">
                            <p className="basket-item__result-amount">Блюд: {mealOrders.length}</p>
                            <p className="basket-item__result-price">Цена: {totalPrice}</p>
                        </div>
                        <div className="dish-list__bottom-buttons">
                            <button className="dish-list__bottom-btn dish-list__accept-btn" onClick={createNewOrder}>Подтвердить</button>
                            <button className="dish-list__bottom-btn dish-list__clear-btn" onClick={clearBasket}>Очистить</button>
                            <NavLink to="/menu-categories" className="dish-list__bottom-btn dish-list__add-btn">Добавить</NavLink>
                        </div>
                    </div>
                </section>
            </ReactCSSTransitionGroup>
        </div>

    )
};

export default Basket;