import React, { Component } from 'react';

import './App.css';

class SkillExplanation extends Component {
	handleClick = () => {
		this.props.nextStep();
	}
	render() {
		return (
			<div>
				<h2>Capacités</h2>
				<p>
					OK, chevalier&nbsp;! Vous avez <strong><u>{this.props.lifeKnight}&nbsp;PV</u></strong> (points de vie).
					Les PV déterminent votre endurance. Chaque coup porté de la part de l'ennemi vous en fera perdre.
					Lorsque vos PV arrivent à zéro, vous vous en doutez, il ne restera de vous qu'un tas de cendres calcinées...
				</p>
				<p>
					Vous avez également <strong><u>{this.props.skillKnight}&nbsp;PH</u></strong> (points d'habileté).
					Les PH déterminent votre adresse au combat et diminuent les chances de rater votre ennemi.
				</p>
				<p>
					Pour finir vous avez <strong><u>{this.props.luckKnight}&nbsp;PC</u></strong> (points de chance).
					Vous en aurez besoin car le talent ne suffit pas toujours.
				</p>
				<button onClick={this.handleClick}>Je suis prêt</button>
			</div>
		);
	}
}

export default SkillExplanation;
