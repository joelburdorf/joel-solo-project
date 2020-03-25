import { combineReducers } from 'redux';

// makes userList available in reduxStore to ADMINs
const userAdminAccessReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_USER_ADMIN':
            return action.payload;
        default:
            return state;
    }
};
// makes count of all surveys available in reduxStoreto ADMINs
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