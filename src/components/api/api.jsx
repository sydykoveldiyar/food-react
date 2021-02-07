const baseAPI = "http://172.21.127.49:45456/api";

export const getToken = `${baseAPI}/Account/Login`;
export const getActiveOrders = `${baseAPI}/Waiter/activeOrders`;
export const getTables = `${baseAPI}/Waiter/tables`;
export const categoriesAPI = `${baseAPI}/categories`;
export const getCategoryMeals = `${baseAPI}/Waiter/categoryMeals`;
export const createOrderAPI = `${baseAPI}/Waiter/createOrder`;