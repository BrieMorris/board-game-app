import React, { useState } from 'react';
import {useSelector} from 'react-redux';

//HomePage function is the landing page for users after login
function HomePage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Table Top Tracking.');

  return (
    <div>
      <h2>{heading}</h2>
      <h1>Welcome, board game enthusists. This is a space for you and your friends to archive the games you play together. First, go and create your profile. Then check out the games included on this app. Or go ahead and add your friends. Everytime you play a game you can add it your Table Top Tracking profile page. When you select a game that info will automatically be added. Then you add: the people you played with, each persons scores, a photo from the game and any addtional memories you want to look back on.</h1>
    </div>
  );
}

export default HomePage;