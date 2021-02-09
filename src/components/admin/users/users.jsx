import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUsersAction, getUserRolesAction, removeUserAction, saveUserAction, editUserAction } from "../../../redux/admin/actions/admin-actions";
import Modal from "react-modal";
import './users.css'
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

const Users = () => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const users = useSelector(s => s.admin.users);
    const userRoles = useSelector(s => s.admin.userRoles)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => {
        setIsEditing(false);
        setUser({});
        setModalIsOpen(false);
    }
    useEffect(() => {
        dispatch(getUsersAction());
        dispatch(getUserRolesAction());
    }, []);
    useEffect(() => {
        if (userRoles.length) setUser({ ...user, role: userRoles[0].value });
    }, [userRoles]);
    const [user, setUser] = useState({});
    const handleUser = (e) => setUser({ ...user, [e.target.name]: e.target.value });
    const saveUser = () => {
        isEditing ? dispatch(editUserAction(user)) : dispatch(saveUserAction(user));
        closeModal();
    }
    const removeUser = (id) => {
        if (window.confirm("Хотите удалить пользователя?"))
            dispatch(removeUserAction(id));
    }
    const setEditEntity = (entity) => {
        setIsEditing(true);
        setUser({
            id: entity.id,
            firstName: entity.firstName,
            lastName: entity.lastName,
            middleName: entity.middleName,
            gender: entity.gender,
            dateBorn: entity.dateBorn,
            phoneNumber: entity.phoneNumber,
            login: entity.login,
            password: entity.password,
            role: entity.role,
            comment: entity.comment,
            imageURL: entity.imageURL
        });
        console.log(user);
        openModal();
    }
    return (
        <ReactCSSTransitionGroup
            transitionName="slide"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <>
                <section className="users-page">
                    <div className="admin__container container section__content">
                        <div className="users-page__top-box">
                            <AdminTitle title={'Пользователи'} isEntity={true} openModal={openModal} />
                            <div className="users-page__controls">
                                <div className="users-page__select-wrapper">
                                    <label className="users-page__select-label" htmlFor="users-page__select">По
                                ролям:</label>
                                    <div className="select">
                                        <select id="users-page__select" className="users-page__select">
                                            <option value="default">Все</option>
                                            <option value="1">Официанты</option>
                                            <option value="2">Повары</option>
                                            <option value="3">Бармены</option>
                                            <option value="4">Администраторы</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="users-page__table">
                            <thead>
                                <tr>
                                    <th>Полное имя</th>
                                    <th>Пол</th>
                                    <th>Дата рождения</th>
                                    <th>Номер телефона</th>
                                    <th>Логин</th>
                                    <th>Email</th>
                                    <th>Роль</th>
                                    <th colSpan="1">Операции</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.lastName + ' ' + item.firstName + ' ' + item.middleName}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.dateBorn}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.login}</td>
                                        <td>{item.email}</td>
                                        <td>{item.roleName}</td>
                                        <td>
                                            <div className="users-page__table-btn-wrapper">
                                                <button onClick={() => setEditEntity(item)} className="users-page__table-btn">
                                                    <svg height="325pt" viewBox="0 0 325 325.37515" width="325pt"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="m114.6875 284.675781-73.800781-73.800781 178.5-178.5 73.800781 73.800781zm-80.699219-60.800781 67.699219 67.699219-101.5 33.800781zm281.898438-140.300781-12.800781 12.800781-73.898438-73.898438 12.800781-12.800781c12.894531-12.902343 33.804688-12.902343 46.699219 0l27.199219 27.199219c12.800781 12.9375 12.800781 33.765625 0 46.699219zm0 0" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => removeUser(item.id)} className="users-page__table-btn">
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
                                    <div className="user-add-modal">
                                        <div className="user-add-modal__input-wrapper">
                                            <label htmlFor="user-add-modal__firstName" className="user-add-modal__text">Имя:</label>
                                            <input name="firstName" type="text" id="user-add-modal__firstName" required value={user.firstName} onChange={handleUser} />
                                        </div>
                                        <div className="user-add-modal__input-wrapper">
                                            <label htmlFor="user-add-modal__lastName" className="user-add-modal__text">Фамилия:</label>
                                            <input name="lastName" type="text" id="user-add-modal__lastName" required value={user.lastName} onChange={handleUser} />
                                        </div>
                                        <div className="user-add-modal__input-wrapper">
                                            <label htmlFor="user-add-modal__middleName" className="user-add-modal__text">Отчество:</label>
                                            <input name="middleName" type="text" id="user-add-modal__middleName" required value={user.middleName} onChange={handleUser} />
                                        </div>
                                        <div className="user-add-modal__input-wrapper">
                                            <label htmlFor="user-add-modal__gender" className="user-add-modal__text">Пол:</label>
                                            <input name="gender" type="text" id="user-add-modal__gender" required value={user.gender} onChange={handleUser} />
                                        </div>
                                        <div className="user-add-modal__input-wrapper">
                                            <label htmlFor="user-add-modal__dateBorn" className="user-add-modal__text">Дата рождения:</label>
                                            <input name="dateBorn" type="date" id="user-add-modal__dateBorn" required value={user.dateBorn} onChange={handleUser} />
                                        </div>
                                        <div className="user-add-modal__input-wrapper">
                                            <label htmlFor="user-add-modal__phoneNumber" className="user-add-modal__text">Номер телефона:</label>
                                            <input name="phoneNumber" type="text" id="user-add-modal__phoneNumber" required value={user.phoneNumber} onChange={handleUser} />
                                        </div>
                                        <div className="user-add-modal__input-wrapper">
                                            <label htmlFor="user-add-modal__login" className="user-add-modal__text">Логин:</label>
                                            <input name="login" type="text" id="user-add-modal__login" required value={user.login} onChange={handleUser} />
                                        </div>
                                        <div className="user-add-modal__input-wrapper">
                                            <label htmlFor="user-add-modal__password" className="user-add-modal__text">Пароль:</label>
                                            <input name="password" type="password" id="user-add-modal__password" required value={user.password} onChange={handleUser} />
                                        </div>
                                        <div className="user-add-modal__input-wrapper">
                                            <label htmlFor="user-add-modal__email" className="user-add-modal__text">Email:</label>
                                            <input name="email" type="email" id="user-add-modal__email" required value={user.email} onChange={handleUser} />
                                        </div>
                                        <div className="user-add-modal__input-wrapper">
                                            <label htmlFor="user-add-modal__roles" className="user-add-modal__text">Роль:</label>
                                            <select name="role" id="modal__roles" value={user.role} onChange={handleUser}>
                                                {userRoles.map(item => (
                                                    <option key={item.value} value={item.value}> {item.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="user-add-modal__input-wrapper">
                                            <label htmlFor="user-add-modal__comment" className="user-add-modal__text">Комментарий:</label>
                                            <textarea name="comment" id="user-add-modal__comment" value={user.comment} onChange={handleUser}></textarea>
                                        </div>
                                        <div className="user-add-modal__input-wrapper">
                                            <label htmlFor="user-add-modal__image" className="user-add-modal__text">Ссылка на картинку:</label>
                                            <input name="imageURL" type="email" id="user-add-modal__image" required value={user.email} onChange={handleUser} />
                                        </div>
                                        <div className="user-add-modal__input-wrapper">
                                            <button onClick={saveUser}>Сохранить</button>
                                        </div>
                                    </div>
                                </Modal>
                            </tbody>
                        </table>
                    </div>
                </section>
            </>
        </ReactCSSTransitionGroup>
    );
}

export default Users;