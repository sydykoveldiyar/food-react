import './waiter-header.css';
import basket from '../../../static/images/basket.png';
import { NavLink } from 'react-router-dom';

const WaiterHeader = () => {
    return (
        <header className="waiter-header">
            <div className="waiter-header__left-side">
                <div className="waiter-header__back-arrow">
                    <a href=""><i class="fas fa-chevron-left"></i></a>
                </div>
                <p className="waiter-header__title">Список активных заказов</p>
            </div>
            <NavLink to="/basket" className="basket-img">
                <img src={basket} alt=""/>
            </NavLink>
        </header>
    );
}

export default WaiterHeader;