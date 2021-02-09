import "./admin-title.css";

const AdminTitle = (props) => {
    return (
        <div className="admin-title">
            <p className="admin-section__title">{props.title}</p>
            { props.isEntity ? <button className="admin-section__btn" onClick={props.openModal}>Добавить</button> : null }
        </div>
    );
}

export default AdminTitle;