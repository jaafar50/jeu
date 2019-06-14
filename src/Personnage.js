import React from 'react';
import './Personnage.css';
import Frapper from './Frapper';
import Dormir from './Dormir';

class Personnage extends React.Component{

	constructor(props){
		super(props);
	}



	render(){
		return (
		<div>
			<div><b>{this.props.nom}</b></div> 
			<div><b>{this.props.prenom}</b></div>
			<div>{this.props.force}</div>
			<div>{this.props.vie}</div>
			<br/>
			<Frapper onClick={this.props.onClick}/>
			<br/>
			<Dormir onClick={this.props.onClick}/>
		</div>



		);

	}

}

export default Personnage;