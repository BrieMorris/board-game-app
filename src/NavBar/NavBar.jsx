import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useSelector } from 'react-redux';

function NavBar() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Table Top <br/> Tracker</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {/* {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )} */}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/Profile">
              Profile
            </Link>

            <Link className="navLink" to="/BrowseGames">
            Browse Games
             </Link>

            <Link className="navLink" to="/RecordGame">
             Record Game
            </Link>

          

            {/* <LogOutButton className="navLink" /> */}
          </>
        )}

        
      </div>
    </div>
  );
}

export default NavBar;
