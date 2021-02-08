import './sales-overview.css';

const SalesOverview = () => {

    

    return (
        <section class="sales">
        <div class="sales-content">
            <div class="sales-content__container container">
                <p class="sales__title section__title">Sales Overview</p>
                <div class="sales-overview">
                    <div class="sales-overview__item">
                        <div class="sales-overview__item-title">TOTAL REVENUE</div>
                        <div class="sales-overview__item-value">3860 сом</div>
                        <img class="picture_revenue" src="./images/chart1.png" alt="" />
                    </div>
                    <div class="sales-overview__item">
                        <div class="sales-overview__item-title">REVENUE MONTH</div>
                        <div class="sales-overview__item-value">3860 сом</div>
                        <img class="picture_revenue" src="./images/chart2.png" alt="" />
                    </div>
                    <div class="sales-overview__item">
                        <div class="sales-overview__item-title">REVENUE WEEK</div>
                        <div class="sales-overview__item-value">1530 сом</div>
                        <img class="picture_revenue" src="./images/chart3.png" alt="" />
                    </div>
                    <div class="sales-overview__item">
                        <div class="sales-overview__item-title">REVENUE TODAY</div>
                        <div class="sales-overview__item-value">0 сом</div>
                        <img class="picture_revenue" src="./images/chart4.png" alt="" />
                    </div>
                    <div class="sales-overview__item">
                        <div class="sales-overview__item-title">REVENUE AVERAGE</div>
                        <div class="sales-overview__item-value">965 сом</div>
                        <img class="picture_revenue" src="./images/chart5.png" alt="" />
                    </div>
                </div>
                <div class="sales-rating">
                    <div class="sales-rating__top-list">
                        <div class="sales-rating__tops">
                            <div class="sales-rating__top-title">Top Meals</div>
                            <div class="sales-rating__top-items">
                                <div class="sales-rating__top-item grid__col-6">
                                    <div class="sales-rating__top-item-name">Оливье</div>
                                    <div class="sales-rating__top-item-price">470сом</div>
                                </div>
                                <div class="sales-rating__top-item grid__col-6">
                                    <div class="sales-rating__top-item-name">Сырники домашние</div>
                                    <div class="sales-rating__top-item-price">350 сом</div>
                                </div>
                                <div class="sales-rating__top-item grid__col-6">
                                    <div class="sales-rating__top-item-name">Панкейки</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                                <div class="sales-rating__top-item grid__col-6">
                                    <div class="sales-rating__top-item-name">Ассорти салат</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                                <div class="sales-rating__top-item grid__col-6">
                                    <div class="sales-rating__top-item-name">Фруктовый чай</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                                <div class="sales-rating__top-item grid__col-6">
                                    <div class="sales-rating__top-item-name">Сэндвич с беконом</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                                <div class="sales-rating__top-item grid__col-6">
                                    <div class="sales-rating__top-item-name">Блины с клубникой</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                                <div class="sales-rating__top-item grid__col-6">
                                    <div class="sales-rating__top-item-name">Мясо по-французски</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                                <div class="sales-rating__top-item grid__col-6">
                                    <div class="sales-rating__top-item-name">Цезарь</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                                <div class="sales-rating__top-item grid__col-6">
                                    <div class="sales-rating__top-item-name">Круассаны с беконом</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                            </div>
                            <button class="full-report-btn">Full report</button>
                        </div>
                        <div class="sales-rating__item-chart"></div>
                    </div>
                    <div class="sales-rating__top-list">
                        <div class="sales-rating__tops">
                            <div class="sales-rating__top-title">Top Waiters</div>
                            <div class="sales-rating__top-items">
                                <div class="sales-rating__top-item">
                                    <div class="sales-rating__top-item-name">#Официант 1</div>
                                    <div class="sales-rating__top-item-price">6000 сом</div>
                                </div>
                                <div class="sales-rating__top-item">
                                    <div class="sales-rating__top-item-name">#Официант 2</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                                <div class="sales-rating__top-item">
                                    <div class="sales-rating__top-item-name">#Официант 3</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                                <div class="sales-rating__top-item">
                                    <div class="sales-rating__top-item-name">#Официант 4</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                                <div class="sales-rating__top-item">
                                    <div class="sales-rating__top-item-name">#Официант 5</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                                <div class="sales-rating__top-item">
                                    <div class="sales-rating__top-item-name">#Официант 6</div>
                                    <div class="sales-rating__top-item-price">0 сом</div>
                                </div>
                            </div>
                            <button class="full-report-btn">Full report</button>
                        </div>
                        <div class="sales-rating__item-chart"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default SalesOverview;