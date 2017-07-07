// Import modules for ComponentName
import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import moment from 'moment';
import '../App.css';

// Create a component class or a statelsss functional component (see below)
class Placemark extends Component {
	// ComponentName constructor
	constructor() {
		// Initialize `this` class (ComponentName) by calling the constructor of its parent class (Component) 
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { place, coords } = this.props.favorite;
		this.props.onClick(place, coords);
	}

render() {

	const { favorite, timestamp } = this.props;
	let placeClassName = 'placemark';
	if (this.props.active) {
		placeClassName += ' active';
	}

	return (
		<ListGroupItem className={placeClassName} onClick={this.handleClick}> 
			{favorite.place}
			<span className="createdAt">
				{moment(timestamp).fromNow()}
			</span>
		</ListGroupItem>
	);
	}
}

export default Placemark;







