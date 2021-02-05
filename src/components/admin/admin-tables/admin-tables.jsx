import '../admin-tables/admin-tables.css';
import img from '../../../static/images/table.png'

const AdminTables = () => {
    return (
        <section class="admin-tables">
        <div class="admin-tables__content grid__col-4">
            <div class="admin-tables__content-container container">
                <div class="admin-tables__content-head">
                    <p class="admin-tables__title section__title">Столы</p>
                    <button class="add-table-btn">Добавить</button>
                </div>
                <div class="table-cards">
                    <div class="table-card">
                        <div class="table-card-head-img">
                            <img src={img} alt="" />
                        </div>
                        <div class="table-card-info">
                            <div class="table-card-name">3 западный</div>
                            <input type="number" class="table-card-status" placeholder="Free"></input>
                        </div>
                        <div class="table-card-footer d-flex">
                            <button class="change-btn">Изменить</button>
                            <button class="delete-btn">Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default AdminTables;