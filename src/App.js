import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage';
import Footer from './Foooter/Footer';
import NavBar from './NavBar/NavBar';
import RecordGame from './RecordGame/RecordGame';
import ProfilePage from './ProfilePage /ProfilePage';
import BrowseGames from './BrowseGames/BrowseGames';

function App() {
  return (
    <div>
      {/* homepage */}
      <HomePage/>

      {/* footer route  */}
      <Footer/>


       {/* NavBar route  */}
       {/* <NavBar/> */}

       {/* RecordGame route  */}
       <RecordGame/>

       {/* ProfilePage route  */}
       <ProfilePage/>

       {/* BrowesGames route  */}
       {/* <BrowseGames/> */}

    </div>
  );
}

export default App;
