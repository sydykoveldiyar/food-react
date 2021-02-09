const baseAPI = "http://172.21.127.49:45455/api";

export const getToken = `${baseAPI}/Account/Login`;
export const getActiveOrders = `${baseAPI}/Waiter/activeOrders`;
export const getTables = `${baseAPI}/Waiter/tables`;
export const getCategoryMeals = `${baseAPI}/Waiter/categoryMeals`;
export const closeChequeAPI = `${baseAPI}/Waiter/closeCheque`;
export const categoriesAPI = `${baseAPI}/categories`;
export const createOrderAPI = `${baseAPI}/Waiter/createOrder`;

export const getAdminTables = `${baseAPI}/Tables`;
export const getSalesOverview = `${baseAPI}/Statistic/TotalSums`;
export const getTopMeals = `${baseAPI}/Statistic/MealsIncome`;
export const getAllMeals = `${baseAPI}/Admin/getMeals`;
export const changeAllMeals = `${baseAPI}/Meals`;

export const Meals = `${baseAPI}/Meals`;