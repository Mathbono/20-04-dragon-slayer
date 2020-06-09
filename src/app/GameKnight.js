import React, { Component } from 'react';

import './App.css';
import SpecialMoves from './SpecialMoves';

class GameKnight extends Component {
	constructor(props) {
		super(props);
		this.state = {
			instructions: false
		};
		this.props.attack(true);
	}
	seeInstructions = () => {
		this.setState((state) => ({
			instructions: !state.instructions
		}));
	}
	takeChance = () => {
		this.props.takeChance();
		this.props.controlInjury(true, this.props.successLuck);
		if (this.props.successLuck === true) {
			if (this.props.lifeDragon >= 4) {
				alert(
					`Votre chance vous fait faire des merveilles !
Vous retirez 4 PV au dragon.
Il lui reste ${this.props.lifeDragon - 4} PV.`
				);
			}
		}
		else {
			if (this.props.lifeDragon >= 1) {
				alert(
					`Votre prétendue chance vous perdra !
Vous ne retirez qu'un PV au dragon.
Il lui reste ${this.props.lifeDragon - 1} PV.`
				);
			}
		}
		this.nextTurn();
	}
	finish = () => {
		if (this.props.successSkill === true) {
			this.props.controlInjury(true);
			if (this.props.lifeDragon >= 2) {
				alert(
					`Vous retirez 2 PV au dragon.
Il lui reste ${this.props.lifeDragon - 2} PV.`
				);
			}
		}
		this.nextTurn();
	}
	nextTurn = () => {
		this.props.throwDices();
		this.props.switchHand();
		this.props.nextStep();
	}
	render() {
		if (this.state.instructions === false) {
			return (
				<div>
					{this.props.successSkill === true ?
						<div>
							<p>
								Vous ne faites pas plus de vos <strong><u>{this.props.skillKnight}&nbsp;PH</u></strong> et vous atteignez votre adversaire !
							</p>
							{this.props.luckKnight > 0 &&
								<button onClick={this.takeChance}>
									Tenter ma chance pour une botte secrète&nbsp;: <strong><u>{this.props.luckKnight}&nbsp;PC</u></strong>
								</button>
							}
						</div> :
						<p>
							Vous ratez votre adversaire. Vous auriez dû faire au plus <strong>{this.props.skillKnight}</strong>.
						</p>
					}
					<button onClick={this.seeInstructions}>Voir coups spéciaux</button>
					<button onClick={this.finish}>A la revoyure</button>
					<div id="k">
						<label for="knight">PV Chevalier :</label>
						<progress
							id="knight"
							max={this.props.initialLifeKnight}
							value={this.props.lifeKnight}
						></progress>
					</div>
					<div id="d">
						<label for="dragon">PV Dragon :</label>
						<progress
							id="dragon"
							max={this.props.initialLifeDragon}
							value={this.props.lifeDragon}
						></progress>
					</div>
				</div>
			);
		}
		else {
			return (
				<div>
					<SpecialMoves status="readOnly"/>
					<button onClick={this.seeInstructions}>Revenir au jeu</button>
				</div>
			);
		}
	}
}

export default GameKnight;
