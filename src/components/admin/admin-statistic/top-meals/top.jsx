import './top-meals.css'

const Top = (props) => {
    return (
        <div className="rating">
            <div className="rating__top-list">
                <div className="rating__tops">
                    <div className="rating__top-title">{props.title}</div>
                    <div className="rating__top-items">
                        {props.list.map(item => {
                            <div className="rating__top-item grid__col-6">
                                <div className="rating__top-item-name">{item.name}</div>
                                <div className="rating__top-item-price">{item.value}</div>
                            </div>
                        })}
                    </div>
                    <button className="full-report-btn">Полный отчет</button>
                </div>
                <div className="rating__item-chart"></div>
            </div>
        </div>
    );
}

export default Top;