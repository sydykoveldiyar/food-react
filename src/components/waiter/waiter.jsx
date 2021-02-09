import './waiter.css'
import WaiterActiveOrders from "./waiter-active-orders/waiter-active-orders";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Waiter = () => {
    return (
        <div className="waiter-content">
            <ReactCSSTransitionGroup
                transitionName="slide"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                <WaiterActiveOrders />
            </ReactCSSTransitionGroup>
        </div>
    );
}

export default Waiter;