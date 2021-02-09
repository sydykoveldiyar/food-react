import * as axios from 'axios';
import { tablesAPI, getSalesOverview, getTopWaiters, getOrdersOverview, getMeals, mealsAPI, getCategoryOptions, usersAPI, dictionariesAPI} from '../../../components/api/api';

export const setTablesAction = () => {
    return async (dispatch) => {
        const { data: tables } = await axios.get(`${tablesAPI}`);
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

export const setMealsAction = () => {
    return async (dispatch) => {
        const { data: meals } = await axios.get(`${getMeals}`);
        return dispatch({ type: "SET_MEALS", meals })
    }
}

export const setCategoryOptionsAction = () => {
    return async (dispatch) => {
        const { data: categoryOptions } = await axios.get(`${getCategoryOptions}`);
        return dispatch({ type: "SET_CATEGORY_OPTIONS", categoryOptions })
    }
}

export const addMealAction = (entity) => {
    return async (dispatch) => {
        const { data: meal } = await axios.post(`${mealsAPI}`, entity);
        return dispatch({ type: "ADD_MEAL", meal })
    }
}

export const editMealAction = (entity) => {
    return async (dispatch) => {
        const { data: meal } = await axios.put(`${mealsAPI}/${entity.id}`, entity);
        return dispatch({ type: "EDIT_MEAL", meal })
    }
}

export const removeMealAction = (id) => {
    return async (dispatch) => {
        const { data: meal } = await axios.delete(`${mealsAPI}/${id}`);
        return dispatch({ type: "REMOVE_MEAL", meal })
    }
}

export const getUsersAction = () => {
    return async (dispatch) => {
        const { data: users } = await axios.get(`${usersAPI}`);
        return dispatch({ type: "SET_USERS", users })
    }
}

export const getUserRolesAction = () => {
    return async (dispatch) => {
        const { data: roles } = await axios.get(`${dictionariesAPI}/Roles`);
        return dispatch({ type: "SET_USER_ROLES", roles })
    }
}

export const saveUserAction = (entity) => {
    return async (dispatch) => {
        const { data: table } = await axios.post(`${usersAPI}`, entity);
        return dispatch({ type: "ADD_USER", table })
    }
}

export const removeUserAction = (id) => {
    return async (dispatch) => {
        const { data: user } = await axios.put(`${usersAPI}/DismissUser/${id}`);
        return dispatch({ type: "REMOVE_MEAL", user })
    }
}

export const saveTableAction = (entity) => {
    return async (dispatch) => {
        const { data: table } = await axios.post(`${tablesAPI}`, entity);
        return dispatch({ type: "ADD_TABLE", table })
    }
}

export const removeTableAction = (id) => {
    return async (dispatch) => {
        const { data: table } = await axios.delete(`${tablesAPI}/${id}`);
        return dispatch({ type: "REMOVE_TABLE", table })
    }
}
