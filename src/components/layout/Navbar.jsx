import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.sass';

export default class Navbar extends Component {
    state = {
        isOpen: false
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <nav className="container is-fluid navbar-menu is-active is-dark">
                <div className="navbar-brand navbar-item">
                    <Link to="/about">
                        <h2 className="navbar-item">Jo Brimblecombe</h2>
                    </Link>
                </div>
                <section className="navbar-end">
                    <p className="navbar-end navbar-item">
                        <Link to="/about">About Me</Link>
                    </p>
                    <p className="navbar-end navbar-item">
                        <Link to="/books">Books</Link>
                    </p>
                    <p className="navbar-end navbar-item">
                        <Link to="/blog">Blog</Link>
                    </p>
                    <p className="navbar-end navbar-item">
                        <Link to="/newsletter">Newsletter</Link>
                    </p>
                </section>
            </nav>
        );
    }
}