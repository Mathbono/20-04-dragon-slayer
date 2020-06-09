import React, { Component } from 'react';

import './App.css';

class FightExplanation extends Component {
	handleClick = () => {
		this.props.nextStep();
	}
	render() {
		return (
			<div>
				<h2>Déroulement</h2>
				<p>Le dragon vous fait face. C'est une brute aussi épaisse que sa cuirasse&nbsp;!</p>
				<p>
					Votre expérience de chevalier vous fait comprendre
					que votre ennemi a <strong><u>{this.props.lifeDragon}&nbsp;PV</u></strong>.
					Il a également <strong><u>{this.props.skillDragon}&nbsp;PH </u></strong>
					et <strong><u>{this.props.fireball} boule{this.props.fireball > 1 ? 's' : ''} de feu</u></strong>,
					et compte bien s'en servir&nbsp;!
				</p>
				<p>
					Votre force d'attaque doit être suffisante si vous souhaitez porter un coup à ce mastodonte.
					À chaque assaut, vous allez lancer les dés et tâcher de faire <em>inférieur ou égal</em> à vos PH.
					Si vous réussissez, vous portez à votre ennemi un coup qui lui retirera <u>2&nbsp;PV</u>.
					Si vous échouez... vous le ratez.
				</p>
				<p>Il en ira de même pour votre ennemi quand il vous portera un coup de griffe... ou pire.</p>
				<button onClick={this.handleClick}>J'ai la foi de chevalier</button>
			</div>
		);
	}
}

export default FightExplanation;
