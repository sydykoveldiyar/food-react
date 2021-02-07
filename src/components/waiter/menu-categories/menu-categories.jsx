import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './menu-categories.css'
import { NavLink } from "react-router-dom";
import { setCategories, setMeals } from "../../../redux/waiter/actions/waiter-actions";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const MenuCategories = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCategories());
    });

    const categories = useSelector(s => s.waiter.categories);
    const setCategoryMeals = (id) => {
        dispatch(setMeals(id));
    };
    return (
        <div>
            <ReactCSSTransitionGroup
                transitionName="slide"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
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