import * as axios from 'axios';
import { getActiveOrders, getTables, categoriesAPI, getCategoryMeals, createOrderAPI, closeChequeAPI } from '../../../components/api/api';

export const setActiveOrdersAction = () => {
    return async (dispatch) => {
        const { data: activeOrders } = await axios.get(`${getActiveOrders}`);
        return dispatch({ type: "SET_ACTIVE_ORDERS", activeOrders })
    }
}

export const setTablesAction = () => {
    return async (dispatch) => {
        const { data: tables } = await axios.get(`${getTables}`);
        return dispatch({ type: "SET_TABLES", tables })
    }
}

export const setCategoriesAction = () => {
    return async (dispatch) => {
        const { data: categories } = await axios.get(`${categoriesAPI}`);
        return dispatch({ type: "SET_CATEGORIES", categories })
    }
}

export const setMealsAction = (id) => {
    return async (dispatch) => {
        const { data: categoryMeals } = await axios.post(`${getCategoryMeals}?categoryId=${id}`);
        return dispatch({ type: "SET_MEALS", categoryMeals })
    }
}

export const setBasketAction = (basket) => {
    return async (dispatch) => {
        return dispatch({ type: "SET_BASKET", basket })
    }
}

export const createOrderAction = (order) => {
    return async (dispatch) => {
        const { data: result } = await axios.post(`${createOrderAPI}`, order);
        return dispatch({ type: "CREATE_ORDER", result })
    }
}

export const closeChequeAction = (orderId) => {
    return async (dispatch) => {
        const { data: cheque } = await axios.post(`${closeChequeAPI}?orderId=${orderId}`);
        return dispatch({ type: "CLOSE_CHEQUE", cheque })
    }
}

export const filterTablesAction = (filtered) => {
    return async (dispatch) => {
        return dispatch({ type: "FILTER_TABLES", filtered })
    }
}