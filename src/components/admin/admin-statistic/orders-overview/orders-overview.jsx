import { useDispatch, useSelector } from 'react-redux';
import { setOrdersAction } from "../../../../redux/admin/actions/admin-actions";
import * as axios from 'axios';
import { getKitchenTop, getBarTop } from "../../../api/api";
import AdminTitle from "../../admin-title/admin-title";
import './orders-overview.css'
import { useEffect, useState } from 'react';
import Top from "../top/top";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const OrdersOverview = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setOrdersAction());
        getKitchenSums();
        getBarSums();
    }, []);

    const orders = useSelector(s => s.admin.orders);
    const [kitchenSums, setKitchenSums] = useState([]);
    const getKitchenSums = async () => {
        const { data: top } = await axios.get(`${getKitchenTop}`);
        setKitchenSums(top);
    }

    const [barSums, setBarSums] = useState([]);
    const getBarSums = async () => {
        const { data: top } = await axios.get(`${getBarTop}`);
        setBarSums(top);
    }

    return (
        <ReactCSSTransitionGroup
            transitionName="slide"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>

            <section class="orders">
                <div class="orders-content">
                    <div class="admin__container container section__content">
                        <p class="orders__title section__title">
                            <AdminTitle title={'Обзор заказов'} isEntity={false} />
                        </p>
                        <div class="grid__col-3 orders-overview">
                            <div class="orders-overview__item">
                                <p class="orders-overview__title">заказы</p>
                                <p class="orders-overview__number">{orders.totalOrders}</p>
                            </div>
                            <div class="orders-overview__item">
                                <p class="orders-overview__title">заказы за месяц</p>
                                <p class="orders-overview__number">{orders.totalOrdersMonth}</p>
                            </div>
                            <div class="orders-overview__item">
                                <p class="orders-overview__title">заказы за неделю</p>
                                <p class="orders-overview__number">{orders.totalOrdersWeek}</p>
                            </div>
                            <div class="orders-overview__item">
                                <p class="orders-overview__title">заказы за сегодня</p>
                                <p class="orders-overview__number">{orders.totalOrdersToday}</p>
                            </div>
                        </div>
                        <div class="orders__top-charts">
                            <div className>
                                <Top className="top-meals" title={'Топ кухни'} list={kitchenSums} />
                            </div>
                            <div className>
                                <Top className="top-meals" title={'Топ бара'} list={barSums} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ReactCSSTransitionGroup>
    );
}

export default OrdersOverview;