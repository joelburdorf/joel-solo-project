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
// makes count of all gender "other" available in reduxStoreto ADMINs
const totalOtherReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_OTHER':
            return action.payload;
        default:
            return state;
    }
};
// makes count of all gender "female" available in reduxStoreto ADMINs
const totalFemaleReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_FEMALE':
            return action.payload;
        default:
            return state;
    }
};
// makes count of all gender "male" available in reduxStoreto ADMINs
const totalMaleReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_MALE':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    userAdminAccessReducer,
    totalSurveyedReducer,
    totalOtherReducer,
    totalFemaleReducer,
    totalMaleReducer,
});