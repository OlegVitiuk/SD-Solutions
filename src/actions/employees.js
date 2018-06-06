import {GET_ALL_EMPLOYEES} from "constants/index";
import {api} from 'api/index';

export const getAllEmployees = () => dispatch =>{
    api.get('/clinics/getAll').then(response => {
        dispatch({type: GET_ALL_EMPLOYEES, clinics: response.data});
    }).catch(err => console.log(err));
}