import React, {Component} from 'react';

class Card extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div className="card-item">
				<img src={this.props.image} />
			</div>
		)
	}
}

export default Card;