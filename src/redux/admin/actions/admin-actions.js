import * as axios from 'axios';
import { getAdminTables } from '../../../components/api/api';

export const setTables = () => {
    return async (dispatch) => {
        const { data: tables } = await axios.get(`${getAdminTables}`);
        return dispatch({ type: "SET_TABLES", tables })
    }
}