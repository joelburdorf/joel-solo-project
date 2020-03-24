import { combineReducers } from 'redux';

const userAdminAccessReducer = (state = [], action) => {

    switch (action.type) {
        case 'GET_USER_ADMIN':
            return action.payload;
        default:
            return state;
    }
};

const totalSurveyedReducer = (state = [], action) => {

    switch (action.type) {
        case 'GET_TOTAL_SURVEYED_FROM_DB':
            return action.payload;
        default:
            return state;
    }
};



export default combineReducers({
    userAdminAccessReducer,
    totalSurveyedReducer,
});