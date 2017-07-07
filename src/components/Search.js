// Import modules for ComponentName
import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

const google = window.google;

class Search extends Component {
	constructor() {
		super();
		this.onSuggestSelect = this.onSuggestSelect.bind(this);
	}

	onSuggestSelect({ label, location }) {
		this.props.onSuggest(label, location);
		this._geoSuggest.clear();
	
}

render() {

	const fixtures = [
		{label: 'Istanbul, Turkey', location: {lat: 41.013611, lng: 28.955}},
		{label: 'Dubai, United Arab Emirates', location: {lat: 25.263056, lng: 55.297222}},
		{label: 'Bangkok, Thailand', location: {lat: 13.75, lng: 100.466667}}
		];

	return (
		
		<Geosuggest
			ref={el=>this._geoSuggest=el}
			placeholder="Enter a place"
			initialValue=""
			fixtures={fixtures}
			onSuggestSelect={this.onSuggestSelect}
			location={new google.maps.LatLng(-4.05, 39.666667)}
			radius="20" />

		);
	}
}

export default Search;
// ```javascript
