import {GET_ALL_EMPLOYEES} from 'constants/index';

export const employees  = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_EMPLOYEES:
            return {

            }
        default:
            return state
    }
}