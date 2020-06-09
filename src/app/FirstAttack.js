import React, { Component } from 'react';

import './App.css';

class FirstAttack extends Component {
	handleClick = () => {
		const dice = this.props.throwDice();
		if (dice > this.props.diceOne) {
			alert(
				`Vous faites ${dice} et vous commencez.
C'est parti !`
			);
			this.props.throwDices();
			this.props.nextStep();
		}
		if (dice <= this.props.diceOne) {
			alert(
				`Vous faites ${dice}. Le dragon commence.
C'est parti !`
				);
			this.props.throwDices();
			this.props.switchHand();
			this.props.nextStep();
		}
	}
	render() {
		return (
			<div>
				<h2>Premier assaut</h2>
				<p>Le moment est venu de savoir qui attaque le premier. Ensuite, ce sera chacun son tour.</p>
				<p>Vous avez devant vous le score du dragon. Tâchez de faire mieux.
					Ensuite vous serez seul, chevalier&nbsp;!</p>
				<button onClick={this.handleClick}>J'arrive, démon&nbsp;!</button>
			</div>
		);
	}
}

export default FirstAttack;
