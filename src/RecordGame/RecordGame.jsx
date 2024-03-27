import React, { useState } from 'react';
import {useSelector} from 'react-redux';

//Stretch Goal: Record Games funtion for users to record games they have played
function RecordGame(props) {

  // const store = useSelector((store) => store);
  

  return (
    <div>
      <h1>Record Your Game</h1>
      <h2>What game did you play?</h2>
      <button>Add Game</button>
      <h2>Record players & scores</h2> 
      <button>Players & Scores</button>
      <h2>Add an image from your game!</h2>
      <button>Add Image</button>

    </div>
  );
}

export default RecordGame;