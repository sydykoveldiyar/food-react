const initialState = {
    tables: [],
    sales: [],
    topMeals: [],
    topWaiters: [],
    orders: [],
    cookedMeals: [],
    meals: [],
    categoryOptions: [],
    users: [],
    userRoles: [],
    categories: [],
    departments: []
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
            return {...state, topWaiters: action.waiters}
        case ("SET_CATEGORY_OPTIONS"):
            return {...state, categoryOptions: action.categoryOptions}
        case ("SET_MEALS"):
            return {...state, meals: action.meals}
        case ("EDIT_MEAL"):
            return {...state, meals: state.meals.map(el => el.id === action.meal.id ? action.meal : el)};
        case ("REMOVE_MEAL"):
            return {...state, meals: state.meals.filter(el => el.id !== action.meal.id)};
        case ("SET_USERS"):
            return { ...state, users: action.users };
        case ("SET_USER_ROLES"):
            return { ...state, userRoles: action.roles };
        case ("ADD_USER"):
            return {...state, users: [...state.users, action.user]}  
        case ("REMOVE_USER"):
            return {...state, users: state.users.filter(el => el.id !== action.user.id)};
        case ("ADD_TABLE"):
            return {...state, tables: [...state.tables, action.table]};
        case ("REMOVE_TABLE"):
            return {...state, tables: state.tables.filter(el => el.id !== action.table.id)};
        case "SET_CATEGORIES":
            return { ...state, categories: action.categories }
        case ("ADD_CATEGORY"):
            return {...state, categories: [...state.categories, action.category]};
        case ("REMOVE_CATEGORY"):
            return {...state, categories: state.categories.filter(el => el.id !== action.category.id)};
        case ("SET_DEPARTMENTS"):
            return { ...state, departments: action.departments };
        default:
            return state
    }
}