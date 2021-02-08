import './orders-overview.css'

const OrdersOverview = () =>{
    return (
        <section class="orders">
            <div class="orders-content">
                <div class="orders-content__container">
                    <p class="orders__title section__title">Orders Overview</p>
                    <div class="grid__col-3 orders-overview">
                        <div class="orders-overview__item">
                            <p class="orders-overview__title">TOTAL ORDERS</p>
                            <p class="orders-overview__number">4</p>
                        </div>
                        <div class="orders-overview__item">
                            <p class="orders-overview__title">ORDERS MONTH</p>
                            <p class="orders-overview__number">4</p>
                        </div>
                        <div class="orders-overview__item">
                            <p class="orders-overview__title">ORDERS WEEK</p>
                            <p class="orders-overview__number">4</p>
                        </div>
                        <div class="orders-overview__item">
                            <p class="orders-overview__title">ORDERS TODAY</p>
                            <p class="orders-overview__number">4</p>
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