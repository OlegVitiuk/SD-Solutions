import {GET_ALL_EMPLOYEES} from "constants/index";
import {api} from 'api/index';

export const getAllEmployees = (pageNumber, sortConfig) => dispatch =>{
    api.get(`/employees?_page=${pageNumber}&_limit=10
    ${sortConfig ? `&_sort=${sortConfig.field}&_order=${sortConfig.type}` : ''}`)
        .then(response => {
        dispatch({type: GET_ALL_EMPLOYEES, employees: response.data});
    }).catch(err => console.log(err));
}