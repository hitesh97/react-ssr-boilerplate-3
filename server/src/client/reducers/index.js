import { combineReducers } from 'redux';
import { reducer as authReducer } from './auth';
import { reducer as usersReducer } from './users';

export default combineReducers({
    auth: authReducer,
    users: usersReducer
});
