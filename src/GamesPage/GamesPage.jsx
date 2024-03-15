import React, { useState } from 'react';
import {useSelector} from 'react-redux';

//function to show gallery of games
function GameGallery(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Check out the games included in Table Top Tracker!');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default GameGallery;