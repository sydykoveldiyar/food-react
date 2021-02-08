import './top.css'

const Top = (props) => {

    const clLog = () => {
        console.log(props);
    }

    return (
        <div className="rating">
            <div className="rating__top-list">
                <div className="rating__tops">
                    <div className="rating__top-title">{props.title}</div>
                    <div className="rating__top-items">
                        <div className="grid__col-6">
                        {props.list.map(item => {
                            <div key={item.id} className="rating__top-item ">
                                <div className="rating__top-item-name">{item.name}</div>
                                <div className="rating__top-item-price">{item.value}</div>
                            </div>
                        })}
                        </div>
                    </div>
                    <button className="full-report-btn" onClick={clLog}>Полный отчет</button>
                </div>
                <div className="rating__item-chart"></div>
            </div>
        </div>
    );
}

export default Top;