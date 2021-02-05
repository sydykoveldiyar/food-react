import React from 'react';
import './menu-categories.css'
import { NavLink } from "react-router-dom";

const MenuCategories = () => {
    return (
        <div className="menu">
            <NavLink to="/dish-order" className="menu-item menu-item__breakfast">
                <span className="menu-item__title">Завтраки</span>
            </NavLink>
            <NavLink to="/dish-order" className="menu-item menu-item__first">
                <span className="menu-item__title">Первые блюда</span>
            </NavLink>
            <NavLink to="/dish-order" className="menu-item menu-item__second">
                <span className="menu-item__title">Вторые блюда</span>
            </NavLink>
            <NavLink to="/dish-order" className="menu-item menu-item__salads">
                <span className="menu-item__title">Салаты</span>
            </NavLink>
        </div>
    );
};

export default MenuCategories;