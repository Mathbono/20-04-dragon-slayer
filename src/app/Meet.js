import React, { Component } from 'react';

import './App.css';

class Meet extends Component {
	handleClick = () => {
		this.props.equipment();
		this.props.nextStep();
	}
	render() {
		return (
			<div>
				<h2>C'était votre destin</h2>
				<p>Le dragon attaque le château, chevalier&nbsp;!</p>
				<p>Vous devez prendre les armes afin de l'occire&nbsp;!</p>
				<button onClick={this.handleClick}>Mon épée&nbsp;! Mon heaume&nbsp;! Mon armure&nbsp;!</button>
			</div>
		);
	}
}

export default Meet;
