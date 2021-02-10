const initialState = {
    activeOrders: [],
    tables: [],
    filteredTables: [],
    categories: [],
    categoryMeals: [],
    basket: [],
    cheque: []
}

export const waiterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ACTIVE_ORDERS":
            return { ...state, activeOrders: action.activeOrders }
        case "SET_TABLES":
            return { ...state, tables: action.tables };
        case "SET_CATEGORIES":
            return { ...state, categories: action.categories };
        case "SET_MEALS":
            return { ...state, categoryMeals: action.categoryMeals };
        case "SET_BASKET":
            return { ...state, basket: action.basket };
        case "CREATE_ORDER":
            return { ...state, activeOrders: action.order };
        case "CLOSE_CHEQUE":
            return {...state, cheque: action.cheque}
        case "FILTER_TABLES":
            return {...state, filteredTables: action.filtered }
        case "SET_QUANTITY":
            return {...state, categoryMeals: state.categoryMeals.map(el => el.id === action.entity.id ? action.entity : el)};
        default:
            return state
    }
}