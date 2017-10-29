import { FETCH_USER } from '../actions';

export const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload.data;

        default:
            return state;
    }
}
