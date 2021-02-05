import './waiter.css'
import WaiterHeader from "./waiter-header/waiter-header";
import WaiterActiveOrders from "./waiter-active-orders/waiter-active-orders";

const Waiter = () =>{
    return (
        <div>
            <WaiterHeader />
            <WaiterActiveOrders />
        </div>
    );
}

export default Waiter;