import React from 'react';
import './dish-list.css'

const Basket = () => {

    

    return (
        <section className="dish-list">
            <div className="dish-list-item basket-item">
                <h3 className="dish-list-item__title">Боул с черникой и гранолой</h3>
                <div className="dish-list-item__bottom-side basket-item__bottom-side">
                    <div className="dish-list-item__left-side">
                        <div className="dish-list-item__price justify-align"><p>250,00</p></div>
                        <button className="dish-list-item__plus-minus justify-align"><span>-</span></button>
                        <div className="dish-list-item__count justify-align"><p>1</p></div>
                        <button className="dish-list-item__plus-minus justify-align">+</button>
                    </div>
                    <div className="dish-list__btn-wrapper">
                        <button className="dish-list__delete-btn">Удалить</button>
                    </div>
                </div>
            </div>
            <div className="dish-list-item basket-item">
                <h3 className="dish-list-item__title">Боул с черникой и гранолой</h3>
                <div className="dish-list-item__bottom-side basket-item__bottom-side">
                    <div className="dish-list-item__left-side">
                        <div className="dish-list-item__price justify-align"><p>250,00</p></div>
                        <button className="dish-list-item__plus-minus justify-align"><span>-</span></button>
                        <div className="dish-list-item__count justify-align"><p>1</p></div>
                        <button className="dish-list-item__plus-minus justify-align">+</button>
                    </div>
                    <div className="dish-list__btn-wrapper">
                        <button className="dish-list__delete-btn">Удалить</button>
                    </div>
                </div>
            </div>
            <div className="dish-list-item basket-item">
                <h3 className="dish-list-item__title">Боул с черникой и гранолой</h3>
                <div className="dish-list-item__bottom-side basket-item__bottom-side">
                    <div className="dish-list-item__left-side">
                        <div className="dish-list-item__price justify-align"><p>250,00</p></div>
                        <button className="dish-list-item__plus-minus justify-align"><span>-</span></button>
                        <div className="dish-list-item__count justify-align"><p>1</p></div>
                        <button className="dish-list-item__plus-minus justify-align">+</button>
                    </div>
                    <div className="dish-list__btn-wrapper">
                        <button className="dish-list__delete-btn">Удалить</button>
                    </div>
                </div>
            </div>
            <div className="dish-list-item basket-item">
                <h3 className="dish-list-item__title">Боул с черникой и гранолой</h3>
                <div className="dish-list-item__bottom-side basket-item__bottom-side">
                    <div className="dish-list-item__left-side">
                        <div className="dish-list-item__price justify-align"><p>250,00</p></div>
                        <button className="dish-list-item__plus-minus justify-align"><span>-</span></button>
                        <div className="dish-list-item__count justify-align"><p>1</p></div>
                        <button className="dish-list-item__plus-minus justify-align">+</button>
                    </div>
                    <div className="dish-list__btn-wrapper">
                        <button className="dish-list__delete-btn">Удалить</button>
                    </div>
                </div>
            </div>
            <div className="dish-list-item basket-item">
                <h3 className="dish-list-item__title">Боул с черникой и гранолой</h3>
                <div className="dish-list-item__bottom-side basket-item__bottom-side">
                    <div className="dish-list-item__left-side">
                        <div className="dish-list-item__price justify-align"><p>250,00</p></div>
                        <button className="dish-list-item__plus-minus justify-align"><span>-</span></button>
                        <div className="dish-list-item__count justify-align"><p>1</p></div>
                        <button className="dish-list-item__plus-minus justify-align">+</button>
                    </div>
                    <div className="dish-list__btn-wrapper">
                        <button className="dish-list__delete-btn">Удалить</button>
                    </div>
                </div>
            </div>
            <div className="dish-list-item basket-item basket-item__result">
                <p className="basket-item__result-amount">4 товара</p>
                <p className="basket-item__result-price">750,00</p>
            </div>
            <div className="dish-list__bottom-buttons">
                <button className="dish-list__bottom-btn dish-list__accept-btn">Подтвердить</button>
                <button className="dish-list__bottom-btn dish-list__add-btn">Добавить</button>
            </div>
        </section>
    )
};

export default Basket;