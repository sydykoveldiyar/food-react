import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import Modal from "react-modal";
import {changeAllMealsAction, setAllMealsAction, setCategoriesOptionsAction, addNewMealAction} from "../../../redux/admin/actions/admin-actions";
import './meals-page.css'

const MealsPage = () => {
    const allMeals = useSelector(s => s.admin.allMeals)
    const categoriesOptions = useSelector(s => s.admin.categoriesOptions)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setAllMealsAction())
        dispatch(setCategoriesOptionsAction())
    }, [])

    const setMealIsActive = (status) => {
        if (status === 'В наличии') {
            return true
        } else {
            return false
        }
    }

    const changeStatusMeal = (oldMeal, status) => {
        if (window.confirm('Подтвердите действие:')) {
            if (status) {
                let changedMeal = {...oldMeal, mealStatus: 1}
                dispatch(changeAllMealsAction(oldMeal.id, changedMeal))
            } else {
                let changedMeal = {...oldMeal, mealStatus: 0}
                dispatch(changeAllMealsAction(oldMeal.id, changedMeal))
            }
        }
    }

    const customStyles = {
        content: {
            top: '40%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: '0',
            border: 'none'
        },
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => setModalIsOpen(false);

    const handleMeal = (e) => setNewMeal({ ...newMeal, [e.target.name]: e.target.value });

    function submitHandler(e) {
        e.preventDefault()
        console.log(newMeal)
        dispatch(addNewMealAction(newMeal))
    }

    let [newMeal, setNewMeal] = useState({
        imageURL: "a",
    })

    return (
        <div className="meals-page">
            <div className="admin__container container section__content">
                <div className="meals-page__top-box">
                    <p className="meals-page__title">Meals page</p>
                    <div className="meals-page__controls">
                        <button className="meals-page__add-btn" onClick={openModal}>Добавить</button>
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
                                <tr key={meal.id}>
                                    <td>{meal.name}</td>
                                    <td>{meal.categoryName}</td>
                                    <td>
                                        <input type="checkbox" name="good" id={'meals-page__checkbox' + [meal.id]}
                                               className="meals-page__checkbox-toggle"
                                               defaultChecked={setMealIsActive(meal.mealStatus)}
                                               onChange={() => changeStatusMeal(meal, setMealIsActive(meal.mealStatus))}
                                        />
                                        <label htmlFor={'meals-page__checkbox' + [meal.id]}
                                               className="meals-page__checkbox-label">
                                            <span className="meals-page__checkbox-ball"></span></label>
                                    </td>
                                    <td>{meal.weight}гр</td>
                                    <td>{meal.price}сом</td>
                                    <td>
                                        <div className="meals-page__table-btn-wrapper">
                                            <button className="meals-page__table-btn">
                                                <svg height="325pt" viewBox="0 0 325 325.37515" width="325pt"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="m114.6875 284.675781-73.800781-73.800781 178.5-178.5 73.800781 73.800781zm-80.699219-60.800781 67.699219 67.699219-101.5 33.800781zm281.898438-140.300781-12.800781 12.800781-73.898438-73.898438 12.800781-12.800781c12.894531-12.902343 33.804688-12.902343 46.699219 0l27.199219 27.199219c12.800781 12.9375 12.800781 33.765625 0 46.699219zm0 0"/>
                                                </svg>
                                            </button>
                                            <button className="meals-page__table-btn">
                                                <svg id="Layer_1" viewBox="0 0 512 512" space="preserve"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path
                                                            d="M89.4,100l26.2,347.9c2.5,32.5,29.6,58.1,60.7,58.1h159.3c31.1,0,58.2-25.6,60.7-58.1L422.6,100H89.4z M190.1,460.8   c0.3,7.1-5.1,12.7-12,12.7s-12.7-5.7-13.1-12.7l-14.6-296.6c-0.5-9.6,5.7-17.4,13.8-17.4s14.9,7.8,15.3,17.4L190.1,460.8z    M268.5,460.8c0,7.1-5.7,12.7-12.5,12.7s-12.5-5.7-12.5-12.7l-2-296.6c-0.1-9.6,6.4-17.4,14.5-17.4c8.1,0,14.6,7.8,14.5,17.4   L268.5,460.8z M346.9,460.8c-0.3,7.1-6.2,12.7-13.1,12.7s-12.2-5.7-12-12.7l10.6-296.6c0.3-9.6,7.2-17.4,15.3-17.4   c8.1,0,14.3,7.8,13.8,17.4L346.9,460.8z"/>
                                                        <path
                                                            d="M445.3,82.8H66.7v0c-1.8-21.1,10.7-38.4,27.9-38.4h322.9C434.6,44.4,447.1,61.8,445.3,82.8L445.3,82.8z"
                                                            id="XMLID_2_"/>
                                                        <path
                                                            d="M324.3,58.6H187.7l-0.2-7.8C186.7,26.3,202.1,6,221.9,6h68.3c19.7,0,35.1,20.3,34.4,44.7L324.3,58.6z"
                                                            id="XMLID_1_"/>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} style={customStyles}
                           closeTimeoutMS={300}>
                        <form onSubmit={submitHandler} className="meal-add-modal">
                            <div className="meal-add-modal__input-wrapper">
                                <label htmlFor="meal-add-modal__name" className="meal-add-modal__text">Название:</label>
                                <input name="name" type="text" id="meal-add-modal__name" required onChange={handleMeal}/>
                            </div>
                            <div className="meal-add-modal__input-wrapper">
                                <label htmlFor="meal-add-modal__categories" className="meal-add-modal__text">Категория:</label>
                                <select name="categoryId" id="modal__categories" onChange={handleMeal}>
                                    <option value="" disabled selected>Select options</option>
                                    {
                                        categoriesOptions.map(category => (
                                            <option key={category.id} value={category.id}> {category.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="meal-add-modal__input-wrapper">
                                <label htmlFor="meal-add-modal__price" className="meal-add-modal__text">Цена:</label>
                                <input name="price" type="number" id="meal-add-modal__price" required onChange={handleMeal}/>
                            </div>
                            <div className="meal-add-modal__input-wrapper">
                                <label htmlFor="meal-add-modal__weight" className="meal-add-modal__text">Вес:</label>
                                <input name="weight" type="number" id="meal-add-modal__weight" required onChange={handleMeal}/>
                            </div>
                            <div className="meal-add-modal__input-wrapper">
                                <label htmlFor="meal-add-modal__desc" className="meal-add-modal__text">Описание:</label>
                                <textarea name="description" id="meal-add-modal__desc" onChange={handleMeal}></textarea>
                            </div>
                            <div className="meal-add-modal__input-wrapper">
                                <input type="submit"/>
                            </div>
                        </form>
                    </Modal>
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default MealsPage;