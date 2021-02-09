import './sales-overview.css';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setSalesAction, setTopWaitersAction } from "../../../../redux/admin/actions/admin-actions";
import { getTopMeals } from "../../../api/api";
import * as axios from 'axios';
import AdminTitle from "../../admin-title/admin-title";
import Top from "../../admin-statistic/top/top";
import chart1 from "../../../../static/images/chart1.png";
import chart2 from "../../../../static/images/chart2.png";
import chart3 from "../../../../static/images/chart3.png";
import chart4 from "../../../../static/images/chart4.png";
import chart5 from "../../../../static/images/chart5.png";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import chartwaiter from '../../../../static/images/chartwaiters.jpg'

const SalesOverview = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSalesAction());
        dispatch(setTopWaitersAction());
        getMealsIncome();
    }, []);

    const sales = useSelector(s => s.admin.sales);
    const topWaiters = useSelector(s => s.admin.topWaiters);

    const [topMeals, setTopMeals] = useState([]);
    const getMealsIncome = async () => {
        const { data : top } = await axios.get(`${getTopMeals}`);
        setTopMeals(top);
    }

    return (
        <ReactCSSTransitionGroup
                transitionName="slide"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
            <section className="sales">
                <div className="sales-content">
                    <div className="admin__container container section__content">
                        <AdminTitle title={'Обзор доходов'} isEntity={false} />
                        <div className="sales-overview">
                            <div className="sales-overview__item">
                                <div className="sales-overview__item-title">Общий доход</div>
                                <div className="sales-overview__item-value">{sales.totalSum} сом</div>
                                <img className="picture_revenue" src={chart1} alt="" />
                            </div>
                            <div className="sales-overview__item">
                                <div className="sales-overview__item-title">Доход за месяц</div>
                                <div className="sales-overview__item-value">{sales.totalSumMonth} сом</div>
                                <img className="picture_revenue" src={chart2} alt="" />
                            </div>
                            <div className="sales-overview__item">
                                <div className="sales-overview__item-title">Доход за неделю</div>
                                <div className="sales-overview__item-value">{sales.totalSumWeek} сом</div>
                                <img className="picture_revenue" src={chart3} alt="" />
                            </div>
                            <div className="sales-overview__item">
                                <div className="sales-overview__item-title">Доход за день</div>
                                <div className="sales-overview__item-value">{sales.totalSumToday} сом</div>
                                <img className="picture_revenue" src={chart4} alt="" />
                            </div>
                            <div className="sales-overview__item">
                                <div className="sales-overview__item-title">Средний доход</div>
                                <div className="sales-overview__item-value">{sales.totalSumAverage} сом</div>
                                <img className="picture_revenue" src={chart5} alt="" />
                            </div>
                        </div>
                        <div className="top-charts">
                            <Top className="top-meals" title={'Топ официантов'} list={topWaiters} />
                            <div className="chart">
                                <img src={chartwaiter} alt=""/>
                            </div>
                        </div>
                        <div className="top-charts">
                            <Top className="top-meals" title={'Топ дохода блюд'} list={topMeals} />
                            <div className="chart">
                                <img src={chartwaiter} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            </ReactCSSTransitionGroup>
    );
}

export default SalesOverview;