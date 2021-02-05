import './waiter-active-orders.css'

const WaiterActiveOrders = () => {
    return(
        <section class="order-list">
        <div class="order-list__btn">
            <button class="order-list__add-order-btn">Сделать новый заказ
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.0533447" width="25" height="25" rx="12.5" fill="#B80505" />
                    <path
                        d="M12.732 11.808H16.728V13.284H12.732V17.28H11.256V13.284H7.26V11.808H11.256V7.812H12.732V11.808Z"
                        fill="#FFFEFE" />
                </svg>
            </button>
        </div>
        <h2 class="order-list__title">Лист активных заказов</h2>
        <div class="order-list__orders">
            <div class="order-list__order">
                <p class="order-list__item-name"><a href="">Заказ #1</a></p>
                <p class="order-list__item-status status-success">Готово</p>
            </div>
            <div class="order-list__order">
                <p class="order-list__item-name"><a href="">Заказ #2</a></p>
                <p class="order-list__item-status status-primary">В ПРОЦЕССЕ</p>
            </div>
            <div class="order-list__order">
                <p class="order-list__item-name"><a href="">Заказ #3</a></p>
                <p class="order-list__item-status status-danger">НЕ ГОТОВО</p>
            </div>
            <div class="order-list__order">
                <p class="order-list__item-name"><a href="">Заказ #4</a></p>
                <p class="order-list__item-status status-success">Готово</p>
            </div>
        </div>
    </section>
    );
}

export default WaiterActiveOrders;