import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Header = ({ auth }) => {

    const authButton = auth ? (
        <a className="btn btn-danger" href="/api/logout">Logout</a>
    ) : (
            <a className="btn btn-secondary" href="/api/auth/google">Login</a>
        );

    return (
        <header className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row bd-navbar" style={{ marginBottom: '40px' }}>
            <div className="navbar-nav-scroll">
                <ul className="navbar-nav bd-navbar-nav flex-row">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admins">Admins</Link>
                    </li>
                    <li className="nav-item">
                        {authButton}
                    </li>
                </ul>
            </div>
        </header>
    );
};

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps)(Header);
