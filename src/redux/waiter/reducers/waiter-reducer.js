const initialState = {
    activeOrders: [],
    tables: []
}

export const waiterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ACTIVE_ORDERS":
            return { ...state, activeOrders: action.activeOrders }
        case "SET_TABLES":
            return {...state, tables: action.tables};
        default:
            return state
    }
}