import * as axios from 'axios';
import { getActiveOrders, getTables, categoriesAPI, getCategoryMeals } from '../../../components/api/api';

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

export const setCategories = () => {
    return async (dispatch) => {
        const {data: categories} = await axios.get(`${categoriesAPI}`);
        return dispatch({type: "SET_CATEGORIES", categories})
    }
}

export const setMeals = (id) => {
    return async (dispatch) => {
        const {data: categoryMeals} = await axios.post(`${getCategoryMeals}?categoryId=${id}`);
        return dispatch({type: "SET_MEALS", categoryMeals})
    }
}

export const setBasket = (basket) => {
    return async (dispatch) => {
        return dispatch({type: "SET_BASKET", basket})
    }
}