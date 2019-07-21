import React, { Component } from 'react';
import axios from 'axios';

export default class Listing extends Component {

	constructor()
	{
		super();
		this.state={
			paquetes:[]
		}
	}

	componentDidMount()
	{
		axios.get('http://prueba.test/paquete')
		.then(response=>{
			this.setState({paquetes:response.data});
		});
	}

    render() {
        return (
        <div>
            <table className="table">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Nombre</th>
			      <th scope="col">Paquete</th>
			      <th scope="col">Created At</th>
			      <th scope="col">Updated At</th>
			    </tr>
			  </thead>
			  <tbody>
			  {
			  	this.state.paquetes.map(paquetes=>{
			  		return(
					    <tr>
					      <th scope="row">1</th>
					      <td>{paquetes.name}</td>
					      <td>{paquetes.paquete}</td>
					      <td>{paquetes.created_at}</td>
					      <td>{paquetes.updated_at}</td>
					    </tr>
			    	)
			    })
			   }
			  </tbody>
			</table>
        </div> 
            
        );
    }
}

