import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/require-auth';
import { Helmet } from 'react-helmet';


class AdminsList extends PureComponent {

    componentWillMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map((admin) => {
            return <li key={admin.id}>{admin.name}</li>
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Helmet>
                        <title>Admins List</title>
                        <meta property="og:title" content="Admins List" />
                    </Helmet>
                    <h1>Admins</h1>
                    <ul>{this.renderAdmins()}</ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        admins: state.admins
    };
};

function loadData(store) {
    return store.dispatch(fetchAdmins());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsList))
};
