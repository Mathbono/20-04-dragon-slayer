import React, { Component } from 'react';

import './App.css';
import Meet from './Meet';
import SkillExplanation from './SkillExplanation';
import FightExplanation from './FightExplanation';
import SpecialMoves from './SpecialMoves';
import FirstAttack from './FirstAttack';
import PairDices from './PairDices';
import GameKnight from './GameKnight';
import GameDragon from './GameDragon';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hand: true,
			step: 0,
			diceOne: 0,
			diceTwo: 0,
			initialLifeDragon: 0,
			initialLifeKnight: 0,
			lifeDragon: 0,
			skillDragon: 0,
			fireball: 0,
			lifeKnight: 0,
			skillKnight: 0,
			luckKnight: 0,
			successSkill: true,
			successLuck: true
		};
	}
	incrementStep = () => {
		this.setState((state) => ({
			step: state.step + 1
		}));
	}
	switchHand = () => {
		this.setState((state) => ({
			hand: !state.hand
		}));
	}
	controlSkill = hand => {
		if (hand === true) {
			if (this.state.diceOne + this.state.diceTwo <= this.state.skillKnight) {
				this.setState({
					successSkill: true
				});
			}
			else {
				this.setState({
					successSkill: false
				});
			}
		}
		if (hand === false) {
			if (this.state.diceOne + this.state.diceTwo <= this.state.skillDragon) {
				this.setState({
					successSkill: true
				});
			}
			else {
				this.setState({
					successSkill: false
				});
			}
		}
	}
	controlLuck = () => {
		if (this.throwDice() + this.throwDice() <= this.state.luckKnight) {
			this.setState({
				successLuck: true
			});
		}
		else {
			this.setState({
				successLuck: false
			});
		}
		this.setState((state) => ({
			luckKnight: state.luckKnight - 1
		}));
	}
	controlInjury = (hand, luck = null, fireball = false) => {
		if (hand === true) {
			switch (luck) {
				case null:
					this.setState((state) => ({
						lifeDragon: state.lifeDragon - 2
					}));
					break;
				case true:
					this.setState((state) => ({
						lifeDragon: state.lifeDragon - 4
					}));
					break;
				case false:
					this.setState((state) => ({
						lifeDragon: state.lifeDragon - 1
					}));
					break;
				default:
					break;
			}
		}
		if (hand === false) {
			if (fireball === true) {
				switch (luck) {
					case null:
						this.setState((state) => ({
							lifeKnight: state.lifeKnight - 4,
							skillKnight: state.skillKnight - 1
						}));
						break;
					case true:
						this.setState((state) => ({
							lifeKnight: state.lifeKnight - 2
						}));
						break;
					case false:
						this.setState({
							lifeKnight: 0
						});
						break;
					default:
						break;
				}
				this.setState((state) => ({
					fireball: state.fireball - 1
				}));
			}
			else {
				switch (luck) {
					case null:
						this.setState((state) => ({
							lifeKnight: state.lifeKnight - 2
						}));
						break;
					case true:
						this.setState((state) => ({
							lifeKnight: state.lifeKnight - 1
						}));
						break;
					case false:
						this.setState((state) => ({
							lifeKnight: state.lifeKnight - 3
						}));
						break;
					default:
						break;
				}
			}
		}
	}
	handleEquipment = () => {
		this.setState({
			lifeDragon: this.throwDice() + this.throwDice() + 12,
			skillDragon: this.throwDice() + 6,
			fireball: this.throwDice(),
			lifeKnight: this.throwDice() + this.throwDice() + 12,
			skillKnight: this.throwDice() + 6,
			luckKnight: this.throwDice() + 6
		});
		this.setState((state) => ({
			initialLifeDragon: state.lifeDragon,
			initialLifeKnight: state.lifeKnight
		}));
	}
	throwDice = () => Math.ceil(Math.random() * 6);
	throwDiceOne = () => {
		this.setState({
			diceOne: this.throwDice()
		});
	}
	throwDices = () => {
		this.setState({
			diceOne: this.throwDice(),
			diceTwo: this.throwDice()
		});
	}
	render() {
		if (this.state.step === 0) {
			return <Meet
				equipment={this.handleEquipment}
				nextStep={this.incrementStep}
			/>;
		}
		if (this.state.step === 1) {
			return <SkillExplanation
				lifeKnight={this.state.lifeKnight}
				skillKnight={this.state.skillKnight}
				luckKnight={this.state.luckKnight}
				nextStep={this.incrementStep}
			/>;
		}
		if (this.state.step === 2) {
			return <FightExplanation
				lifeDragon={this.state.lifeDragon}
				skillDragon={this.state.skillDragon}
				fireball={this.state.fireball}
				nextStep={this.incrementStep}
			/>;
		}
		if (this.state.step === 3) {
			return <SpecialMoves
				throwDiceOne={this.throwDiceOne}
				nextStep={this.incrementStep}
			/>;
		}
		if (this.state.step === 4) {
			return (
				<div>
					<PairDices
						step={this.state.step}
						diceOne={this.state.diceOne}
						diceTwo={this.state.diceTwo}
					/>
					<FirstAttack
						diceOne={this.state.diceOne}
						diceTwo={this.state.diceTwo}
						throwDice={this.throwDice}
						throwDices={this.throwDices}
						switchHand={this.switchHand}
						nextStep={this.incrementStep}
					/>
				</div>
			);
		}
		if (this.state.step > 4) {
			if (this.state.lifeDragon <= 0) {
				return <p id="win">A moi la gloire !</p>;
			}
			if (this.state.lifeKnight <= 0) {
				return <p id="dead">La croisade est finie...</p>;
			}
			if (this.state.hand === true) {
				return (
					<div>
						<PairDices
							step={this.state.step}
							hand={this.state.hand}
							diceOne={this.state.diceOne}
							diceTwo={this.state.diceTwo}
						/>
						<GameKnight
							initialLifeDragon={this.state.initialLifeDragon}
							initialLifeKnight={this.state.initialLifeKnight}
							successSkill={this.state.successSkill}
							lifeKnight={this.state.lifeKnight}
							skillKnight={this.state.skillKnight}
							luckKnight={this.state.luckKnight}
							successLuck={this.state.successLuck}
							lifeDragon={this.state.lifeDragon}
							attack={this.controlSkill}
							takeChance={this.controlLuck}
							controlInjury={this.controlInjury}
							throwDices={this.throwDices}
							switchHand={this.switchHand}
							nextStep={this.incrementStep}
						/>
					</div>
				);
			}
			if (this.state.hand === false) {
				return (
					<div>
						<PairDices
							step={this.state.step}
							hand={this.state.hand}
							diceOne={this.state.diceOne}
							diceTwo={this.state.diceTwo}
						/>
						<GameDragon
							initialLifeDragon={this.state.initialLifeDragon}
							initialLifeKnight={this.state.initialLifeKnight}
							successSkill={this.state.successSkill}
							lifeDragon={this.state.lifeDragon}
							skillDragon={this.state.skillDragon}
							luckKnight={this.state.luckKnight}
							successLuck={this.state.successLuck}
							lifeKnight={this.state.lifeKnight}
							skillKnight={this.state.skillKnight}
							fireball={this.state.fireball}
							attack={this.controlSkill}
							takeChance={this.controlLuck}
							controlInjury={this.controlInjury}
							throwDice={this.throwDice}
							throwDices={this.throwDices}
							switchHand={this.switchHand}
							nextStep={this.incrementStep}
						/>
					</div>
				);
			}
		}
	}
}

export default App;
