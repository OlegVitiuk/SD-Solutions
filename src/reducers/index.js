import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import {employees} from "reducers/employees";

export default combineReducers({
    routing: routerReducer,
    employees
})
