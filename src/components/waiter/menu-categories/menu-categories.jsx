import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WaiterHeader from '../waiter-header/waiter-header'
import './menu-categories.css'
import { NavLink } from "react-router-dom";
import { setCategoriesAction, setMealsAction } from "../../../redux/waiter/actions/waiter-actions";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


const MenuCategories = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCategoriesAction());
    }, []);

    const categories = useSelector(s => s.waiter.categories);
    const setCategoryMeals = (id) => {
        dispatch(setMealsAction(id));
    };
    return (
        <div>
            <WaiterHeader href={'waiter-tables'} title={'Меню кухни'} hasCart={false}/>
            <ReactCSSTransitionGroup
                transitionName="slide"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                <div className="menu">
                    { categories.map(item => (
                        <NavLink to="/dish-order" className="menu-item" style={{ backgroundImage: `url(${item.image})` }} onClick={() => setCategoryMeals(item.id)}>
                            <span key={item.id} className="menu-item__title">{item.name}</span>
                        </NavLink>
                    ))}
                </div>
            </ReactCSSTransitionGroup>

        </div>

    )
};

export default MenuCategories;