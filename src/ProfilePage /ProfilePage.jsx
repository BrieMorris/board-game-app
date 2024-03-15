import React, { useState } from 'react';
import {useSelector} from 'react-redux';

//userProfile component is for user to view and edit their profile.
function userProfile(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  

  return (
    <div>
      <h1>Import Users Name</h1>
      <h2>Import users image</h2>
      <button>Change Profile Picture </button>
      <h2>-User's name- Gallery of Games</h2>
      <button>Record a Game</button>
    </div>
  );
}

export default userProfile;