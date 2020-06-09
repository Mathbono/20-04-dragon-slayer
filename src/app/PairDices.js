import React, { Component } from 'react';

import './App.css';
import './dice-1.0.min.css';

class PairDices extends Component {
	render() {
		return (
			<div>
				{this.props.step > 4 &&
					<h3>{this.props.hand ? 'Coup du chevalier' : 'Coup du dragon'}</h3>
				}
				<div id="dices">
					<span className={'dice dice-' + this.props.diceOne} title={this.props.diceOne}></span>
					{this.props.diceTwo > 0 &&
						<span className={'dice dice-' + this.props.diceTwo} title={this.props.diceTwo}></span>
					}
				</div>
			</div>
		);
	}
}

export default PairDices;
