import React, { Component } from 'react';

import './App.css';
import SpecialMoves from './SpecialMoves';

class GameDragon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			instructions: false,
			spitFire: false
		};
		this.props.attack(false);
		if (this.props.successSkill === true) {
			if (this.props.fireball > 0) {
				if (this.props.throwDice() === 6) {
					this.setState({
						spitFire: true
					});
				}
			}
		}
	}
	seeInstructions = () => {
		this.setState((state) => ({
			instructions: !state.instructions
		}));
	}
	takeChance = () => {
		this.props.takeChance();
		if (this.state.spitFire === true) {
			this.props.controlInjury(false, this.props.successLuck, true);
			if (this.props.successLuck === true) {
				if (this.props.lifeKnight >= 2) {
					alert(
						`Votre chance vous fait faire des merveilles !
Vous ne perdez que 2 PV.
Il vous reste ${this.props.lifeKnight - 2} PV.`
					);
				}
			}
			else {
				alert(
					`Votre prétendue chance vous a perdu ! Vous devenez votre propre brasier funéraire.
Ce n'était pas la meilleure façon de mourir mais c'est sans doute la plus digne...`
				);
			}
		}
		else {
			this.props.controlInjury(false, this.props.successLuck);
			if (this.props.successLuck === true) {
				if (this.props.lifeKnight >= 1) {
					alert(
						`Votre chance vous fait faire des merveilles !
Vous ne perdez qu'un PV.
Il vous reste ${this.props.lifeKnight - 1} PV.`
					);
				}
			}
			else {
				if (this.props.lifeKnight >= 3) {
					alert(
						`Votre prétendue chance vous perdra !
Vous perdez 3 PV.
Il vous reste ${this.props.lifeKnight - 3} PV.`
					);
				}
			}
		}
		this.nextTurn();
	}
	finish = () => {
		if (this.props.successSkill === true) {
			if (this.state.spitFire === true) {
				this.props.controlInjury(false, null, true);
				if (this.props.lifeKnight >= 4) {
					alert(
						`La boule de feu du dragon vous retire 4 PV et 1PH.
Il vous reste ${this.props.lifeKnight - 4} PV et ${this.props.skillKnight - 1} PH.`
					);
				}
			}
			else {
				this.props.controlInjury(false);
				if (this.props.lifeKnight >= 2) {
					alert(
						`Le dragon vous retire 2 PV.
Il vous reste ${this.props.lifeKnight - 2} PV.`
					);
				}
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
								Le dragon ne fait pas plus de ses <strong><u>{this.props.skillDragon}&nbsp;PH</u></strong> et vous atteint !
							</p>
							{this.state.spitFire === true &&
								<p>
									C'est une boule de feu qu'il vous crache ! Il lui en reste {this.props.fireball}.
								</p>
							}
							{this.props.luckKnight > 0 &&
								<button onClick={this.takeChance}>
									Tenter ma chance pour une parade&nbsp;: <strong><u>{this.props.luckKnight}&nbsp;PC</u></strong>
								</button>
							}
						</div> :
						<p>
							Le dragon vous rate. Il aurait dû faire au plus <strong>{this.props.skillDragon}</strong>.
						</p>
					}
					<button onClick={this.seeInstructions}>Voir coups spéciaux</button>
					<button onClick={this.finish}>Attaquer</button>
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

export default GameDragon;
