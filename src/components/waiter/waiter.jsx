import React, { useState, useEffect } from "react";
import './waiter.css'
import WaiterHeader from "./waiter-header/waiter-header";
import WaiterOrderList from "./waiter-order-list/waiter-order-list";

const Waiter = () => {
    return (
        <div>
            <WaiterHeader />
            <WaiterOrderList />
        </div>
    );
}

export default Waiter;