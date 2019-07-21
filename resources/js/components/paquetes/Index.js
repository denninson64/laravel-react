import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Add from "./Add";
import Listing from "./Listing";

export default class Index extends Component {
    render() {
        return (
        <div>
            <Router>
            	<div>
            		<hr />
            		<Link to="/paquetes" className="btn btn-primary">List</Link> &nbsp;
            		<Link to="/paquetes/Add" className="btn btn-primary">Add</Link>
            		<Route exact path="/paquetes" component={ Listing } />
            		<Route exact path="/paquetes/Add" component={ Add } />
            	</div>
            </Router>
        </div> 
            
        );
    }
}

