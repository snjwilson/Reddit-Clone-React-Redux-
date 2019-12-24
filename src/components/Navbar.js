import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'


class Navbar extends Component {
	render() {
		    return (
		        <nav className="navbar navbar-light bg-light">
		            <Link className="navbar-brand navbar-logo" to="/">REDDIT CLONE</Link>
		        </nav>
    				)
	}    
}

export default Navbar;
