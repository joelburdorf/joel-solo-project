import Axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* adminAccessSaga() {
    yield takeEvery('FETCH_ADMIN_USERS', fetchUsers);
    yield takeEvery('DELETE_ADMIN_USERS', deleteUsers);
    yield takeEvery('FETCH_TOTAL_SURVEYED', fetchTotalSurveyed);
}
// GET to DB to get all users and add them to reduxStore
function* fetchUsers() {
    const elementResponse = yield Axios.get('/api/admin/users');
    yield put({ type: 'GET_USER_ADMIN', payload: elementResponse.data })
}
// GET to DB to get count of all surveyed and add number to reduxStore
function* fetchTotalSurveyed() {
    const elementResponse = yield Axios.get('/api/admin/total_surveyed');
    yield put({ type: 'GET_TOTAL_SURVEYED_FROM_DB', payload: elementResponse.data })
}
// DELETE users from the user table in the DB, then call another GET to update list
function* deleteUsers(id) {
    try {
        yield Axios.delete(`/api/admin/deleteUser/${id.payload}`);
        yield put({ type: 'FETCH_ADMIN_USERS' })
    } catch (error) {
        console.log(error);
    }
}

export default adminAccessSaga;




