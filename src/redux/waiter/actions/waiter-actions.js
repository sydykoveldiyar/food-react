import * as axios from 'axios';
import { getActiveOrders, getTables } from '../../../components/api/api';

export const setActiveOrders = () => {
    return async (dispatch) => {
        const {data: activeOrders} = await axios.get(`${getActiveOrders}`);
        return dispatch({type: "SET_ACTIVE_ORDERS", activeOrders})
    }
}

export const setTables = () => {
    return async (dispatch) => {
        const {data: tables} = await axios.get(`${getTables}`);
        return dispatch({type: "SET_TABLES", tables})
    }
}