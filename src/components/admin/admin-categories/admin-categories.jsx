import './admin-categories.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal"
import {
    setCategoriesAction,
    saveCategoryAction,
    removeCategoryAction,
    setDepartmentsAction
} from "../../../redux/admin/actions/admin-actions";
import AdminHeader from "../admin-header/admin-header";
import AdminTitle from "../admin-title/admin-title";

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
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const categories = useSelector(s => s.admin.categories);
    const departments = useSelector(s => s.admin.departments);
    const [category, setCategory] = useState({});

    useEffect(() => {
        dispatch(setCategoriesAction());
        dispatch(setDepartmentsAction())
    }, []);

    useEffect(() => {
        if (categories.length) setCategory({ ...category, categoryId: categories[0].id })
    }, [categories])


    const handleCategory = (e) => setCategory({ ...category, [e.target.name]: e.target.value });

    function handleSelectCategory(departmentId) {
        setCategory({ ...category, department: departmentId })
    }
    const saveCategory = () => {
        dispatch(saveCategoryAction(category));
        closeModal();
    }
    const removeCategory = (id) => {
        if (window.confirm("Хотите удалить категорию?"))
            dispatch(removeCategoryAction(id));
    }

    return (
        <div>
            <AdminHeader />
            <section className="admin-categories">
                <div className="admin__container container">
                    <div className="section__content">
                        <AdminTitle title={'Категории'} isEntity={true} openModal={openModal}/>
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
                                        <button className="category-card__btn change-btn">Изменить</button>
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
                            <input name="name" type="text" id="user-add-modal__name" required onChange={handleCategory} />
                        </div>
                        <div>
                            <label htmlFor="user-add-modal__department" className="user-add-modal__text">Департамент:</label>
                            <select name="department" id="user-add-modal__department" required onChange={(e) => handleSelectCategory(e.target.department)} >
                                {
                                    departments.map((el) => (
                                        <option key={el.value} department={el.value}>{el.label}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="user-add-modal__name" className="user-add-modal__img">Фото:</label>
                            <input name="imageURL" type="text" id="user-add-modal__img" required onChange={handleCategory} />
                        </div>

                    </div>
                    <div className="user-add-modal__input-wrapper">
                        <button onClick={saveCategory}>Сохранить</button>
                    </div>
                </div>
            </Modal>
        </div>

    );
}

export default AdminCategories;