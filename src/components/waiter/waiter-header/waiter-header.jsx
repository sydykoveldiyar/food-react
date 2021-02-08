import './waiter-header.css';
import basket from '../../../static/images/basket.png';
import leftArrow from '../../../static/images/left-arrow.svg';
import { NavLink } from 'react-router-dom';

const WaiterHeader = (props) => {
    return (
        <header className="waiter-header">
            <NavLink to={props.href} className="waiter-header__left-side">
                <div  className="waiter-header__back-arrow">
                    <img src={leftArrow} alt=""/>
                </div>
                <p className="waiter-header__title">{props.title}</p>
            </NavLink>
            { props.hasCart ? 
            (<NavLink to="/basket" className="basket-img">
                <img src={basket} alt="" />
            </NavLink>) : null}

        </header>
    );
}

export default WaiterHeader;