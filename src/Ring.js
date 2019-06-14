import React from 'react';
import Personnage from './Personnage';
import Dormir from './Dormir';
import Frapper from './Frapper';

class Ring extends React.Component{

	constructor(props){
		super(props);
		this.state={
			nom1 : "San",
			nom2 : "San",
			prenom1: "Goku",
			prenom2: "Gohan",
			force1: 80,
			force2: 40,
			vie1: 400,
			vie2: 800,
		}
		this.handleFrapper2=this.handleFrapper2.bind(this);
		this.handleFrapper1=this.handleFrapper1.bind(this);
		this.handleDormir1=this.handleDormir1.bind(this);
		this.handleDormir2=this.handleDormir2.bind(this);
	}

	handleFrapper2(){
		let stateCopy = JSON.parse(JSON.stringify(this.state))
   		//stateCopy.vie2 = {state.vie2 - state.force1}
   		//stateCopy[0].vie2= {30}
		this.setState({
			nom1 : stateCopy.nom1,
			nom2 : stateCopy.nom2,
			prenom1: stateCopy.prenom1,
			prenom2: stateCopy.prenom2,
			force1: stateCopy.force1,
			force2: stateCopy.force2,
			vie1: stateCopy.vie1,
			vie2: stateCopy.vie2,
		})
	}

	handleFrapper1(){
		let stateCopy = JSON.parse(JSON.stringify(this.state))
   		//stateCopy.vie1 = {state.vie1 - state.force2}
   		//stateCopy.vie1 = {37}
		this.setState({
			nom1 : stateCopy.nom1,
			nom2 : stateCopy.nom2,
			prenom1: stateCopy.prenom1,
			prenom2: stateCopy.prenom2,
			force1: stateCopy.force1,
			force2: stateCopy.force2,
			vie1: stateCopy.vie1,
			vie2: stateCopy.vie2,
		})
	}

	handleDormir2(){
		let stateCopy = JSON.parse(JSON.stringify(this.state))
   		//stateCopy.vie2 = {state.vie2 + 10}
   		//stateCopy.vie2 = {60}
		this.setState({
			nom1 : stateCopy.nom1,
			nom2 : stateCopy.nom2,
			prenom1: stateCopy.prenom1,
			prenom2: stateCopy.prenom2,
			force1: stateCopy.force1,
			force2: stateCopy.force2,
			vie1: stateCopy.vie1,
			vie2: stateCopy.vie2,
		})
	}

	handleDormir1(){
		let stateCopy = JSON.parse(JSON.stringify(this.state))
   		//stateCopy.vie1 = {state.vie1 + 10}
   		//stateCopy.vie1 = {90}
		this.setState({
			nom1 : stateCopy.nom1,
			nom2 : stateCopy.nom2,
			prenom1: stateCopy.prenom1,
			prenom2: stateCopy.prenom2,
			force1: stateCopy.force1,
			force2: stateCopy.force2,
			vie1: stateCopy.vie1,
			vie2: stateCopy.vie2,
		})
	}

	render(){
		return (
	

    <div class="grid-container">
    <center>
        <div className="Perso-1" id="perso1">
        	<Personnage nom={this.state.nom1} prenom={this.state.prenom1} force={this.state.force1} vie={this.state.vie1} />
        	<br/>
        	<Frapper onClick={this.handleFrapper2}/>
        	<br/>
        	<Dormir onClick={this.handleDormir2}/>
        </div>
        <div className="Perso-2" id="perso2">
        	<Personnage nom={this.state.nom2} prenom={this.state.prenom2} force={this.state.force2} vie={this.state.vie2} />
        	 <br/>
        	<Frapper onClick={this.handleFrapper1}/>
        	<br/>
        	<Dormir onClick={this.handleDormir1}/>
        </div>
     </center>
    </div>


		);

	}

}

export default Personnage;