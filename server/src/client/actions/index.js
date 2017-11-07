
export const FETCH_USER = 'fetch_users';

export const fetchUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/users');

    dispatch({
        type: FETCH_USER,
        payload: res
    });
};
