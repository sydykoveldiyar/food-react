import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { setMealsAction, setCategoryOptionsAction, addMealAction, editMealAction, removeMealAction } from "../../../redux/admin/actions/admin-actions";
import './admin-meals.css'
import AdminTitle from '../admin-title/admin-title';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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

const AdminMeals = () => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const meals = useSelector(s => s.admin.meals);
    const categoryOptions = useSelector(s => s.admin.categoryOptions);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => {
        setIsEditing(false);
        setMeal({});
        setModalIsOpen(false);
    }
    useEffect(() => {
        dispatch(setMealsAction())
        dispatch(setCategoryOptionsAction())
    }, [meals])

    useEffect(() => {
        if (categoryOptions.length) setMeal({ ...meal, categoryId: categoryOptions[0].id })
    }, [])

    const [meal, setMeal] = useState({ imageURL: "https://i.ibb.co/6Y9Ypvm/image.png" })
    const handleMeal = (e) => setMeal({ ...meal, [e.target.name]: e.target.value });
    const setMealIsActive = (status) => status === 'В наличии' ? true : false;
    const saveMeal = () => {
        isEditing ? dispatch(editMealAction(meal)) : dispatch(addMealAction(meal));
        closeModal();
    }
    const editStatusMeal = (meal, status) => {
        if (window.confirm('Подтвердите действие')) {
            const edited = status ? { ...meal, mealStatus: 1 } : { ...meal, mealStatus: 0 };
            dispatch(editMealAction(edited));
        }
        closeModal();
    }
    const removeMeal = (id) => {
        if (window.confirm("Удалить блюдо?"))
            dispatch(removeMealAction(id));
    }

    const setEditEntity = (entity) => {
        setIsEditing(true);
        setMeal({
            id: entity.id,
            name: entity.name,
            price: entity.price,
            categoryId: entity.categoryId,
            weight: entity.weight,
            description: entity.description
        });
        console.log(meal);
        openModal();
    }

    return (
        <ReactCSSTransitionGroup
            transitionName="slide"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>

            <section className="meals-page">
                <div className="admin__container container section__content">
                    <div className="meals-page__top-box">
                        <AdminTitle title={'Блюда'} isEntity={true} openModal={openModal} />
                        <div className="meals-page__controls">
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
                                <th>Название</th>
                                <th>Категория</th>
                                <th>Статус</th>
                                <th>Вес</th>
                                <th>Цена</th>
                                <th colSpan="1">Операции</th>
                            </tr>
                        </thead>
                        <tbody>
                            {meals.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.categoryName}</td>
                                    <td>
                                        <input type="checkbox" name="good" id={'meals-page__checkbox' + [item.id]}
                                            className="meals-page__checkbox-toggle"
                                            defaultChecked={setMealIsActive(item.mealStatus)}
                                            onChange={() => editStatusMeal(item, setMealIsActive(item.mealStatus))}
                                        />
                                        <label htmlFor={'meals-page__checkbox' + [item.id]}
                                            className="meals-page__checkbox-label">
                                            <span className="meals-page__checkbox-ball"></span></label>
                                    </td>
                                    <td>{item.weight}гр</td>
                                    <td>{item.price}сом</td>
                                    <td>
                                        <div className="meals-page__table-btn-wrapper">
                                            <button onClick={() => setEditEntity(item)} className="meals-page__table-btn">
                                                <svg height="325pt" viewBox="0 0 325 325.37515" width="325pt"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="m114.6875 284.675781-73.800781-73.800781 178.5-178.5 73.800781 73.800781zm-80.699219-60.800781 67.699219 67.699219-101.5 33.800781zm281.898438-140.300781-12.800781 12.800781-73.898438-73.898438 12.800781-12.800781c12.894531-12.902343 33.804688-12.902343 46.699219 0l27.199219 27.199219c12.800781 12.9375 12.800781 33.765625 0 46.699219zm0 0" />
                                                </svg>
                                            </button>
                                            <button onClick={() => removeMeal(item.id)} className="meals-page__table-btn">
                                                <svg id="Layer_1" viewBox="0 0 512 512" space="preserve"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path
                                                            d="M89.4,100l26.2,347.9c2.5,32.5,29.6,58.1,60.7,58.1h159.3c31.1,0,58.2-25.6,60.7-58.1L422.6,100H89.4z M190.1,460.8   c0.3,7.1-5.1,12.7-12,12.7s-12.7-5.7-13.1-12.7l-14.6-296.6c-0.5-9.6,5.7-17.4,13.8-17.4s14.9,7.8,15.3,17.4L190.1,460.8z    M268.5,460.8c0,7.1-5.7,12.7-12.5,12.7s-12.5-5.7-12.5-12.7l-2-296.6c-0.1-9.6,6.4-17.4,14.5-17.4c8.1,0,14.6,7.8,14.5,17.4   L268.5,460.8z M346.9,460.8c-0.3,7.1-6.2,12.7-13.1,12.7s-12.2-5.7-12-12.7l10.6-296.6c0.3-9.6,7.2-17.4,15.3-17.4   c8.1,0,14.3,7.8,13.8,17.4L346.9,460.8z" />
                                                        <path
                                                            d="M445.3,82.8H66.7v0c-1.8-21.1,10.7-38.4,27.9-38.4h322.9C434.6,44.4,447.1,61.8,445.3,82.8L445.3,82.8z"
                                                            id="XMLID_2_" />
                                                        <path
                                                            d="M324.3,58.6H187.7l-0.2-7.8C186.7,26.3,202.1,6,221.9,6h68.3c19.7,0,35.1,20.3,34.4,44.7L324.3,58.6z"
                                                            id="XMLID_1_" />
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} style={customStyles}
                                closeTimeoutMS={300}>
                                <div className="admin-modal">
                                    <div className="admin-modal-wrapper">
                                        <label htmlFor="meal-add-modal__name" className="admin-modal__text">Название:</label>
                                        <input name="name" type="text" id="meal-add-modal__name" className="admin-modal__input" required value={meal.name} onChange={handleMeal} />
                                    </div>
                                    <div className="admin-modal-wrapper">
                                        <label htmlFor="meal-add-modal__categories" className="admin-modal__text">Категория:</label>
                                        <select name="categoryId" id="modal__categories" className="admin-modal__input" value={meal.categoryId} onChange={handleMeal}>
                                            {categoryOptions.map(item => (
                                                <option key={item.id} value={item.id}> {item.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="admin-modal-wrapper">
                                        <label htmlFor="meal-add-modal__price" className="admin-modal__text">Цена:</label>
                                        <input name="price" type="number" id="meal-add-modal__price" className="admin-modal__input" required value={meal.price} onChange={handleMeal} />
                                    </div>
                                    <div className="admin-modal-wrapper">
                                        <label htmlFor="meal-add-modal__weight" className="admin-modal__text">Вес:</label>
                                        <input name="weight" type="text" id="meal-add-modal__weight" className="admin-modal__input" required value={meal.weight} onChange={handleMeal} />
                                    </div>
                                    <div className="admin-modal-wrapper">
                                        <label htmlFor="meal-add-modal__desc" className="admin-modal__text">Описание:</label>
                                        <textarea name="description" id="meal-add-modal__desc" className="admin-modal__input" value={meal.description} onChange={handleMeal}></textarea>
                                    </div>
                                    <div className="admin-modal-wrapper">
                                        <button onClick={saveMeal} className="admin-modal__btn">Сохранить</button>
                                    </div>
                                </div>
                            </Modal>
                        </tbody>
                    </table>
                </div>
            </section>
        </ReactCSSTransitionGroup>
    );
};

export default AdminMeals;