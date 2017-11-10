import { combineReducers } from 'redux';
import { reducer as authReducer } from './auth';
import { reducer as usersReducer } from './users';
import { reducer as adminsReducer } from './admins';

export default combineReducers({
    auth: authReducer,
    users: usersReducer,
    admins: adminsReducer
});
