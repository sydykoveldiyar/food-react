import './waiter-header.css';
import basket from '../../../static/images/basket.png';
import { NavLink } from 'react-router-dom';

const WaiterHeader = () => {
    return (
        <header classNameName="waiter-header">
            <div classNameName="waiter-header__left-side">
                <div classNameName="waiter-header__back-arrow">
                    <a href=""><i className="fas fa-chevron-left"></i></a>
                </div>
                <p classNameName="waiter-header__title">Список активных заказов</p>
            </div>
            <NavLink to="/basket" classNameName="basket-img">
                <img src={basket} alt=""/>
            </NavLink>
        </header>
    );
}

export default WaiterHeader;