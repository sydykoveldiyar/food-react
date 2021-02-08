import './top.css'

const Top = (props) => {

    return (
        <div className="top">
            <p className="top-title">{props.title}</p>
            <div className="top-items">
                {props.list.map(item => (
                    <div className="top-list__item">
                        <div className="top-list__item-name">{item.name}</div>
                        <div className="top-list__item-value">{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Top;