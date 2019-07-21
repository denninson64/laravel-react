import React, { Component } from 'react';
import axios from 'axios';

export default class Add extends Component {

		constructor()
	{
		super();
		this.onChangePaquetesName=this.onChangePaquetesName.bind(this);
		this.onChangePaquetesPaquete=this.onChangePaquetesPaquete.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
		this.state={
			name:'',
			paquete:''
		}
	}

	onChangePaquetesName(e){
		this.setState({
			name:e.target.value
		});

	}
	onChangePaquetesPaquete(e){
		this.setState({
			paquete:e.target.value
		});

	}

	onSubmit(e){
		e.preventDefault();
		const paquete = {
			name : this.state.name,
			paquete : this.state.paquete
		}

		axios.post('http://prueba.test/paquete/store',paquete)
		.then(res=>console.log(res.data));
	}

	
    render() {
        return (
        <div>
            <form onSubmit={this.onSubmit}>
			  <div class="form-group">
			    <label for="name">Nombre</label>
			    <input type="text" 
			    class="form-control" 
			    id="name" 
			    value={this.state.name}
			    onChange={this.onChangePaquetesName}
			    placeholder="Enter name" />
			  </div>
			  <div class="form-group">
			    <label for="paquete">Paquete</label>
			    <input type="text" 
			    class="form-control" 
			    id="paquete"
			    value={this.state.paquete}
			    onChange={this.onChangePaquetesPaquete} 
			    placeholder="Enter bundle" />
			  </div>
			  
			  <button type="submit" class="btn btn-primary">Submit</button>
			</form>
        </div> 
            
        );
    }
}

