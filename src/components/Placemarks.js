import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Placemark from './Placemark';

// Step 5: Get the favorites, onClick, and activePlace props from <App>
const Placemarks = ({ favorites, onClick, activePlace }) => {

  favorites = favorites.map(fav => {
    // Step 5: Get timestamp for each favorite
    // Step 5: Set isActive (boolean) if the favorite place is active
    const { timestamp } = fav;
    const isActive = activePlace === fav.place;

    // Step 5: Render each <Placemark> passing in a timestamp, favorite place, isActive, and the onClick event listener (with the setLocation callback) prop from <App>
    return (
      <Placemark key={timestamp} favorite={fav} timestamp={timestamp} active={isActive} onClick={onClick}></Placemark>
    );
  });

  // Step 5: Render <ListGroup> with the favorites list
  return (
    <ListGroup className="placemarks">
      {favorites}
    </ListGroup>
  );
}

export default Placemarks;