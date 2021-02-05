import './waiter-tables.css'

const WaiterTables = () => {
    return (
        <section class="tables">
        <div class="tables__container">
            <div class="tables__row grid__col-4">
                <button class="tables__title-btn tables__active">Активные</button>
                <button class="tables__title-btn tables__free">Свободные</button>
                <button class="tables__title-btn tables__booked">Бронь</button>
            </div>
            <div class="tables__row grid__col-4">
                <button class="tables__table-btn tables__active">1</button>
                <button class="tables__table-btn tables__free">2</button>
                <button class="tables__table-btn tables__booked">3</button>
                <button class="tables__table-btn tables__active">4</button>
                <button class="tables__table-btn tables__free">5</button>
                <button class="tables__table-btn tables__booked">6</button>
                <button class="tables__table-btn tables__active">7</button>
                <button class="tables__table-btn tables__free">8</button>
                <button class="tables__table-btn tables__booked">9</button>
                <button class="tables__table-btn tables__active">10</button>
                <button class="tables__table-btn tables__free">11</button>
                <button class="tables__table-btn tables__booked">12</button>
                <button class="tables__table-btn tables__active">13</button>
                <button class="tables__table-btn tables__free">14</button>
                <button class="tables__table-btn tables__booked">15</button>
            </div>
            <div class="tables__all">
                <div class="tables__all-btn">Все столы</div>
            </div>
        </div>
    </section>
    );
}

export default WaiterTables;