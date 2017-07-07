// Import modules for ComponentName
import React, { Component } from 'react';
import Search from './components/Search';
import Map from './components/Map';
import CurrentPlace from './components/CurrentPlace';
import Placemarks from './components/Placemarks';

import './App.css';
import 'react-bootstrap';
import 'css-type-base';



// Create a component class or a statelsss functional component (see below)
class App extends Component {
	// ComponentName constructor
	constructor() {
		// Initialize `this` class (ComponentName) by calling the constructor of its parent class (Component) 
		super();
		// Set initial state of ComonentName
		this.state = {
			favorites: this.setFavorites(),
			currentPlace: 'Mombasa, Kenya',
			coords: {
				lat: -4.05,
				lng: 39.666667
			}
		};
		// Bind ComponentName methods to ComponentName
		this.setLocation = this.setLocation.bind(this);
		this.addFavorite = this.addFavorite.bind(this);
		this.removeFavorite = this.removeFavorite.bind(this);
		this.toggleFavorite = this.toggleFavorite.bind(this);
	}

	setFavorites() {
		let favorites = [];
		if (localStorage.favorites) {
			favorites = JSON.parse(localStorage.favorites);
		}

		return favorites;
	}

	setLocation(place, coords) {
		this.setState({
			currentPlace: place,
			coords: coords
			});
	}

	toggleFavorite(place) {
		const { coords } = this.state;

		if (this.isFavorite(place)) {
			this.removeFavorite(place);
		} else {
			this.addFavorite(place, coords);
		}
	}

	removeFavorite(place) {
		const favorites = this.state.favorites;
		let index = -1;

		for (let i = 0; i < favorites.length; i++) {
			if (favorites[i].place === place) {
				index = i;
				break;
			}
		}

		if (index !== -1) {
			favorites.splice(index, 1);

			this.setState({
				favorites: favorites
			});

			console.log('Remove', favorites);
			localStorage.favorites = JSON.stringify(favorites);
		}
	}

	addFavorite(place,coords) {
		const favorites = this.state.favorites;

		favorites.push({
			place: place,
			coords: coords,
			timestamp: Date.now()
		});

		console.log('Set state', favorites);
		this.setState({
			favorites:favorites
		});

		console.log('Add favorite', favorites);
		localStorage.favorites = JSON.stringify(favorites);
	}

	isFavorite(place) {
		const favorites = this.state.favorites;

		for (let i = 0; i < favorites.length; i++) {
			if (favorites[i].place === place) {
				return true;
			}
		}

		return false;
	}


// Define ComponentName methods

render() {
	const { currentPlace, coords, favorites } = this.state;
	const { lat, lng } = coords;
	const isFavorite = this.isFavorite(currentPlace);

	return (
		// Render JSX for COmponentName
		<div className="App">
			<h1 className="heading">Placemarks</h1>
			<Search onSuggest={this.setLocation} />
			<Map lat={lat} lng={lng} />
			<CurrentPlace currentPlace={currentPlace} coords={coords} onFavoriteToggle={this.toggleFavorite} favorite={isFavorite} />
			<Placemarks favorites={favorites} activePlace={currentPlace} onClick={this.setLocation} />
		</div>
	);
  }
}

export default App;
























