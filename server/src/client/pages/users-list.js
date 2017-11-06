import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends PureComponent {

    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map((user) => {
            return <li key={user.id}>{user.name}</li>
        });
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                {this.renderUsers()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

// since we have not yet rendered our app on the backend
// we need to dispatch the action manually instead of using 
// the redux connect function
function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UserList)
};
