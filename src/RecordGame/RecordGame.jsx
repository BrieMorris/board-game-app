import React, { useState } from 'react';
import {useSelector} from 'react-redux';

//RecordGames function keeps track of the games users input 
function RecordGames(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Change this.');

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default RecordGames;