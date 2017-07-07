import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

class CurrentPlace extends Component {
	constructor() {
		super();
		this.toggleFavorite = this.toggleFavorite.bind(this);
	}
	toggleFavorite() {
	this.props.onFavoriteToggle(this.props.currentPlace);
	}

render() {
	const { currentPlace } = this.props;
	const { lat, lng } = this.props.coords;
	let starClassName = "star-empty";

	if (this.props.favorite) {
		starClassName = "star";
	}

	return (
		<div className="current-place">
		<h3 className="place">{currentPlace}</h3>
		<Glyphicon className="star" bsSize="large" glyph={starClassName} onClick={this.toggleFavorite} aria-hidden="true" />
			<span className="current-coords">{lat}, {lng}</span>
		</div>				
	);
	}
}

  export default CurrentPlace;