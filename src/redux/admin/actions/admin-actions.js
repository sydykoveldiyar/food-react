import * as axios from 'axios';
import { getAdminTables, getSalesOverview, getTopMeals, getTopWaiters } from '../../../components/api/api';

export const setTablesAction = () => {
    return async (dispatch) => {
        const { data: tables } = await axios.get(`${getAdminTables}`);
        return dispatch({ type: "SET_TABLES", tables })
    }
}

export const setSalesAction = () => {
    return async (dispatch) => {
        const { data: sales } = await axios.get(`${getSalesOverview}`);
        return dispatch({ type: "SET_SALES_OVERVIEW", sales })
    }
}

export const setTopMealsAction = () => {
    return async (dispatch) => {
        const { data: meals } = await axios.get(`${getTopMeals}`);
        return dispatch({ type: "SET_TOP_MEALS", meals })
    }
}

export const setTopWaitersAction = () => {
    return async (dispatch) => {
        const { data: waiters } = await axios.get(`${getTopWaiters}`);
        return dispatch({ type: "SET_TOP_WAITERS", waiters })
    }
}