import './admin-tables.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal"
import { setTablesAction, saveTableAction, removeTableAction } from "../../../redux/admin/actions/admin-actions";
import AdminHeader from "../admin-header/admin-header";
import AdminTitle from "../admin-title/admin-title";
import tableImg from '../../../static/images/table.png'
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

const AdminTables = () => {
    const dispatch = useDispatch()
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    useEffect(() => {
        dispatch(setTablesAction());
    }, []);
    const tables = useSelector(s => s.admin.tables);
    const [table, setTable] = useState({});
    const handleTable = (e) => setTable({ ...table, [e.target.name]: e.target.value });
    const saveTable = () => {
        dispatch(saveTableAction(table));
        closeModal();
    }
    const removeTable = (id) => {
        if (window.confirm("Хотите удалить стол?"))
            dispatch(removeTableAction(id));
    }

    return (
        <div>
            <AdminHeader />
            <section className="admin-tables">
                <div className="admin__container container">
                    <div className="section__content">
                        <AdminTitle title={'Столы'} isEntity={true} openModal={openModal}/>
                        <div className="admin-tables__grid grid__col-4">
                            {tables.map(item => (
                                <div key={item.id} className="table-card">
                                    <div className="table-card__head">
                                        <img src={tableImg} alt="" />
                                    </div>
                                    <div className="table-card__body d-flex">
                                        <div className="table-card__name">{item.name}</div>
                                        <div className="table-card__status">{item.status}</div>
                                    </div>
                                    <div className="table-card__btns">
                                        <button className="table-card__btn change-btn">Изменить</button>
                                        <button onClick={removeTable} className="table-card__btn delete-btn">Удалить</button>
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
                        <label htmlFor="user-add-modal__name" className="user-add-modal__text">Имя:</label>
                        <input name="name" type="text" id="user-add-modal__name" required onChange={handleTable} />
                    </div>
                    <div className="user-add-modal__input-wrapper">
                        <button onClick={saveTable}>Сохранить</button>
                    </div>
                </div>
            </Modal>
        </div>

    );
}

export default AdminTables;