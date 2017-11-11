import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';


class UsersList extends PureComponent {

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
            <div className="row">
                <div className="col-md-12">
                    <Helmet>
                        <title>Users List</title>
                        <meta property="og:title" content="Users List" />
                    </Helmet>
                    <h1>Users</h1>
                    <ul>{this.renderUsers()}</ul>
                </div>
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
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
};
