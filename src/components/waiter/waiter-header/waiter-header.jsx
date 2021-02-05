import './waiter-header.css';

const WaiterHeader = () => {
    return (
        <header class="waiter-header">
            <div class="waiter-header__back-arrow">
                <a href=""><i class="fas fa-chevron-left"></i></a>
            </div>
            <p class="waiter-header__title">Список активных заказов</p>
        </header>
    );
}

export default WaiterHeader;