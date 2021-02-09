import { useDispatch, useSelector } from 'react-redux';
import { setOrdersAction } from "../../../../redux/admin/actions/admin-actions";
import AdminTitle from "../../admin-title/admin-title";
import './orders-overview.css'
import { useEffect } from 'react';

const OrdersOverview = () =>{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setOrdersAction());
    }, []);

    const orders = useSelector(s => s.admin.orders);

    return (
        <section class="orders">
            <div class="orders-content">
                <div class="admin__container container section__content">
                    <p class="orders__title section__title">
                        <AdminTitle title={'Обзор заказов'} isEntity={false}/>
                    </p>
                    <div class="grid__col-3 orders-overview">
                        <div class="orders-overview__item">
                            <p class="orders-overview__title">TOTAL ORDERS</p>
                            <p class="orders-overview__number">{orders.totalOrders}</p>
                        </div>
                        <div class="orders-overview__item">
                            <p class="orders-overview__title">ORDERS MONTH</p>
                            <p class="orders-overview__number">{orders.totalOrdersMonth}</p>
                        </div>
                        <div class="orders-overview__item">
                            <p class="orders-overview__title">ORDERS WEEK</p>
                            <p class="orders-overview__number">{orders.totalOrdersWeek}</p>
                        </div>
                        <div class="orders-overview__item">
                            <p class="orders-overview__title">ORDERS TODAY</p>
                            <p class="orders-overview__number">{orders.totalOrdersToday}</p>
                        </div>
                    </div>
                    <div class="orders-rating">
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OrdersOverview;