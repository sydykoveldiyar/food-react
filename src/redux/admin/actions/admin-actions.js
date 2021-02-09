import * as axios from 'axios';
import { getAdminTables, getSalesOverview, getTopMeals, getAllMeals } from '../../../components/api/api';

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

export const setTopMeals = () => {
    return async (dispatch) => {
        const { data: meals } = await axios.get(`${getTopMeals}`);
        return dispatch({ type: "SET_TOP_MEALS", meals })
    }
}

export const setAllMeals = () => {
    return async (dispatch) => {
        const { data: allMeals } = await axios.get(`${getAllMeals}`);
        return dispatch({ type: "SET_ALL_MEALS", allMeals })
    }
}