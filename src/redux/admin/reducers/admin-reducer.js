const initialState = {
    tables: [],
    sales: [],
    topMeals: [],
    topWaiters: [],
    orders: []
}

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TABLES":
            return { ...state, tables: action.tables }
        case ("SET_SALES_OVERVIEW") :
            return {...state, sales: action.sales }
        case ("SET_ORDERS_OVERVIEW") :
            return {...state, orders: action.orders }
        case ("SET_TOP_MEALS"):
            return {...state, topMeals: action.meals }
        case ("SET_TOP_WAITERS"):
            return {...state, topWaiters: action.waiters};
        default:
            return state
    }
}