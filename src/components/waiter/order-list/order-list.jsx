import React from 'react';
import './order-list.css'

const OrderList = () => {
    return (
        <div>
            <section className="order-list">
                <div className="order-list__btn">
                    <button className="order-list__add-order-btn">Сделать новый заказ
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.0533447" width="25" height="25" rx="12.5" fill="#B80505"/>
                            <path
                                d="M12.732 11.808H16.728V13.284H12.732V17.28H11.256V13.284H7.26V11.808H11.256V7.812H12.732V11.808Z"
                                fill="#FFFEFE"/>
                        </svg>
                    </button>
                </div>
                <h2 className="order-list__title">Лист активных заказов</h2>
                <div className="order-list__orders">
                    <div className="order-list__order">
                        <p className="order-list__item-name"><a href="">Заказ #1</a></p>
                        <p className="order-list__item-status status-success">Готово</p>
                    </div>
                    <div className="order-list__order">
                        <p className="order-list__item-name"><a href="">Заказ #2</a></p>
                        <p className="order-list__item-status status-primary">В ПРОЦЕССЕ</p>
                    </div>
                    <div className="order-list__order">
                        <p className="order-list__item-name"><a href="">Заказ #3</a></p>
                        <p className="order-list__item-status status-danger">НЕ ГОТОВО</p>
                    </div>
                    <div className="order-list__order">
                        <p className="order-list__item-name"><a href="">Заказ #4</a></p>
                        <p className="order-list__item-status status-success">Готово</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrderList;