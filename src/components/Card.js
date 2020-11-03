import React, {Component} from 'react';

class Card extends Component{
	render() {
		return(
			<div className="card-item">
				<img src={this.props.image} alt=""/>
			</div>
		)
	}
}

export default Card;