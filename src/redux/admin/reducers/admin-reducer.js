const initialState = {
    tables: [],
    sales: [],
    topMeals: [],
    allMeals:[],
}

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TABLES":
            return { ...state, tables: action.tables }
        case ("SET_SALES_OVERVIEW") :
            return {...state, sales: action.sales}
        case ("SET_TOP_MEALS"):
            return {...state, topMeals: action.meals}
        case ("SET_ALL_MEALS"):
            return {...state, allMeals: action.allMeals}
        default:
            return state
    }
}