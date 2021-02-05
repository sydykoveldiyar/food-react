import './waiter-tables.css'
import { NavLink } from "react-router-dom";

const WaiterTables = () => {
    return (
        <section class="tables">
        <div class="tables__container">
            <div class="tables__row grid__col-4">
                <button class="tables__title-btn tables__active">Активные</button>
                <button class="tables__title-btn tables__free">Свободные</button>
                <button class="tables__title-btn tables__booked">Бронь</button>
            </div>
            <div class="tables__row grid__col-4">
                <NavLink to="/menu-categories" class="tables__table-btn tables__active">1</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__free">2</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__booked">3</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__active">4</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__free">5</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__booked">6</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__active">7</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__free">8</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__booked">9</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__active">10</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__free">11</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__booked">12</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__active">13</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__free">14</NavLink>
                <NavLink to="/menu-categories" class="tables__table-btn tables__booked">15</NavLink>
            </div>
            <div class="tables__all">
                <div class="tables__all-btn">Все столы</div>
            </div>
        </div>
    </section>
    );
}

export default WaiterTables;