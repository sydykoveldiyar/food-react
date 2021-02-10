import './admin-categories.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal"
import {
    setCategoriesAction,
    saveCategoryAction,
    removeCategoryAction,
    setDepartmentsAction,
    editCategoryAction
} from "../../../redux/admin/actions/admin-actions";
import AdminHeader from "../admin-header/admin-header";
import AdminTitle from "../admin-title/admin-title";
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

const AdminCategories = () => {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => {
        setModalIsOpen(false);
        setIsEditing(false);
        setCategory({});
    }

    const categories = useSelector(s => s.admin.categories);
    const departments = useSelector(s => s.admin.departments);
    const [category, setCategory] = useState({});

    useEffect(() => {
        dispatch(setCategoriesAction());
        dispatch(setDepartmentsAction())
    }, [categories]);

    useEffect(() => {
        if (departments.length) setCategory({ ...category, department: departments[0].value })
    }, [])


    const handleCategory = (e) => setCategory({ ...category, [e.target.name]: e.target.value });

    function handleSelectCategory(departmentId) {
        setCategory({ ...category, department: departmentId })
    }
    const saveCategory = () => {
        console.log(category)
        isEditing ? dispatch(editCategoryAction(category)) : dispatch(saveCategoryAction(category));
        closeModal();
    }
    const removeCategory = (id) => {
        if (window.confirm("Хотите удалить категорию?"))
            dispatch(removeCategoryAction(id));
    }
    const setEditEntity = (entity) => {
        console.log(entity)
        setIsEditing(true);
        setCategory({ id: entity.id, name: entity.name, department: entity.department, imageURL: entity.image });
        openModal();
    }

    return (
        <ReactCSSTransitionGroup
            transitionName="slide"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
                <AdminHeader />
                <section className="admin-categories">
                    <div className="admin__container container">
                        <div className="section__content">
                            <AdminTitle title={'Категории'} isEntity={true} openModal={openModal} />
                            <div className="admin-categories__grid grid__col-4">
                                {categories.map(item => (
                                    <div key={item.id} className="category-card">
                                        <div className="category-card__head">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="category-card__body d-flex">
                                            <div className="category-card__name">{item.name}</div>
                                        </div>
                                        <div className="category-card__btns">
                                            <button className="category-card__btn change-btn" onClick={() => setEditEntity(item)}>Изменить</button>
                                            <button onClick={() => removeCategory(item.id)} className="category-card__btn delete-btn">Удалить</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} style={customStyles}
                    closeTimeoutMS={300}>
                    <div className="user-add-modal">
                        <div className="user-add-modal__input-wrapper">
                            <div>
                                <label htmlFor="user-add-modal__name" className="user-add-modal__text">Имя:</label>
                                <input name="name" type="text" id="user-add-modal__name" value={category.name} onChange={handleCategory} />
                            </div>
                            <div>
                                <label htmlFor="user-add-modal__department" className="user-add-modal__text">Департамент:</label>
                                <select name="department" id="user-add-modal__department" value={category.department} onChange={(e) => handleSelectCategory(e.target.value)} >
                                    {
                                        departments.map((el) => (
                                            <option key={el.value} value={el.value}>{el.label}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="user-add-modal__name" className="user-add-modal__img">Фото:</label>
                                <input name="imageURL" type="text" id="user-add-modal__img" value={category.imageURL} onChange={handleCategory} />
                            </div>

                        </div>
                        <div className="user-add-modal__input-wrapper">
                            <button onClick={saveCategory}>Сохранить</button>
                        </div>
                    </div>
                </Modal>
        </ReactCSSTransitionGroup>
    );
}

export default AdminCategories;