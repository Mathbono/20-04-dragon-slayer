import React, { Component } from 'react';

import './App.css';

class SpecialMoves extends Component {
	handleClick = () => {
		this.props.throwDiceOne();
		this.props.nextStep();
	}
	render() {
		return (
			<div>
				<h2>Coups spéciaux</h2>
				<p>
					Vous l'avez compris, vos PV évolueront (forcément en mal) et même vos PH (en mal également).
					En effet, le dragon aura <u>1 chance sur 6</u> de vous cracher une de ses boules de feu.
					Si elle vous touche, elle vous retirera <u>4&nbsp;PV</u> et <u>1&nbsp;PH</u>.
				</p>
				<p>
					De votre côté, vous pouvez faire usage de votre chance en cas de coup porté
					de la part de l'un ou de l'autre.
					Vous lancez les dés en tâchant de faire <em>inférieur ou égal</em> à vos PC.
					Ce processus <em>consomme</em> <u>1&nbsp;PC</u>&nbsp;! Une règle d'or&nbsp;: la parcimonie&nbsp;!
					Si vous vous en servez pour vous défendre, en cas de succès
					vous ne recevez qu'<u>un point de dommage</u> de la part du dragon <u>au lieu de deux</u>.
					Si vous échouez, vous en recevez <u>trois</u>&nbsp;!
				</p>
				<p>
					Que dire de la boule de feu&nbsp;? Si vous avez de la chance&nbsp;: <u>2&nbsp;PV</u> en moins et vous ne perdez pas de PH.
					Vous n'êtes pas chanceux&nbsp;: vous flambez comme une torche et vous mourez, très cher&nbsp;!
					Une chance dans ce malheur&nbsp;: le dragon se délecte du rôti de chevalier et ne se préoccupe plus du château.
				</p>
				<p>
					Si vous vous en servez pour attaquer,
					en cas de succès vous infligez <u>quatre points de dommage</u> au dragon <u>au lieu de deux</u>.
					Si vous échouez, <u>un seul point de dommage</u>.
				</p>
				{this.props.status !== 'readOnly' &&
					<button onClick={this.handleClick}>J'ai faim de chair à dragon</button>
				}
			</div>
		);
	}
}

export default SpecialMoves;
