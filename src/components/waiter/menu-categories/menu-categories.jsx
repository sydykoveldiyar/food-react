import React from 'react';
import './menu-categories.css'

const MenuCategories = () => {
    return (
        <div className="menu">
            <button className="menu-item menu-item__breakfast">
                <span className="menu-item__title">Завтраки</span>
            </button>
            <button className="menu-item menu-item__first">
                <span className="menu-item__title">Первые блюда</span>
            </button>
            <button className="menu-item menu-item__second">
                <span className="menu-item__title">Вторые блюда</span>
            </button>
            <button className="menu-item menu-item__salads">
                <span className="menu-item__title">Салаты</span>
            </button>
        </div>
    );
};

export default MenuCategories;