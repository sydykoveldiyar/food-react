import React, {useEffect,useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {setAllMeals} from "../../../redux/admin/actions/admin-actions";
import Sidebar from "../sidebar/sidebar"
import AdminHeader from '../admin-header/admin-header'
import AdminFooter from "../admin-footer/admin-footer"
import MealsPageItem from "./meals-page-item";
import './meals-page.css'
import './meals-page-media.css'


const MealsPage = () => {

    const allMeals = useSelector(s => s.admin.allMeals)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setAllMeals())
    },[])



    return (
            <div className="page-wrapper">
                <Sidebar/>
                <div className="page-content">
                    <div className="page-container">
                        <AdminHeader/>
                        <div className="meals-page">
                            <div className="meals-page__top-box">
                                <p className="meals-page__title">Meals page</p>
                                <div className="meals-page__controls">
                                    <button className="meals-page__add-btn">Добавить</button>
                                    <div className="meals-page__select-wrapper">
                                        <label className="meals-page__select-label" htmlFor="meals-page__select">По
                                            категориям:</label>
                                        <div className="select">
                                            <select id="meals-page__select" className="meals-page__select">
                                                <option value="default">Все</option>
                                                <option value="1">Завтраки</option>
                                                <option value="2">Первые блюда</option>
                                                <option value="3">Вторые блюда</option>
                                                <option value="4">Салаты</option>
                                                <option value="5">Кофе</option>
                                                <option value="6">Коктейли</option>
                                                <option value="7">Алкогольные напитки</option>
                                                <option value="8">Безалкогольные напитки</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table className="meals-page__table">
                                <thead>
                                <tr>
                                    <th>Названия</th>
                                    <th>Категория</th>
                                    <th>Статус</th>
                                    <th>Ед.изм.</th>
                                    <th>Цена</th>
                                    <th colSpan="1">Операции</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    allMeals.map((meal) => {
                                        return (
                                            <MealsPageItem meal={meal} key={meal.id}/>
                                        )
                                    })
                                }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <AdminFooter/>
                </div>

            </div>
    );
};

export default MealsPage;