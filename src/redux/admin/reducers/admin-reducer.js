const initialState = {
    tables: [],
    sales: []
}

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TABLES":
            return { ...state, tables: action.tables }
        case ("SET_SALES_OVERVIEW") :
            return {...state, sales: action.sales}
        default:
            return state
    }
}