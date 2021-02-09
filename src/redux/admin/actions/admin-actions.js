import * as axios from 'axios';
import { getAdminTables, getSalesOverview, getTopWaiters, getOrdersOverview, getAllMeals, mealsAPI, getCategoriesOptions} from '../../../components/api/api';

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

export const setTopWaitersAction = () => {
    return async (dispatch) => {
        const { data: waiters } = await axios.get(`${getTopWaiters}`);
        return dispatch({ type: "SET_TOP_WAITERS", waiters })
    }
}

export const setOrdersAction = () => {
    return async (dispatch) => {
        const { data: orders } = await axios.get(`${getOrdersOverview}`);
        return dispatch({ type: "SET_ORDERS_OVERVIEW", orders })
    }
}

export const setAllMealsAction = () => {
    return async (dispatch) => {
        const { data: allMeals } = await axios.get(`${getAllMeals}`);
        return dispatch({ type: "SET_ALL_MEALS", allMeals })
    }
}

export const changeAllMealsAction = (id, changedMeal) => {
    return async (dispatch) => {
        const { data: changedAllMeals } = await axios.put(`${mealsAPI}/${id}`, changedMeal);
        return dispatch({ type: "SET_CHANGE_ALL_MEALS", changedAllMeals })
    }
}
export const setCategoriesOptionsAction = () => {
    return async (dispatch) => {
        const { data: categoriesOptions } = await axios.get(`${getCategoriesOptions}`);
        return dispatch({ type: "SET_CATEGORIES_OPTIONS", categoriesOptions })
    }
}
export const addNewMealAction = (newMeal) => {
    return async (dispatch) => {
        const { data: addedMeals } = await axios.post(`${mealsAPI}`, newMeal);
        return dispatch({ type: "SET_ADD_MEAL", addedMeals })
    }
}

