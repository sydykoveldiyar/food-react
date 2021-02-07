import './waiter.css'
import WaiterHeader from "./waiter-header/waiter-header";
import WaiterActiveOrders from "./waiter-active-orders/waiter-active-orders";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Waiter = () =>{
    return (
        <div>
            <ReactCSSTransitionGroup
                transitionName="slide"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                <WaiterHeader />
                <WaiterActiveOrders />
            </ReactCSSTransitionGroup>

        </div>
    );
}

export default Waiter;